@if ( array_get($table, 'actions.delete') != null )
    <div class="modal fade" id="{{ $modalId }}" tabindex="-1" role="basic" aria-hidden="true">
        <div class="modal-dialog">
            <form method="POST" action="{{ route(array_get($table, 'actions.delete.route'), ['id' => -1]) }}">
                {{ csrf_field() }}
                {{ method_field('DELETE') }}

                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">
                            {{ __(array_get($table, 'actions.delete.modal.header', config('ajaxdatatable.modal.delete.title', 'Delete permanently'))) }}
                        </h4>
                    </div>

                    <div class="modal-body">
                        {{ __(array_get($table, 'actions.delete.modal.body', config('ajaxdatatable.modal.delete.message', 'Do you want to delete permanently?'))) }}
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-outline btn-close" data-dismiss="modal">
                            {{ __(array_get($table, 'actions.delete.modal.button_close', config('ajaxdatatable.modal.delete.button_close', 'Close'))) }}
                        </button>

                        <button type="submit" class="btn btn-danger btn-action">
                            {{ __(array_get($table, 'actions.delete.modal.button_save', config('ajaxdatatable.modal.delete.button_confirm', 'Delete permanently'))) }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endif
