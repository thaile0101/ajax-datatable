require('../bootstrap.js');

ResetFilter = function() {
    var datatable = null
        $table = null;

    var setTable = function($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    }

    var onClickResetFilter = function() {
        if ( $(ADConst.controls.btnResetFilter).length ) {
            $table.on('click', ADConst.controls.btnResetFilter, function(e) {
                e.preventDefault();

                var $table = $(this).closest('table');
                var datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
                
                // clear filter data
                $('textarea.form-filter, select.form-filter, input.form-filter').each(function() {
                    $(this).val('');
                });
                $('input.form-filter[type="checkbox"]').each(function() {
                    $(this).attr('checked', false);
                });
                datatable.columns().search('');

                // reset pagination to default page length
                var recordPerPage = parseInt($table.attr('data-record-per-page'));
                if ( isNaN(recordPerPage) || recordPerPage == null || recordPerPage === 0 ) {
                    recordPerPage = ADConst.default_per_page;
                }
                datatable.page.len(recordPerPage);

                // get sort values
                var $tableFn          = $table.dataTable(),
                    sortColumn      = $table.attr('data-sort-default'),
                    sortColumnIndex = $table.find('th[data-col-name="' + sortColumn + '"]').index(),
                    sortOrder       = $table.attr('data-sort-order-default');

                // format values
                sortColumnIndex = (sortColumnIndex != -1) ? sortColumnIndex : 0;
                sortOrder       = ($.inArray(sortOrder, ['asc', 'desc']) != -1) ? sortOrder : 'desc';

                // reset sorting
                $tableFn.fnSort([[sortColumnIndex, sortOrder]]);
            });
        }
    }

    var _onResetFilter = function ($table) {
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

    var bindUIEvents = function () {
        onClickResetFilter();
    }

    return {
        bindEvents: function() {
            bindUIEvents();
        },

        setTable: function($_ajaxDatatable, $_table) {
            setTable($_ajaxDatatable, $_table);

            return this;
        },

        onResetFilter: function($table) {
            _onResetFilter($table);

            return this;
        }
    }
} ();

module.exports = ResetFilter;
