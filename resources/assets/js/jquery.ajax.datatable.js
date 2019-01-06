// init data
require('./bootstrap');

// load features
var DynamicColumns     = require('./features/dynamic-columns');
var FilterAllOrTrash   = require('./features/filter-all-or-trash');
var MultipleCheckboxes = require('./features/multiple-checkboxes');
var ColumnFilter       = require('./features/column-filter');
var ResetFilter        = require('./features/reset-filter');
var AjaxDatatableModal = require('./features/modal');
var TableHelper        = require('./features/table-helper');

AjaxDatatable = function () {
    /**
     * Init variables
     */
    var defaultSortColumnIndex = TableHelper.getDefaultSortColumnIndex(),
        defaultSortOrder       = TableHelper.getDefaultSortOrder(),
        recordPerPage          = TableHelper.getRecordPerPage(),
        currentLanguage        = TableHelper.getCurrentLanguage();

    /**
     * The table instance
     */
    var dataTable;

    /**
     * The callback after table was loaded
     */
    var onAjaxLoadedCallback;

    /**
     * The callback to handle group action submit event
     */
    var onGroupActionSubmitCallback;

    /**
     * Init the datatable
     *
     * @param $table
     */
    var initTable = function ($table) {
        var grid = new Datatable();

        FilterAllOrTrash.checkPreviousFilter($table);

        grid.init({
            src: $table,
            onSuccess: function (grid, response) {},
            onError: function (grid) {},
            onDataLoad: function(grid) {},
            loadingMessage: 'Loading...',
            dataTable: {
                "destroy": true,
                "dom": ADConst.controls.tableDom,

                // save datatable state(pagination, sort, etc) in local storage.
                "bStateSave": true,
                "fnStateSaveParams": function ( oSettings, sValue ) {
                    $table.find("tr.filter .form-control").each(function() {
                        sValue[$(this).attr('name')] = $(this).val();
                    });

                    return sValue;
                },
                "fnStateLoadParams": function ( oSettings, oData ) {
                    // load custom filters saved data from the state
                    $table.find("tr.filter .form-control").each(function() {
                        var element = $(this);
                        if (oData[element.attr('name')]) {
                            element.val( oData[element.attr('name')] );
                        }
                    });

                    return true;
                },

                "columns": DynamicColumns.build($table),
                "language": currentLanguage,
                "pageLength": recordPerPage, // default record per page
                "lengthMenu": [
                    [recordPerPage, recordPerPage + 10, recordPerPage + 20, -1],
                    [recordPerPage, recordPerPage + 10, recordPerPage + 20, "All"] // change per page values here
                ],
                "ordering": true,
                "order": [[ defaultSortColumnIndex, defaultSortOrder ]], // override default sort of datatables plugin

                "ajax": {
                    "url": $table.attr('data-ajax-src'), // ajax source
                    "data": function ( data ) {
                        data = TableHelper.prepareAjaxParams(data, $table);

                        $.blockUI(ADConst.blockUI);
                    },
                },

                fnServerParams: function(data) {
                    data = TableHelper.handleFnServerParams(data);
                },

                fnDrawCallback: function(oSettings) {
                    $.unblockUI();
                    TableHelper.onAjaxLoaded();

                    if (typeof onAjaxLoadedCallback === "function") {
                        onAjaxLoadedCallback(oSettings);
                    }
                },
            }
        });

        // handle group action submit button click
        grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
            e.preventDefault();
            var action = $(".table-group-action-input", grid.getTableWrapper());
            if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                try {
                    if (typeof onGroupActionSubmitCallback !== "function") {
                        toastr.error('Please set the event handler');
                        return;
                    }

                    onGroupActionSubmitCallback(action, grid); // call the callback handler
                } catch(err) {
                    toastr.error(err);
                }
            } else if (action.val() == "") {
                toastr.error('Please select an action');
            } else if (grid.getSelectedRowsCount() === 0) {
                toastr.error('No record selected');
            }
        });

        dataTable = grid.getDataTable();
        return dataTable;
    }

    var bindUIEvents = function(_dataTbl, $table) {
        FilterAllOrTrash.setTable(dataTable).bindEvents();
        MultipleCheckboxes.setTable(dataTable).bindEvents();
        ColumnFilter.setTable(dataTable, $table).bindEvents();
        ResetFilter.setTable(dataTable, $table).bindEvents();
        AjaxDatatableModal.bindEvents();
    }

    return {

        init: function (onChangeColumnClassesCallback) {
            DynamicColumns.setModifyColumnClassCallback(onChangeColumnClassesCallback);

            var tables = $(ADConst.controls.table);
            if (tables.length > 0) {
                $(tables).each(function() {
                    TableHelper.initPickers();
                    const _dataTbl = initTable($(this));
                    const id = $(this).attr('id');    
                    ADConst.controls.dataTableArr[id.replace(/-/g, '_')] = _dataTbl;   
                    bindUIEvents(_dataTbl, $(this));
                });
            }
        },

        getDataTable: function() {
            return dataTable;
        },

        onAjaxLoaded: function(callback) {
            onAjaxLoadedCallback = callback;
        },

        onGroupActionSubmit: function(callback) {
            onGroupActionSubmitCallback = callback;
        },

        filter: function(type) {
            FilterAllOrTrash.filter(type);
        },

        getObjTableCur: function($_table) { 
            let datatable; 
            if ($_table.attr('id')) {
                datatable = eval('ADConst.controls.dataTableArr.' + $_table.attr('id').replace(/-/g, '_'));
            }
            return datatable;
        },

        reloadTable: function($table) {
            TableHelper.initPickers();
            var _dataTbl = initTable($table);
            var id = $table.attr('id');
            ADConst.controls.dataTableArr[id.replace(/-/g, '_')] = _dataTbl;
            bindUIEvents(_dataTbl, $table);
        }
    };
}();
