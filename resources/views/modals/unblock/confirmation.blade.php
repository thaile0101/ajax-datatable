@if ( array_get($table, 'actions.unblock') != null )
    <div class="modal fade" id="ajaxdatatable-unblock-modal" tabindex="-1" role="basic" aria-hidden="true">
        <div class="modal-dialog">
            <form method="POST" action="{{ route(array_get($table, 'actions.unblock.route'), ['id' => -1]) }}">
                {{ csrf_field() }}
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">{{ __(config('ajaxdatatable.modal.unblock.title', 'Unblock current IP')) }}</h4>
                    </div>

                    <div class="modal-body">
                        {{ __(config('ajaxdatatable.modal.unblock.message', 'Do you want to unblock this IP?')) }}
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline btn-close" data-dismiss="modal">
                            {{ __(config('ajaxdatatable.modal.unblock.button_close', 'Close')) }}
                        </button>

                        <button type="submit" class="btn red btn-action unblock">
                            {{ __(config('ajaxdatatable.modal.unblock.button_confirm', 'Unblock')) }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endif
