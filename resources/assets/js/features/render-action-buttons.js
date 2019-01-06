require('../bootstrap.js');

RenderActionButtons = function() {
    var $tableActions = $(ADConst.controls.tableActionColumn);

    var _setTable = function _setTable($_table) {
        $tableActions = $_table.find('.table-actions');
    };

    return {
        renderShowButton: function(data, type, row) {
            var showRoute = $tableActions.attr('data-show-action-route');
            if (typeof showRoute == 'undefined' || showRoute == '' ) {
                return '';
            }

            var showAction = '<a data-placement="top" ' +
                'data-original-title="' + $tableActions.attr("data-show-action-tooltips") + '" ' +
                'data-acl-role="' + $tableActions.attr("data-show-role") + '" ' +
                'href="' + showRoute + '" ' +
                'class="tooltips btn btn-info btn-table-show ' + $tableActions.attr("data-show-action-color") + '" ' +
                'target="'+ $tableActions.attr("data-target-link") +'">' +
                '<i class="' + $tableActions.attr("data-show-action-icon") + '"></i> ' + $tableActions.attr("data-show-action-name") + '</a>';
            return showAction.replace("-1", row.id);
        },

        renderEditButton: function(data, type, row) {
            var editRoute = $tableActions.attr('data-edit-action-route');
            if (typeof editRoute == 'undefined' || editRoute == '') {
                return '';
            }

            var editAction = '<a data-placement="top" ' +
                'data-original-title="' + $tableActions.attr("data-edit-action-tooltips") + '" ' +
                'data-acl-role="' + $tableActions.attr("data-edit-role") + '" ' +
                'href="' + editRoute + '" ' +
                'class="tooltips btn btn-accent btn-table-edit ' + $tableActions.attr("data-edit-action-color") + '"' +
                'target="'+ $tableActions.attr("data-target-link") +'">' +
                '<i class="' + $tableActions.attr("data-edit-action-icon") + '"></i> ' + $tableActions.attr('data-edit-action-name') + '</a>';
            return editAction.replace("-1", row.id);
        },

        renderDeleteButton: function(data, type, row) {
            var deleteRoute = $tableActions.attr('data-delete-action-route');
            if (typeof deleteRoute == 'undefined' || deleteRoute == '') {
                return '';
            }

            var deleteAction = '<a data-placement="top" ' +
                'data-original-title="' + $tableActions.attr("data-delete-action-tooltips") + '" ' +
                'data-acl-role="' + $tableActions.attr("data-delete-role") + '" ' +
                'href="#' + $tableActions.attr("data-modal")+ '" ' +
                'data-toggle="modal" ' +
                'data-href="' + deleteRoute + '" ' + ' ' +
                'class="tooltips btn btn-danger btn-delete btn-table-destroy ' + $tableActions.attr("data-delete-action-color") + '"' +
                'target="'+ $tableActions.attr("data-target-link") +'">' +
                '<i class="' + $tableActions.attr("data-delete-action-icon") + '"></i> ' + $tableActions.attr('data-delete-action-name') + '</a>';
            return deleteAction.replace("-1", row.id);
        },

        renderAssignButton: function(data, type, row) {
            var assignRoute = $tableActions.attr('data-assign-action-route');
            if (typeof assignRoute == 'undefined' || assignRoute == '') {
                return '';
            }

            var assignAction = '<a data-placement="top" ' +
                'data-original-title="' + $tableActions.attr("data-assign-action-tooltips") + '" ' +
                'data-acl-role="' + $tableActions.attr("data-assign-role") + '" ' +
                'href="' + assignRoute + '" ' +
                'class="tooltips btn btn-accent btn-table-assign ' + $tableActions.attr("data-assign-action-color") + '"' +
                'target="'+ $tableActions.attr("data-target-link") +'">' +
                '<i class="' + $tableActions.attr("data-assign-action-icon") + '"></i> ' + $tableActions.attr('data-assign-action-name') + '</a>';
            return assignAction.replace("-1", row.id);
        },

        renderRestoreButton: function(data, type, row) {
            var restoreRoute = $tableActions.attr('data-restore-action-route');
            if (typeof restoreRoute == 'undefined' || restoreRoute == '') {
                return '';
            }

            var restoreActon = '<a data-placement="top" ' +
                'data-original-title="' + $tableActions.attr("data-restore-action-tooltips") + '" ' +
                'data-acl-role="' + $tableActions.attr("data-restore-role") + '" ' +
                'href="' + restoreRoute + '" ' +
                'class="tooltips btn btn-accent btn-table-restore ' + $tableActions.attr("data-restore-action-color") + '"' +
                'target="'+ $tableActions.attr("data-target-link") +'">' +
                '<i class="' + $tableActions.attr("data-restore-action-icon") + '"></i> ' + $tableActions.attr('data-restore-action-name') + '</a>';
            return restoreActon.replace("-1", row.id);
        },

        renderTrashButton: function(data, type, row) {
            var trashRoute = $tableActions.attr('data-trash-action-route');
            if ( typeof trashRoute == 'undefined' || trashRoute == '' ) {
                return '';
            }

            var trashActon = '<a data-placement="top" ' +
                'data-original-title="' + $tableActions.attr("data-trash-action-tooltips") + '" ' +
                'data-acl-role="' + $tableActions.attr("data-trash-role") + '" ' +
                'href="' + trashRoute + '" ' +
                'class="tooltips btn btn-danger btn-table-trash ' + $tableActions.attr("data-trash-action-color") + '"' +
                'target="'+ $tableActions.attr("data-target-link") +'">' +
                '<i class="' + $tableActions.attr("data-trash-action-icon") + '"></i> ' + $tableActions.attr('data-trash-action-name') + '</a>';
            return trashActon.replace("-1", row.id);
        },

        renderUnblockButton: function(data, type, row) {
            var unBlockRoute = $tableActions.attr('data-unblock-action-route'),
                unBlockActon = '';

            if ( typeof unBlockRoute != 'undefined' && unBlockRoute != '' ) {
                var disableClass = '';
                if (typeof row.is_disabled != 'undefined' && row.is_disabled) {
                    disableClass = 'anchor-disabled';
                    unBlockRoute= '';
                }

                unBlockActon = '<a data-placement="top" ' +
                    'data-original-title="' + $tableActions.attr("data-unblock-action-tooltips") + '" ' +
                    'data-acl-role="' + $tableActions.attr("data-unblock-role") + '" ' +
                    'href="#ajaxdatatable-unblock-modal" ' +
                    'data-toggle="modal" data-href="' + unBlockRoute + '" ' +
                    'class="tooltips btn btn-accent btn-table-unblock ' + $tableActions.attr("data-unblock-action-color") + " " + disableClass + '"' +
                    'target="'+ $tableActions.attr("data-target-link") +'">' +
                    '<i class="' + $tableActions.attr("data-unblock-action-icon") + '"></i> ' + $tableActions.attr("data-unblock-action-name") + '</a>';
                unBlockActon = unBlockActon.replace("-1", row.id);
            }

            return unBlockActon;
        },

        renderTransactionButton: function(data, type, row) {
            var transactionRoute = $tableActions.attr('data-transaction-action-route'),
                transactionActon = '';

            if ( typeof transactionRoute != 'undefined' && transactionRoute != '' ) {
                var disableClass = '';
                if (typeof row.is_disabled != 'undefined' && row.is_disabled) {
                    disableClass = 'anchor-disabled';
                    transactionRoute= '';
                }

                transactionActon = '<a data-placement="top" ' +
                    'data-original-title="' + $tableActions.attr("data-transaction-action-tooltips") + '" ' +
                    'data-acl-role="' + $tableActions.attr("data-transaction-role") + '" ' +
                    'href="' + transactionRoute + '" ' +
                    'data-toggle="modal" data-href="' + transactionRoute + '" ' +
                    'class="tooltips btn btn-accent btn-table-transaction ' + $tableActions.attr("data-transaction-action-color") + " " + disableClass + '"' +
                    'target="'+ $tableActions.attr("data-target-link") +'">' +
                    '<i class="' + $tableActions.attr("data-transaction-action-icon") + '"></i> ' + $tableActions.attr("data-transaction-action-name") + '</a>';
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
