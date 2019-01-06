require('../bootstrap.js');

FilterAllOrTrash = function() {
    var $tableGroupActionInput = $(ADConst.controls.tableGroupActionInput),
        $btnActionFilter       = $(ADConst.controls.btnActionFilter),
        datatable              = null,
        $table              = null;

    var setTable = function($_ajaxDatatable, $_table) {
        datatable = $_ajaxDatatable;
        $table = $_table;
    }

    var reDraw = function (type, $_self) {
        // hide un-necessary alerts
        $(ADConst.controls.alerts).hide();

        var status = type == 'all' ? '' : 1;
        var $table = $_self ? $_self.closest('.m-portlet__body').find('table') : $(ADConst.controls.table);
        $table.attr('data-only-trashed', status);

        // re-get data
        datatable.draw();
    }

    var changeUI = function(type) {
        var $select = $(ADConst.controls.tableGroupActionInput);
        $tableGroupActionInput.val('');
        $btnActionFilter.removeClass('active');

        if ( type == 'all' ) {
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
    }

    var doFilter = function(type, $_self) {
        changeUI(type);
        reDraw(type, $_self);
    }

    var checkPreviousFilter = function($table) {
        var key = ADConst.localStorage.filterKey;

        if (localStorage.getItem(key) == 'trash') {
            localStorage.removeItem(key);
            $table.attr('data-only-trashed', 1);
            changeUI('trash');
        }
    }

    var bindUIEvents = function() {
        /**
         * handle "restore" button click event
         */
        $(document).on('click', ADConst.controls.btnRestore, function(e) {
            localStorage.setItem(ADConst.localStorage.filterKey, 'trash');
        });

        /**
         * handle "delete permanently" button click event
         */
        $(document).on('submit', ADConst.controls.formDeletePermanently, function(e) {
            localStorage.setItem(ADConst.localStorage.filterKey, 'trash');
        });

        /**
         * handle "All" filter event click
         */
        $(document).on('click', ADConst.controls.btnFilterAll, function() {
            doFilter('all', $(this));
        });

        /**
         * handle "Trash" filter event click
         */
        $(document).on('click', ADConst.controls.btnFilterTrash, function() {
            doFilter('trash', $(this));
        });
    }

    return {
        filter: function(type) {
            type = (type.length == 0) ? 'all' : type;
            doFilter(type);
        },

        setTable: function($_ajaxDatatable, $_table) {
            setTable($_ajaxDatatable, $_table);

            return this;
        },

        checkPreviousFilter($table) {
            checkPreviousFilter($table);
        },

        bindEvents: function() {
            bindUIEvents();
        }
    };
}();

module.exports = FilterAllOrTrash;
