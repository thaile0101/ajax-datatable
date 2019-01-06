<tr role="row" class="heading">
    @if ( array_get($table, 'checkbox_column', false) )
        <th class="heading-columns heading-columns-checkbox sorting_disabled"
            width="2%"
            data-col-name="checkbox"
            data-col-orderable=""
            data-html="">
            <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">
                <input type="checkbox" name="select_all" class="m-checkable" />
                <span></span>
            </label>
        </th>
    @endif

    {{--Render columns--}}
    @foreach($table['columns'] as $key => $column)
        <th class="heading-columns {{ array_get($column, 'class', '') }}"
            width="{{ array_get($column, 'width', '') }}"
            data-col-name="{{ $key }}"
            data-col-orderable="{{ array_get($column, 'orderable', false) }}"
            data-col-class="{{ array_get($column, 'class', '') }}"
            data-html="{{ array_get($column, 'html', '') }}">
            {{ __($column['text']) }}
        </th>
    @endforeach

    {{--Render "Actions" column--}}
    @if ( isset($table['actions']) && count($table['actions']) > 0 )
        <th class="table-actions text-center"
            width="{{ array_get($table, 'actions.width', '') }}"

            {{-- Link names --}}
            data-show-action-name="{{ __(array_get($table, 'actions.show.name', '')) }}"
            data-edit-action-name="{{ __(array_get($table, 'actions.edit.name', '')) }}"
            data-delete-action-name="{{ __(array_get($table, 'actions.delete.name', '')) }}"
            data-assign-action-name="{{ __(array_get($table, 'actions.assign.name', '')) }}"
            data-restore-action-name="{{ __(array_get($table, 'actions.restore.name', '')) }}"
            data-trash-action-name="{{ __(array_get($table, 'actions.trash.name', '')) }}"
            data-unblock-action-name="{{ __(array_get($table, 'actions.unblock.name', '')) }}"
            data-transaction-action-name="{{ __(array_get($table, 'actions.transaction.name', '')) }}"

            {{-- Link roles --}}
            data-show-role="{{ array_get($table, 'actions.show.role', '') }}"
            data-edit-role="{{ array_get($table, 'actions.edit.role', '') }}"
            data-delete-role="{{ array_get($table, 'actions.delete.role', '') }}"
            data-assign-role="{{ array_get($table, 'actions.assign.role', '') }}"
            data-restore-role="{{ array_get($table, 'actions.restore.role', '') }}"
            data-trash-role="{{ array_get($table, 'actions.trash.role', '') }}"
            data-unblock-role="{{ array_get($table, 'actions.unblock.role', '') }}"
            data-transaction-role="{{ array_get($table, 'actions.transaction.role', '') }}"

            {{-- Link tooltips --}}
            data-show-action-tooltips="{{ __(array_get($table, 'actions.show.tooltips', 'View')) }}"
            data-edit-action-tooltips="{{ __(array_get($table, 'actions.edit.tooltips', 'Edit')) }}"
            data-delete-action-tooltips="{{ __(array_get($table, 'actions.delete.tooltips', 'Delete permanently')) }}"
            data-assign-action-tooltips="{{ __(array_get($table, 'actions.assign.tooltips', 'Assign')) }}"
            data-restore-action-tooltips="{{ __(array_get($table, 'actions.restore.tooltips', 'Restore item')) }}"
            data-trash-action-tooltips="{{ __(array_get($table, 'actions.trash.tooltips', 'Move to trash')) }}"
            data-unblock-action-tooltips="{{ __(array_get($table, 'actions.unblock.tooltips', 'Unblock')) }}"
            data-transaction-action-tooltips="{{ __(array_get($table, 'actions.transaction.tooltips', 'View transaction')) }}"

            {{-- Link icons --}}
            data-show-action-icon="{{ array_get($table, 'actions.show.icon', 'fa fa-search') }}"
            data-edit-action-icon="{{ array_get($table, 'actions.edit.icon', 'fa fa-edit') }}"
            data-delete-action-icon="{{ array_get($table, 'actions.delete.icon', 'fa fa-times') }}"
            data-assign-action-icon="{{ array_get($table, 'actions.assign.icon', 'fa fa-shield') }}"
            data-restore-action-icon="{{ array_get($table, 'actions.restore.icon', 'fa fa-reply') }}"
            data-trash-action-icon="{{ array_get($table, 'actions.trash.icon', 'fa fa-trash') }}"
            data-unblock-action-icon="{{ array_get($table, 'actions.unblock.icon', 'fa fa-unlock') }}"
            data-transaction-action-icon="{{ array_get($table, 'actions.transaction.icon', 'fa fa-bitcoin') }}"

            {{-- Link colors --}}
            data-show-action-color="{{ array_get($table, 'actions.show.color', 'default') }}"
            data-edit-action-color="{{ array_get($table, 'actions.edit.color', 'default') }}"
            data-delete-action-color="{{ array_get($table, 'actions.delete.color', 'default') }}"
            data-assign-action-color="{{ array_get($table, 'actions.assign.color', 'default') }}"
            data-restore-action-color="{{ array_get($table, 'actions.restore.color', 'default') }}"
            data-trash-action-color="{{ array_get($table, 'actions.trash.color', 'default') }}"
            data-unblock-action-color="{{ array_get($table, 'actions.unblock.color', 'default') }}"
            data-transaction-action-color="{{ array_get($table, 'actions.transaction.color', 'default') }}"

            {{-- Link routes --}}
            data-show-action-route="{{ array_get($table, 'actions.show.route', '')       != '' ? route(array_get($table, 'actions.show.route'),     array_get($table, 'actions.show.params', ['id' => -1])) : '' }}"
            data-edit-action-route="{{ array_get($table, 'actions.edit.route', '')       != '' ? route(array_get($table, 'actions.edit.route'),     array_get($table, 'actions.edit.params', ['id' => -1])) : '' }}"
            data-delete-action-route="{{ array_get($table, 'actions.delete.route', '')   != '' ? route(array_get($table, 'actions.delete.route'),   array_get($table, 'actions.delete.params', ['id' => -1])) : '' }}"
            data-assign-action-route="{{ array_get($table, 'actions.assign.route', '')   != '' ? route(array_get($table, 'actions.assign.route'),   array_get($table, 'actions.assign.params', ['id' => -1])) : '' }}"
            data-restore-action-route="{{ array_get($table, 'actions.restore.route', '') != '' ? route(array_get($table, 'actions.restore.route'),  array_get($table, 'actions.restore.params', ['id' => -1])) : '' }}"
            data-trash-action-route="{{ array_get($table, 'actions.trash.route', '')     != '' ? route(array_get($table, 'actions.trash.route'),    array_get($table, 'actions.trash.params', ['id' => -1])) : '' }}"
            data-unblock-action-route="{{ array_get($table, 'actions.unblock.route', '') != '' ? route(array_get($table, 'actions.unblock.route'), array_get($table, 'actions.unblock.params', ['id' => -1])) : '' }}"
            data-transaction-action-route="{{ array_get($table, 'actions.transaction.route', '') != '' ? route(array_get($table, 'actions.transaction.route'), ['id' => -1]) : '' }}"
            data-modal="modal-{{ array_get($table, 'id', 'default-datatable') }}"
            data-target-link="{{ array_get($table, 'actions.target', '_self') }}"
        >
            {{ __('Actions') }}
        </th>
    @endif
</tr>