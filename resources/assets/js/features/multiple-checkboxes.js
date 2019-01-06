require('../bootstrap.js');

MultipleCheckboxes = function() {
    var datatable    = null,
        $table = null,
        selectedRows = []; // array holding selected row IDs

    var setTable = function($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    }

    // updates "Select all" control status in a data table
    var handleSelectAllCheckbox = function () {
        var $table              = datatable.table().node(),
            $allCheckboxes      = $('tbody input[type="checkbox"]', $table),
            $checkedCheckboxes  = $('tbody input[type="checkbox"]:checked', $table),
            $checkboxSelectAll  = $('thead input[name="select_all"]', $table).get(0);

        if ( $checkedCheckboxes.length === 0 ) { // if none of the checkboxes are checked
            $checkboxSelectAll.checked = false;
            if ( 'indeterminate' in $checkboxSelectAll ) {
                $checkboxSelectAll.indeterminate = false;
            }
        } else if ( $checkedCheckboxes.length === $allCheckboxes.length ) { // if all of the checkboxes are checked
            $checkboxSelectAll.checked = true;
            if ( 'indeterminate' in $checkboxSelectAll ) {
                $checkboxSelectAll.indeterminate = false;
            }
        } else { // if some of the checkboxes are checked
            $checkboxSelectAll.checked = true;
            if ( 'indeterminate' in $checkboxSelectAll ) {
                $checkboxSelectAll.indeterminate = true;
            }
        }
    }

    // handle click on each checkbox
    var onClickEachCheckbox = function() {
        $(ADConst.controls.tableTBody).on('click', 'input[type="checkbox"]', function(e) {
            var $row = $(this).closest('tr');

            // get row data
            var data = datatable.row($row).data();

            // get row ID
            var rowId = data.id;

            // determine whether row ID is in the list of selected row IDs
            var index = $.inArray(rowId, selectedRows);

            if ( this.checked && index === -1 ) { // if checkbox is checked and row ID is not in list of selected row IDs
                selectedRows.push(rowId);
            } else if ( !this.checked && index !== -1 ) { // otherwise, if checkbox is not checked and row ID is in list of selected row IDs
                selectedRows.splice(index, 1);
            }

            // update state of "Select all" control
            handleSelectAllCheckbox();

            // prevent click event from propagating to parent
            e.stopPropagation();
        });
    }

    // allow select checkbox when click to it's cell
    var onClickEachCheckboxCell = function() {
        $(ADConst.controls.table).on('click', 'tr td:first-child, thead th:first-child', function(e){
            $(this).parent().find('input[type="checkbox"]').trigger('click');
        });
    }

    // handle click on "Select all" control
    var onClickSelectAllCheckbox = function() {
        if ( typeof datatable != 'undefined' && datatable ) {
            $(ADConst.controls.checkboxSelectAll, datatable.table().container()).on('click', function(e) {
                if ( this.checked ) {
                    $(ADConst.controls.notCheckedCheckboxes).trigger('click');
                } else {
                    $(ADConst.controls.checkedCheckboxes).trigger('click');
                }

                // prevent click event from propagating to parent
                e.stopPropagation();
            });
        }
    }

    var bindUIEvents = function() {
        onClickSelectAllCheckbox();

        onClickEachCheckbox();
        onClickEachCheckboxCell();
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
}();

module.exports = MultipleCheckboxes;
