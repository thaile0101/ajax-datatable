require('../bootstrap.js');


AjaxDatatableModal = function() {
    var onClickEachDeleteButton = function() {
        $(document).on('click', '.btn-delete', function(e) {
            e.preventDefault();

            // set delete url of each item for the form of modal dialog
            $('div.modal').find('.btn-action').attr('data-href', $(this).attr('data-href'));
        });
    }

    var onClickEachUnblockButton = function() {
        $(document).on('click', '.btn-table-unblock', function(e) {
            e.preventDefault();
            $('div.modal').find('.btn-action').attr('data-href', $(this).attr('data-href'));
        });
    }

    var onClickConfirmButton = function() {
        $('div.modal').on('click', '.btn-action', function(e) {
            if ( $(e.currentTarget).hasClass('unblock') ) {
                e.preventDefault();
                window.location.replace($(this).attr('data-href'));
                return;
            }

            var hasForm = $('div.modal').find('form').length > 0,
                currentAction = $(this).attr('data-href');

            // submit via ajax instead
            if ( hasForm ) {
                $('div.modal').find('form').attr('action', currentAction);
                return;
            }

            // if not has form -> submit via browser address bar
            e.preventDefault();
            window.location.replace(currentAction);
        });
    }

    var bindUIEvents = function () {
        onClickEachDeleteButton();
        onClickEachUnblockButton();
        onClickConfirmButton();
    }

    return {
        bindEvents: function() {
            bindUIEvents();
        }
    }
} ();

module.exports = AjaxDatatableModal;
