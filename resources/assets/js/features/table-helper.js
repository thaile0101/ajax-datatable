require('../bootstrap.js');

TableHelper = function() {
    var datatable = null;

    var setTable = function(ajaxDatatable) {
        datatable = ajaxDatatable;
    }

    var getRecordPerPage = function() {
        var recordPerPage = parseInt($(ADConst.controls.table).attr('data-record-per-page'));
        if ( isNaN(recordPerPage) || recordPerPage == null || recordPerPage === 0 ) {
            recordPerPage = ADConst.default_per_page;
        }

        return recordPerPage;
    }

    var getDefaultSortColumnIndex = function() {
        var column = $(ADConst.controls.table).data('sort-default'),
            columnIndex = $(ADConst.controls.table).find('th[data-col-name="' + column + '"]').index();

        return columnIndex == -1 ? 0 : columnIndex;
    }

    var getDefaultSortOrder = function() {
        var order = $(ADConst.controls.table).data('sort-order-default');

        return typeof order == 'undefined' || order == '' ? 'desc' : order;
    }

    var getCurrentLanguage = function() {
        var locale = $(ADConst.controls.table).attr('data-locale'),
            language = ADConst.language.en;

        if (typeof locale != 'undefined' && locale == 'de') {
            language = ADConst.language.de;
        }

        return language;
    }

    var prepareAjaxParams = function(params, $table) {
        var isSorting              = false,
            tableKey               = 'DataTables_' + $table.attr('id') + '_' + window.location.pathname,
            oldData                = JSON.parse(localStorage.getItem(tableKey)),
            currentSortColumnIndex = $table.find('th[data-col-name="' + params.order[0].column + '"]').index();

        // set "page" param before send AJAX request to server
        params.page = (params.start / params.length) + 1;

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
            var oSettings      = $table.dataTable().fnSettings(),
                $paginationBar = $('.dataTables_paginate').first(),
                currentPage    = parseInt($paginationBar.find('input.pagination-panel-input').val()),
                currentPage    = isNaN(currentPage) ? 1 : currentPage,
                recordPerPage  = getRecordPerPage(),
                start          = (currentPage - 1) * recordPerPage; // we are minus for 1 because datatables plugin uses page index from 0, 1, 2..., not 1, 2, 3...

            // force standing in current page
            oSettings._iDisplayStart = start;
            params.page = currentPage;

            // store newest sort info to local storage
            oldData.order[0][0] = currentSortColumnIndex;
            oldData.order[0][1] = params.order[0].dir;
            localStorage.setItem(tableKey, JSON.stringify(oldData));
        }

        return params;
    }

    var handleFnServerParams = function(data) {
        // set order info for each column
        data['order'].forEach(function(items, index) {
            data['order'][index]['column'] = data['columns'][items.column]['data'];
        });

        return data;
    }

    var handleAjaxLoaded = function() {
        // remove sorting in checkbox column
        $(ADConst.controls.checkboxColumn)
            .removeClass(ADConst.sortClass.asc)
            .removeClass(ADConst.sortClass.desc)
            .addClass(ADConst.sortClass.disable);

        // remove default sorting of the first column
        var $firstColumn = $(ADConst.controls.tableHeadingColumns).first();
        if ($firstColumn.attr('data-col-orderable') == '') {
            $firstColumn
                .removeClass(ADConst.sortClass.asc)
                .removeClass(ADConst.sortClass.desc)
                .addClass(ADConst.sortClass.disable);
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
    }

    var showAllButtons = function() {
        $(ADConst.controls.btnRestore).hide();
        $(ADConst.controls.btnDestroy).hide();

        $(ADConst.controls.btnShow).show();
        $(ADConst.controls.btnEdit).show();
        $(ADConst.controls.btnTrash).show();
    }

    var showTrashedRelatedButtons = function() {
        $(ADConst.controls.btnRestore).show();
        $(ADConst.controls.btnDestroy).show();

        $(ADConst.controls.btnShow).hide();
        $(ADConst.controls.btnEdit).hide();
        $(ADConst.controls.btnTrash).hide();
    }

    var initPickers = function() {
        var options = {
            orientation: "left",
            autoclose: true,
            minView: 2
        };

        if ( $(ADConst.controls.dateFilter).length > 0 ) {
            $(ADConst.controls.dateFilter).datetimepicker(options);
        }

        if ( $(ADConst.controls.dateTimeFilter).length > 0 ) {
            $(ADConst.controls.dateTimeFilter).datetimepicker(options);
        }

        if ( $(ADConst.controls.timeFilter).length > 0 ) {
            $(ADConst.controls.timeFilter).inputmask('hh:mm', {
                placeholder: "00:00",
            });
        }

        if ( $(ADConst.controls.btnClearDateFilter).length > 0 ) {
            $(document).on('click', ADConst.controls.btnClearDateFilter, function() {
                $(this).parent().siblings('input').val('');
                $(this).parent().siblings('input').trigger('change');
            });
        }
    }

    return {
        setTable: function(ajaxDatatable) {
            setTable(ajaxDatatable);

            return this;
        },

        getRecordPerPage: function() {
            return getRecordPerPage();
        },

        getDefaultSortColumnIndex: function() {
            return getDefaultSortColumnIndex();
        },

        getDefaultSortOrder: function() {
            return getDefaultSortOrder();
        },

        getCurrentLanguage: function() {
            return getCurrentLanguage();
        },

        prepareAjaxParams: function(data, $table) {
            return prepareAjaxParams(data, $table);
        },

        handleFnServerParams: function(data) {
            return handleFnServerParams(data);
        },

        onAjaxLoaded: function() {
            handleAjaxLoaded();
        },

        initPickers: function() {
            initPickers();
        }
    }
} ();

module.exports = TableHelper;
