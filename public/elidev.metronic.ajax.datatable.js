/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

ADConst = {
    blockUI: {
        message: '<div class="m-loader m-loader--success  m-loader--lg" style="width: 30px; display: inline-block;"></div>',
        css: { "border": "none", "background": "none" },
        centerX: true,
        centerY: true
    },

    default_per_page: 10,

    controls: {
        dataTableArr: {},
        // table
        table: 'table[id$="datatable"]',
        tableTBody: 'table[id$="datatable"] tbody',
        tableGroupActionInput: '.table-container .table-group-action-input',
        tableHeadingColumns: 'table[id$="datatable"] thead tr th.heading-columns',
        tableActionColumn: 'table[id$="datatable"] .table-actions',
        tableDom: "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
        tableFilterBar: '#filter-navigation',

        // form
        formDeletePermanently: '#ajaxdatatable-delete-modal form',

        // buttons
        btnFilterAll: '#datatable-btn-all',
        btnFilterTrash: '#datatable-btn-trashed',
        btnActionFilter: '#filter-navigation .btn-group .action-filter',
        btnResetFilter: '.btn-filter-cancel',
        btnRestore: 'a.btn-table-restore',
        btnDestroy: '.btn-table-destroy',
        btnShow: '.btn-table-show',
        btnEdit: '.btn-table-edit',
        btnTrash: '.btn-table-trash',
        btnClearDateFilter: '.btn-clear-date-filter',

        // checkboxes
        checkboxSelectAll: 'thead input[name="select_all"]',
        allCheckboxes: 'table[id$="datatable"] tbody input[type="checkbox"]',
        notCheckedCheckboxes: 'table[id$="datatable"] tbody input[type="checkbox"]:not(:checked)',
        checkedCheckboxes: 'table[id$="datatable"] tbody input[type="checkbox"]:checked',
        checkboxColumn: 'table[id$="datatable"] thead tr th.heading-columns.heading-columns-checkbox',

        // date time filters
        dateFilter: '.ajaxdatatable-date-filter',
        dateTimeFilter: 'input.ajaxdatatable-datetime-filter',
        timeFilter: 'input.ajaxdatatable-time-filter',

        // misc
        datePicker: '.date-picker',
        alerts: 'div.ustom-alerts.alert'
    },

    // local storage keys
    localStorage: {
        filterKey: 'datatable_filter'
    },

    // datatables sorting classes
    sortClass: {
        asc: 'sorting_asc',
        desc: 'sorting_desc',
        disable: 'sorting_disabled'
    },

    language: {
        en: {},

        de: {
            "sEmptyTable": "Keine Daten in der Tabelle vorhanden",
            "sInfo": "<span class='seperator'>|</span>_START_ bis _END_ von _TOTAL_ Einträgen",
            "sInfoEmpty": "0 bis 0 von 0 Einträgen",
            "sInfoFiltered": "(gefiltert von _MAX_ Einträgen)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "<span class='seperator'>|</span>Aussicht _MENU_ Einträge anzeigen",
            "sLoadingRecords": "Wird geladen...",
            "sProcessing": "Bitte warten...",
            "sSearch": "Suchen",
            "sZeroRecords": "Keine Einträge vorhanden.",
            "oPaginate": {
                "sFirst": "Erste",
                "sPrevious": "Zurück",
                "sNext": "Nächste",
                "sLast": "Letzte",
                "page": "Seite",
                "pageOf": "von"
            },
            "oAria": {
                "sSortAscending": ": aktivieren, um Spalte aufsteigend zu sortieren",
                "sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
            }
        }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(11);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// init data
__webpack_require__(0);

// load features
var DynamicColumns = __webpack_require__(3);
var FilterAllOrTrash = __webpack_require__(5);
var MultipleCheckboxes = __webpack_require__(6);
var ColumnFilter = __webpack_require__(7);
var ResetFilter = __webpack_require__(8);
var AjaxDatatableModal = __webpack_require__(9);
var TableHelper = __webpack_require__(10);

AjaxDatatable = function () {
    /**
     * Init variables
     */
    var defaultSortColumnIndex = TableHelper.getDefaultSortColumnIndex(),
        defaultSortOrder = TableHelper.getDefaultSortOrder(),
        recordPerPage = TableHelper.getRecordPerPage(),
        currentLanguage = TableHelper.getCurrentLanguage();

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
    var initTable = function initTable($table) {
        var grid = new Datatable();

        FilterAllOrTrash.checkPreviousFilter($table);

        grid.init({
            src: $table,
            onSuccess: function onSuccess(grid, response) {},
            onError: function onError(grid) {},
            onDataLoad: function onDataLoad(grid) {},
            loadingMessage: 'Loading...',
            dataTable: {
                "destroy": true,
                "dom": ADConst.controls.tableDom,

                // save datatable state(pagination, sort, etc) in local storage.
                "bStateSave": true,
                "fnStateSaveParams": function fnStateSaveParams(oSettings, sValue) {
                    $table.find("tr.filter .form-control").each(function () {
                        sValue[$(this).attr('name')] = $(this).val();
                    });

                    return sValue;
                },
                "fnStateLoadParams": function fnStateLoadParams(oSettings, oData) {
                    // load custom filters saved data from the state
                    $table.find("tr.filter .form-control").each(function () {
                        var element = $(this);
                        if (oData[element.attr('name')]) {
                            element.val(oData[element.attr('name')]);
                        }
                    });

                    return true;
                },

                "columns": DynamicColumns.build($table),
                "language": currentLanguage,
                "pageLength": recordPerPage, // default record per page
                "lengthMenu": [[recordPerPage, recordPerPage + 10, recordPerPage + 20, -1], [recordPerPage, recordPerPage + 10, recordPerPage + 20, "All"] // change per page values here
                ],
                "ordering": true,
                "order": [[defaultSortColumnIndex, defaultSortOrder]], // override default sort of datatables plugin

                "ajax": {
                    "url": $table.attr('data-ajax-src'), // ajax source
                    "data": function data(_data) {
                        _data = TableHelper.prepareAjaxParams(_data, $table);

                        $.blockUI(ADConst.blockUI);
                    }
                },

                fnServerParams: function fnServerParams(data) {
                    data = TableHelper.handleFnServerParams(data);
                },

                fnDrawCallback: function fnDrawCallback(oSettings) {
                    $.unblockUI();
                    TableHelper.onAjaxLoaded();

                    if (typeof onAjaxLoadedCallback === "function") {
                        onAjaxLoadedCallback(oSettings);
                    }
                }
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
                } catch (err) {
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
    };

    var bindUIEvents = function bindUIEvents(_dataTbl, $table) {
        FilterAllOrTrash.setTable(dataTable).bindEvents();
        MultipleCheckboxes.setTable(dataTable).bindEvents();
        ColumnFilter.setTable(dataTable, $table).bindEvents();
        ResetFilter.setTable(dataTable, $table).bindEvents();
        AjaxDatatableModal.bindEvents();
    };

    return {

        init: function init(onChangeColumnClassesCallback) {
            DynamicColumns.setModifyColumnClassCallback(onChangeColumnClassesCallback);

            var tables = $(ADConst.controls.table);
            if (tables.length > 0) {
                $(tables).each(function () {
                    TableHelper.initPickers();
                    var _dataTbl = initTable($(this));
                    var id = $(this).attr('id');
                    ADConst.controls.dataTableArr[id.replace(/-/g, '_')] = _dataTbl;
                    bindUIEvents(_dataTbl, $(this));
                });
            }
        },

        getDataTable: function getDataTable() {
            return dataTable;
        },

        onAjaxLoaded: function onAjaxLoaded(callback) {
            onAjaxLoadedCallback = callback;
        },

        onGroupActionSubmit: function onGroupActionSubmit(callback) {
            onGroupActionSubmitCallback = callback;
        },

        filter: function filter(type) {
            FilterAllOrTrash.filter(type);
        },

        getObjTableCur: function getObjTableCur($_table) {
            var datatable = void 0;
            if ($_table.attr('id')) {
                datatable = eval('ADConst.controls.dataTableArr.' + $_table.attr('id').replace(/-/g, '_'));
            }
            return datatable;
        },

        reloadTable: function reloadTable($table) {
            TableHelper.initPickers();
            var _dataTbl = initTable($table);
            var id = $table.attr('id');
            ADConst.controls.dataTableArr[id.replace(/-/g, '_')] = _dataTbl;
            bindUIEvents(_dataTbl, $table);
        }
    };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

var ButtonRenderer = __webpack_require__(4);

DynamicColumns = function () {
    // init variables
    var $headingColumns = $(ADConst.controls.tableHeadingColumns),
        $tableActions = $(ADConst.controls.tableActionColumn);

    // define callbacks
    var onChangeColumnClassCallback;

    var buildColumns = function buildColumns($table) {
        var definedColumns,
            actionColumn = [];
        definedColumns = renderDefinedColumns($table);
        actionColumn = renderActionColumn($table);
        return definedColumns.concat(actionColumn);
    };

    var renderDefinedColumns = function renderDefinedColumns($table) {
        var columns = [];
        $table.find("tr.heading > th").each(function (key, item) {
            var columnName = $(item).attr('data-col-name');
            if (typeof columnName == 'undefined' || columnName == '') {
                return true; // skips to the next iteration
            }

            // add column custom classes via callback function
            var customClasses = '';
            if (typeof onChangeColumnClassCallback === 'function') {
                customClasses = onChangeColumnClassCallback(columnName);

                var classes = $(item).attr('data-col-class');
                if (typeof classes != 'undefined' && classes != '') {
                    customClasses += ' ' + classes;
                }
            }

            var isOrderable = $(item).attr('data-col-orderable') === '1';
            columns.push({
                data: columnName,
                name: columnName,
                orderable: isOrderable,
                className: customClasses,

                // if data is displayed by HTML format (i.e: status, image) -> render html
                mRender: function mRender(data, type, row) {
                    var html = $(item).attr('data-html');
                    if (typeof html != 'undefined' && html != '') {
                        if (columnName == 'status' && data == 'pending') {
                            html = html.replace('fa-check font-green-jungle', 'fa-refresh font-red');
                            html = html.replace('Publish', 'Pending');
                        }
                        return html.replace('#data#', row[columnName]);
                    }

                    return data;
                }
            });
        });

        return columns;
    };

    var renderActionColumn = function renderActionColumn($table) {
        var columns = [];
        // if (typeof $tableActions == 'undefined' || $tableActions.length <= 0) {
        //     return columns;
        // }

        columns.push({
            orderable: false,
            className: "dt-body-center",
            mRender: function mRender(data, type, row) {
                var btnShow = ButtonRenderer.setTable($table).renderShowButton(data, type, row);
                var btnEdit = ButtonRenderer.setTable($table).renderEditButton(data, type, row);
                var btnDelete = ButtonRenderer.setTable($table).renderDeleteButton(data, type, row);
                var btnAssign = ButtonRenderer.setTable($table).renderAssignButton(data, type, row);
                var btnRestore = ButtonRenderer.setTable($table).renderRestoreButton(data, type, row);
                var btnTrash = ButtonRenderer.setTable($table).renderTrashButton(data, type, row);
                var btnUnblock = ButtonRenderer.setTable($table).renderUnblockButton(data, type, row);
                var btnTransaction = ButtonRenderer.setTable($table).renderTransactionButton(data, type, row);

                return btnShow + " " + btnEdit + " " + btnDelete + " " + btnAssign + " " + btnRestore + " " + btnTrash + " " + btnUnblock + " " + btnTransaction;
            }
        });

        return columns;
    };

    var _setModifyColumnClassCallback = function _setModifyColumnClassCallback(callback) {
        onChangeColumnClassCallback = callback;
    };

    return {
        build: function build($table) {
            return buildColumns($table);
        },

        setModifyColumnClassCallback: function setModifyColumnClassCallback(callback) {
            _setModifyColumnClassCallback(callback);
        }
    };
}();

module.exports = DynamicColumns;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

RenderActionButtons = function () {
    var $tableActions = $(ADConst.controls.tableActionColumn);

    var _setTable = function _setTable($_table) {
        $tableActions = $_table.find('.table-actions');
    };

    return {
        renderShowButton: function renderShowButton(data, type, row) {
            var showRoute = $tableActions.attr('data-show-action-route');
            if (typeof showRoute == 'undefined' || showRoute == '') {
                return '';
            }

            var showAction = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-show-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-show-role") + '" ' + 'href="' + showRoute + '" ' + 'class="tooltips btn btn-info btn-table-show ' + $tableActions.attr("data-show-action-color") + '" ' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-show-action-icon") + '"></i> ' + $tableActions.attr("data-show-action-name") + '</a>';
            return showAction.replace("-1", row.id);
        },

        renderEditButton: function renderEditButton(data, type, row) {
            var editRoute = $tableActions.attr('data-edit-action-route');
            if (typeof editRoute == 'undefined' || editRoute == '') {
                return '';
            }

            var editAction = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-edit-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-edit-role") + '" ' + 'href="' + editRoute + '" ' + 'class="tooltips btn btn-accent btn-table-edit ' + $tableActions.attr("data-edit-action-color") + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-edit-action-icon") + '"></i> ' + $tableActions.attr('data-edit-action-name') + '</a>';
            return editAction.replace("-1", row.id);
        },

        renderDeleteButton: function renderDeleteButton(data, type, row) {
            var deleteRoute = $tableActions.attr('data-delete-action-route');
            if (typeof deleteRoute == 'undefined' || deleteRoute == '') {
                return '';
            }

            var deleteAction = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-delete-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-delete-role") + '" ' + 'href="#' + $tableActions.attr("data-modal") + '" ' + 'data-toggle="modal" ' + 'data-href="' + deleteRoute + '" ' + ' ' + 'class="tooltips btn btn-danger btn-delete btn-table-destroy ' + $tableActions.attr("data-delete-action-color") + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-delete-action-icon") + '"></i> ' + $tableActions.attr('data-delete-action-name') + '</a>';
            return deleteAction.replace("-1", row.id);
        },

        renderAssignButton: function renderAssignButton(data, type, row) {
            var assignRoute = $tableActions.attr('data-assign-action-route');
            if (typeof assignRoute == 'undefined' || assignRoute == '') {
                return '';
            }

            var assignAction = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-assign-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-assign-role") + '" ' + 'href="' + assignRoute + '" ' + 'class="tooltips btn btn-accent btn-table-assign ' + $tableActions.attr("data-assign-action-color") + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-assign-action-icon") + '"></i> ' + $tableActions.attr('data-assign-action-name') + '</a>';
            return assignAction.replace("-1", row.id);
        },

        renderRestoreButton: function renderRestoreButton(data, type, row) {
            var restoreRoute = $tableActions.attr('data-restore-action-route');
            if (typeof restoreRoute == 'undefined' || restoreRoute == '') {
                return '';
            }

            var restoreActon = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-restore-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-restore-role") + '" ' + 'href="' + restoreRoute + '" ' + 'class="tooltips btn btn-accent btn-table-restore ' + $tableActions.attr("data-restore-action-color") + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-restore-action-icon") + '"></i> ' + $tableActions.attr('data-restore-action-name') + '</a>';
            return restoreActon.replace("-1", row.id);
        },

        renderTrashButton: function renderTrashButton(data, type, row) {
            var trashRoute = $tableActions.attr('data-trash-action-route');
            if (typeof trashRoute == 'undefined' || trashRoute == '') {
                return '';
            }

            var trashActon = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-trash-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-trash-role") + '" ' + 'href="' + trashRoute + '" ' + 'class="tooltips btn btn-danger btn-table-trash ' + $tableActions.attr("data-trash-action-color") + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-trash-action-icon") + '"></i> ' + $tableActions.attr('data-trash-action-name') + '</a>';
            return trashActon.replace("-1", row.id);
        },

        renderUnblockButton: function renderUnblockButton(data, type, row) {
            var unBlockRoute = $tableActions.attr('data-unblock-action-route'),
                unBlockActon = '';

            if (typeof unBlockRoute != 'undefined' && unBlockRoute != '') {
                var disableClass = '';
                if (typeof row.is_disabled != 'undefined' && row.is_disabled) {
                    disableClass = 'anchor-disabled';
                    unBlockRoute = '';
                }

                unBlockActon = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-unblock-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-unblock-role") + '" ' + 'href="#ajaxdatatable-unblock-modal" ' + 'data-toggle="modal" data-href="' + unBlockRoute + '" ' + 'class="tooltips btn btn-accent btn-table-unblock ' + $tableActions.attr("data-unblock-action-color") + " " + disableClass + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-unblock-action-icon") + '"></i> ' + $tableActions.attr("data-unblock-action-name") + '</a>';
                unBlockActon = unBlockActon.replace("-1", row.id);
            }

            return unBlockActon;
        },

        renderTransactionButton: function renderTransactionButton(data, type, row) {
            var transactionRoute = $tableActions.attr('data-transaction-action-route'),
                transactionActon = '';

            if (typeof transactionRoute != 'undefined' && transactionRoute != '') {
                var disableClass = '';
                if (typeof row.is_disabled != 'undefined' && row.is_disabled) {
                    disableClass = 'anchor-disabled';
                    transactionRoute = '';
                }

                transactionActon = '<a data-placement="top" ' + 'data-original-title="' + $tableActions.attr("data-transaction-action-tooltips") + '" ' + 'data-acl-role="' + $tableActions.attr("data-transaction-role") + '" ' + 'href="' + transactionRoute + '" ' + 'data-toggle="modal" data-href="' + transactionRoute + '" ' + 'class="tooltips btn btn-accent btn-table-transaction ' + $tableActions.attr("data-transaction-action-color") + " " + disableClass + '"' + 'target="' + $tableActions.attr("data-target-link") + '">' + '<i class="' + $tableActions.attr("data-transaction-action-icon") + '"></i> ' + $tableActions.attr("data-transaction-action-name") + '</a>';
                transactionActon = transactionActon.replace("-1", row.id);
            }

            return transactionActon;
        },

        setTable: function setTable($_table) {
            _setTable($_table);
            return this;
        }
    };
}();

module.exports = RenderActionButtons;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

FilterAllOrTrash = function () {
    var $tableGroupActionInput = $(ADConst.controls.tableGroupActionInput),
        $btnActionFilter = $(ADConst.controls.btnActionFilter),
        datatable = null,
        $table = null;

    var _setTable = function _setTable($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    };

    var reDraw = function reDraw(type, $_self) {
        // hide un-necessary alerts
        $(ADConst.controls.alerts).hide();

        var status = type == 'all' ? '' : 1;
        var $table = $_self ? $_self.closest('.m-portlet__body').find('table') : $(ADConst.controls.table);
        $table.attr('data-only-trashed', status);

        // re-get data
        datatable.draw();
    };

    var changeUI = function changeUI(type) {
        var $select = $(ADConst.controls.tableGroupActionInput);
        $tableGroupActionInput.val('');
        $btnActionFilter.removeClass('active');

        if (type == 'all') {
            $select.find("option").show();
            $select.find("option[value='bulk_restore']").hide();
            $select.find("option[value='bulk_delete']").hide();
            $(ADConst.controls.btnFilterAll).addClass('active');
        } else {
            $select.find("option[value='bulk_trash']").hide();
            $select.find("option[value='bulk_restore']").show();
            $select.find("option[value='bulk_delete']").show();
            $(ADConst.controls.btnFilterTrash).addClass('active');
        }
    };

    var doFilter = function doFilter(type, $_self) {
        changeUI(type);
        reDraw(type, $_self);
    };

    var _checkPreviousFilter = function _checkPreviousFilter($table) {
        var key = ADConst.localStorage.filterKey;

        if (localStorage.getItem(key) == 'trash') {
            localStorage.removeItem(key);
            $table.attr('data-only-trashed', 1);
            changeUI('trash');
        }
    };

    var bindUIEvents = function bindUIEvents() {
        /**
         * handle "restore" button click event
         */
        $(document).on('click', ADConst.controls.btnRestore, function (e) {
            localStorage.setItem(ADConst.localStorage.filterKey, 'trash');
        });

        /**
         * handle "delete permanently" button click event
         */
        $(document).on('submit', ADConst.controls.formDeletePermanently, function (e) {
            localStorage.setItem(ADConst.localStorage.filterKey, 'trash');
        });

        /**
         * handle "All" filter event click
         */
        $(document).on('click', ADConst.controls.btnFilterAll, function () {
            doFilter('all', $(this));
        });

        /**
         * handle "Trash" filter event click
         */
        $(document).on('click', ADConst.controls.btnFilterTrash, function () {
            doFilter('trash', $(this));
        });
    };

    return {
        filter: function filter(type) {
            type = type.length == 0 ? 'all' : type;
            doFilter(type);
        },

        setTable: function setTable($_ajaxDatatable, $_table) {
            _setTable($_ajaxDatatable, $_table);

            return this;
        },

        checkPreviousFilter: function checkPreviousFilter($table) {
            _checkPreviousFilter($table);
        },


        bindEvents: function bindEvents() {
            bindUIEvents();
        }
    };
}();

module.exports = FilterAllOrTrash;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

MultipleCheckboxes = function () {
    var datatable = null,
        $table = null,
        selectedRows = []; // array holding selected row IDs

    var _setTable = function _setTable($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    };

    // updates "Select all" control status in a data table
    var handleSelectAllCheckbox = function handleSelectAllCheckbox() {
        var $table = datatable.table().node(),
            $allCheckboxes = $('tbody input[type="checkbox"]', $table),
            $checkedCheckboxes = $('tbody input[type="checkbox"]:checked', $table),
            $checkboxSelectAll = $('thead input[name="select_all"]', $table).get(0);

        if ($checkedCheckboxes.length === 0) {
            // if none of the checkboxes are checked
            $checkboxSelectAll.checked = false;
            if ('indeterminate' in $checkboxSelectAll) {
                $checkboxSelectAll.indeterminate = false;
            }
        } else if ($checkedCheckboxes.length === $allCheckboxes.length) {
            // if all of the checkboxes are checked
            $checkboxSelectAll.checked = true;
            if ('indeterminate' in $checkboxSelectAll) {
                $checkboxSelectAll.indeterminate = false;
            }
        } else {
            // if some of the checkboxes are checked
            $checkboxSelectAll.checked = true;
            if ('indeterminate' in $checkboxSelectAll) {
                $checkboxSelectAll.indeterminate = true;
            }
        }
    };

    // handle click on each checkbox
    var onClickEachCheckbox = function onClickEachCheckbox() {
        $(ADConst.controls.tableTBody).on('click', 'input[type="checkbox"]', function (e) {
            var $row = $(this).closest('tr');

            // get row data
            var data = datatable.row($row).data();

            // get row ID
            var rowId = data.id;

            // determine whether row ID is in the list of selected row IDs
            var index = $.inArray(rowId, selectedRows);

            if (this.checked && index === -1) {
                // if checkbox is checked and row ID is not in list of selected row IDs
                selectedRows.push(rowId);
            } else if (!this.checked && index !== -1) {
                // otherwise, if checkbox is not checked and row ID is in list of selected row IDs
                selectedRows.splice(index, 1);
            }

            // update state of "Select all" control
            handleSelectAllCheckbox();

            // prevent click event from propagating to parent
            e.stopPropagation();
        });
    };

    // allow select checkbox when click to it's cell
    var onClickEachCheckboxCell = function onClickEachCheckboxCell() {
        $(ADConst.controls.table).on('click', 'tr td:first-child, thead th:first-child', function (e) {
            $(this).parent().find('input[type="checkbox"]').trigger('click');
        });
    };

    // handle click on "Select all" control
    var onClickSelectAllCheckbox = function onClickSelectAllCheckbox() {
        if (typeof datatable != 'undefined' && datatable) {
            $(ADConst.controls.checkboxSelectAll, datatable.table().container()).on('click', function (e) {
                if (this.checked) {
                    $(ADConst.controls.notCheckedCheckboxes).trigger('click');
                } else {
                    $(ADConst.controls.checkedCheckboxes).trigger('click');
                }

                // prevent click event from propagating to parent
                e.stopPropagation();
            });
        }
    };

    var bindUIEvents = function bindUIEvents() {
        onClickSelectAllCheckbox();

        onClickEachCheckbox();
        onClickEachCheckboxCell();
    };

    return {
        bindEvents: function bindEvents() {
            bindUIEvents();
        },

        setTable: function setTable($_ajaxDatatable, $_table) {
            _setTable($_ajaxDatatable, $_table);

            return this;
        }
    };
}();

module.exports = MultipleCheckboxes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

ColumnFilter = function () {
    var datatable = null,
        timer = null,
        inputColumnIndex = null,
        inputValue = null,
        $table = null;

    var _setTable = function _setTable($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    };

    var onInputFilter = function onInputFilter() {
        $table.on('keyup', 'input.form-control.form-filter.input-sm', function () {
            clearTimeout(timer);

            var datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
            // only submit data if user entered at least 2 characters and blur for 0.5 second
            if ($(this).val().length == 0 || $(this).val().length >= 1) {
                // get current column data
                inputColumnIndex = $(this).data().columnIndex;
                inputValue = $(this).val();

                timer = setTimeout(function () {
                    if (datatable != null && typeof inputColumnIndex != 'undefined' && typeof inputValue != 'undefined') {
                        // fire ajax search
                        datatable.columns(inputColumnIndex).search(inputValue, true, false).draw();

                        // clear current column data
                        inputColumnIndex = null;
                        inputValue = null;
                    }
                }, 500);
            }
        });
    };

    var onDropdownSelectFilter = function onDropdownSelectFilter() {
        $table.on('change', 'select.filter-select', function () {
            var datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
            var columnIndex = $(this).data().columnIndex;
            if (datatable != null && typeof columnIndex != 'undefined') {
                // fire ajax search
                datatable.columns(columnIndex).search($(this).val()).draw();
            }
        });
    };

    var onDateTimeFilter = function onDateTimeFilter() {
        $table.on('change', ADConst.controls.dateFilter, function () {
            var datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
            var columnIndex = $(this).data().columnIndex;
            if (datatable != null && typeof columnIndex != 'undefined') {
                // fire ajax search
                datatable.columns(columnIndex).search($(this).val()).draw();
            }
        });

        $table.on('change', ADConst.controls.dateTimeFilter, function () {
            var datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
            var columnIndex = $(this).data().columnIndex;
            if (datatable != null && typeof columnIndex != 'undefined') {
                // fire ajax search
                datatable.columns(columnIndex).search($(this).val()).draw();
            }
        });
    };

    var bindUIEvents = function bindUIEvents() {
        onInputFilter();
        onDropdownSelectFilter();
        onDateTimeFilter();
    };

    return {
        bindEvents: function bindEvents() {
            bindUIEvents();
        },

        setTable: function setTable($_ajaxDatatable, $_table) {
            _setTable($_ajaxDatatable, $_table);

            return this;
        }
    };
}();

module.exports = ColumnFilter;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

ResetFilter = function () {
    var datatable = null;
    $table = null;

    var _setTable = function _setTable($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    };

    var onClickResetFilter = function onClickResetFilter() {
        if ($(ADConst.controls.btnResetFilter).length) {
            $table.on('click', ADConst.controls.btnResetFilter, function (e) {
                e.preventDefault();

                var $table = $(this).closest('table');
                var datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));

                // clear filter data
                $('textarea.form-filter, select.form-filter, input.form-filter').each(function () {
                    $(this).val('');
                });
                $('input.form-filter[type="checkbox"]').each(function () {
                    $(this).attr('checked', false);
                });
                datatable.columns().search('');

                // reset pagination to default page length
                var recordPerPage = parseInt($table.attr('data-record-per-page'));
                if (isNaN(recordPerPage) || recordPerPage == null || recordPerPage === 0) {
                    recordPerPage = ADConst.default_per_page;
                }
                datatable.page.len(recordPerPage);

                // get sort values
                var $tableFn = $table.dataTable(),
                    sortColumn = $table.attr('data-sort-default'),
                    sortColumnIndex = $table.find('th[data-col-name="' + sortColumn + '"]').index(),
                    sortOrder = $table.attr('data-sort-order-default');

                // format values
                sortColumnIndex = sortColumnIndex != -1 ? sortColumnIndex : 0;
                sortOrder = $.inArray(sortOrder, ['asc', 'desc']) != -1 ? sortOrder : 'desc';

                // reset sorting
                $tableFn.fnSort([[sortColumnIndex, sortOrder]]);
            });
        }
    };

    var _onResetFilter = function _onResetFilter($table) {
        datatable.columns().search('');

        // reset pagination to default page length
        var recordPerPage = parseInt($table.attr('data-record-per-page'));
        if (isNaN(recordPerPage) || recordPerPage == null || recordPerPage === 0) {
            recordPerPage = ADConst.default_per_page;
        }
        datatable.page.len(recordPerPage);

        // get sort values
        var $tableFn = $table.dataTable(),
            sortColumn = $table.attr('data-sort-default'),
            sortColumnIndex = $table.find('th[data-col-name="' + sortColumn + '"]').index(),
            sortOrder = $table.attr('data-sort-order-default');

        // format values
        sortColumnIndex = sortColumnIndex != -1 ? sortColumnIndex : 0;
        sortOrder = $.inArray(sortOrder, ['asc', 'desc']) != -1 ? sortOrder : 'desc';

        // reset sorting
        $tableFn.fnSort([[sortColumnIndex, sortOrder]]);
    };

    var bindUIEvents = function bindUIEvents() {
        onClickResetFilter();
    };

    return {
        bindEvents: function bindEvents() {
            bindUIEvents();
        },

        setTable: function setTable($_ajaxDatatable, $_table) {
            _setTable($_ajaxDatatable, $_table);

            return this;
        },

        onResetFilter: function onResetFilter($table) {
            _onResetFilter($table);

            return this;
        }
    };
}();

module.exports = ResetFilter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

AjaxDatatableModal = function () {
    var onClickEachDeleteButton = function onClickEachDeleteButton() {
        $(document).on('click', '.btn-delete', function (e) {
            e.preventDefault();

            // set delete url of each item for the form of modal dialog
            $('div.modal').find('.btn-action').attr('data-href', $(this).attr('data-href'));
        });
    };

    var onClickEachUnblockButton = function onClickEachUnblockButton() {
        $(document).on('click', '.btn-table-unblock', function (e) {
            e.preventDefault();
            $('div.modal').find('.btn-action').attr('data-href', $(this).attr('data-href'));
        });
    };

    var onClickConfirmButton = function onClickConfirmButton() {
        $('div.modal').on('click', '.btn-action', function (e) {
            if ($(e.currentTarget).hasClass('unblock')) {
                e.preventDefault();
                window.location.replace($(this).attr('data-href'));
                return;
            }

            var hasForm = $('div.modal').find('form').length > 0,
                currentAction = $(this).attr('data-href');

            // submit via ajax instead
            if (hasForm) {
                $('div.modal').find('form').attr('action', currentAction);
                return;
            }

            // if not has form -> submit via browser address bar
            e.preventDefault();
            window.location.replace(currentAction);
        });
    };

    var bindUIEvents = function bindUIEvents() {
        onClickEachDeleteButton();
        onClickEachUnblockButton();
        onClickConfirmButton();
    };

    return {
        bindEvents: function bindEvents() {
            bindUIEvents();
        }
    };
}();

module.exports = AjaxDatatableModal;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

TableHelper = function () {
    var datatable = null;

    var _setTable = function _setTable(ajaxDatatable) {
        datatable = ajaxDatatable;
    };

    var _getRecordPerPage = function _getRecordPerPage() {
        var recordPerPage = parseInt($(ADConst.controls.table).attr('data-record-per-page'));
        if (isNaN(recordPerPage) || recordPerPage == null || recordPerPage === 0) {
            recordPerPage = ADConst.default_per_page;
        }

        return recordPerPage;
    };

    var _getDefaultSortColumnIndex = function _getDefaultSortColumnIndex() {
        var column = $(ADConst.controls.table).data('sort-default'),
            columnIndex = $(ADConst.controls.table).find('th[data-col-name="' + column + '"]').index();

        return columnIndex == -1 ? 0 : columnIndex;
    };

    var _getDefaultSortOrder = function _getDefaultSortOrder() {
        var order = $(ADConst.controls.table).data('sort-order-default');

        return typeof order == 'undefined' || order == '' ? 'desc' : order;
    };

    var _getCurrentLanguage = function _getCurrentLanguage() {
        var locale = $(ADConst.controls.table).attr('data-locale'),
            language = ADConst.language.en;

        if (typeof locale != 'undefined' && locale == 'de') {
            language = ADConst.language.de;
        }

        return language;
    };

    var _prepareAjaxParams = function _prepareAjaxParams(params, $table) {
        var isSorting = false,
            tableKey = 'DataTables_' + $table.attr('id') + '_' + window.location.pathname,
            oldData = JSON.parse(localStorage.getItem(tableKey)),
            currentSortColumnIndex = $table.find('th[data-col-name="' + params.order[0].column + '"]').index();

        // set "page" param before send AJAX request to server
        params.page = params.start / params.length + 1;

        // load only trashed items
        if ($table.attr('data-only-trashed') === '1') {
            params.only_trashed = true;
        }

        // option values
        params.option_values = $table.attr('data-ajax-option-values');

        // check the user is performing the sort
        if (oldData != null) {
            isSorting = currentSortColumnIndex != oldData.order[0][0] || params.order[0].dir != oldData.order[0][1];
        }

        // d.draw = 1 : the first time the datatable is loaded
        // d.draw > 1 : when the datatable is reloading
        if (params.draw > 1 && oldData != null && isSorting) {
            var oSettings = $table.dataTable().fnSettings(),
                $paginationBar = $('.dataTables_paginate').first(),
                currentPage = parseInt($paginationBar.find('input.pagination-panel-input').val()),
                currentPage = isNaN(currentPage) ? 1 : currentPage,
                recordPerPage = _getRecordPerPage(),
                start = (currentPage - 1) * recordPerPage; // we are minus for 1 because datatables plugin uses page index from 0, 1, 2..., not 1, 2, 3...

            // force standing in current page
            oSettings._iDisplayStart = start;
            params.page = currentPage;

            // store newest sort info to local storage
            oldData.order[0][0] = currentSortColumnIndex;
            oldData.order[0][1] = params.order[0].dir;
            localStorage.setItem(tableKey, JSON.stringify(oldData));
        }

        return params;
    };

    var _handleFnServerParams = function _handleFnServerParams(data) {
        // set order info for each column
        data['order'].forEach(function (items, index) {
            data['order'][index]['column'] = data['columns'][items.column]['data'];
        });

        return data;
    };

    var handleAjaxLoaded = function handleAjaxLoaded() {
        // remove sorting in checkbox column
        $(ADConst.controls.checkboxColumn).removeClass(ADConst.sortClass.asc).removeClass(ADConst.sortClass.desc).addClass(ADConst.sortClass.disable);

        // remove default sorting of the first column
        var $firstColumn = $(ADConst.controls.tableHeadingColumns).first();
        if ($firstColumn.attr('data-col-orderable') == '') {
            $firstColumn.removeClass(ADConst.sortClass.asc).removeClass(ADConst.sortClass.desc).addClass(ADConst.sortClass.disable);
        }

        // after change page (next|prev) -> reset Select All checkbox
        if ($(ADConst.controls.checkboxSelectAll).is(':visible') && $(ADConst.controls.checkboxSelectAll).prop('checked')) {
            $(ADConst.controls.checkboxSelectAll).prop('checked', false);
        }

        // show|hide buttons
        var isOnlyTrashed = $(ADConst.controls.table).attr('data-only-trashed');
        if ($(ADConst.controls.tableFilterBar).is(':visible') && typeof isOnlyTrashed != 'undefined') {
            if (isOnlyTrashed === '') {
                showAllButtons();
            } else {
                showTrashedRelatedButtons();
            }
        }
    };

    var showAllButtons = function showAllButtons() {
        $(ADConst.controls.btnRestore).hide();
        $(ADConst.controls.btnDestroy).hide();

        $(ADConst.controls.btnShow).show();
        $(ADConst.controls.btnEdit).show();
        $(ADConst.controls.btnTrash).show();
    };

    var showTrashedRelatedButtons = function showTrashedRelatedButtons() {
        $(ADConst.controls.btnRestore).show();
        $(ADConst.controls.btnDestroy).show();

        $(ADConst.controls.btnShow).hide();
        $(ADConst.controls.btnEdit).hide();
        $(ADConst.controls.btnTrash).hide();
    };

    var _initPickers = function _initPickers() {
        var options = {
            orientation: "left",
            autoclose: true,
            minView: 2
        };

        if ($(ADConst.controls.dateFilter).length > 0) {
            $(ADConst.controls.dateFilter).datetimepicker(options);
        }

        if ($(ADConst.controls.dateTimeFilter).length > 0) {
            $(ADConst.controls.dateTimeFilter).datetimepicker(options);
        }

        if ($(ADConst.controls.timeFilter).length > 0) {
            $(ADConst.controls.timeFilter).inputmask('hh:mm', {
                placeholder: "00:00"
            });
        }

        if ($(ADConst.controls.btnClearDateFilter).length > 0) {
            $(document).on('click', ADConst.controls.btnClearDateFilter, function () {
                $(this).parent().siblings('input').val('');
                $(this).parent().siblings('input').trigger('change');
            });
        }
    };

    return {
        setTable: function setTable(ajaxDatatable) {
            _setTable(ajaxDatatable);

            return this;
        },

        getRecordPerPage: function getRecordPerPage() {
            return _getRecordPerPage();
        },

        getDefaultSortColumnIndex: function getDefaultSortColumnIndex() {
            return _getDefaultSortColumnIndex();
        },

        getDefaultSortOrder: function getDefaultSortOrder() {
            return _getDefaultSortOrder();
        },

        getCurrentLanguage: function getCurrentLanguage() {
            return _getCurrentLanguage();
        },

        prepareAjaxParams: function prepareAjaxParams(data, $table) {
            return _prepareAjaxParams(data, $table);
        },

        handleFnServerParams: function handleFnServerParams(data) {
            return _handleFnServerParams(data);
        },

        onAjaxLoaded: function onAjaxLoaded() {
            handleAjaxLoaded();
        },

        initPickers: function initPickers() {
            _initPickers();
        }
    };
}();

module.exports = TableHelper;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);