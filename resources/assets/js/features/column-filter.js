require('../bootstrap.js');

ColumnFilter = function() {
    var datatable        = null,
        timer            = null,
        inputColumnIndex = null,
        inputValue       = null,
        $table          = null;

    var setTable = function($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    }

    var onInputFilter = function() {
        $table.on('keyup', 'input.form-control.form-filter.input-sm', function() {
            clearTimeout(timer);

            const datatable = AjaxDatatable.getObjTableCur($(this).closest('table')); 
            // only submit data if user entered at least 2 characters and blur for 0.5 second
            if ( $(this).val().length == 0 || $(this).val().length >= 1 ) {
                // get current column data
                inputColumnIndex = $(this).data().columnIndex;
                inputValue = $(this).val();

                timer = setTimeout(function () {
                    if ( datatable != null && typeof inputColumnIndex != 'undefined' && typeof inputValue != 'undefined' ) {
                        // fire ajax search
                        datatable.columns(inputColumnIndex).search(inputValue, true, false).draw();

                        // clear current column data
                        inputColumnIndex = null;
                        inputValue = null;
                    }
                }, 500);
            }
        });
    }

    var onDropdownSelectFilter = function() {
        $table.on('change', 'select.filter-select', function() {
            const datatable = AjaxDatatable.getObjTableCur($(this).closest('table')); 
            var columnIndex = $(this).data().columnIndex;
            if ( datatable != null && typeof columnIndex != 'undefined' ) {
                // fire ajax search
                datatable.columns(columnIndex).search($(this).val()).draw();
            }
        });
    }

    var onDateTimeFilter = function() {
        $table.on('change', ADConst.controls.dateFilter, function() {
            const datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
            var columnIndex = $(this).data().columnIndex;
            if ( datatable != null && typeof columnIndex != 'undefined' ) {
                // fire ajax search
                datatable.columns(columnIndex).search($(this).val()).draw();
            }
        });

        $table.on('change', ADConst.controls.dateTimeFilter, function() {
            const datatable = AjaxDatatable.getObjTableCur($(this).closest('table'));
            var columnIndex = $(this).data().columnIndex;
            if ( datatable != null && typeof columnIndex != 'undefined' ) {
                // fire ajax search
                datatable.columns(columnIndex).search($(this).val()).draw();
            }
        });
    }

    var bindUIEvents = function () {
        onInputFilter();
        onDropdownSelectFilter();
        onDateTimeFilter();
    }

    return {
        bindEvents: function() {
            bindUIEvents();
        },

        setTable: function($_ajaxDatatable, $_table) {
            setTable($_ajaxDatatable, $_table);

            return this;
        }
    }
} ();

module.exports = ColumnFilter;
