@php
    $bulkActions = array_get($table, 'bulk_actions', []);
    $hasCheckbox = array_get($table, 'checkbox_column', false);
@endphp

@if ($hasCheckbox && count($bulkActions) > 0)
    <div class="table-actions-wrapper">
        <select data-service="{{ array_get($table, 'service', '') }}"
                class="table-group-action-input form-control input-inline input-small input-sm">
            <option value="">{{ __('Bulk actions') }}</option>

            @foreach($bulkActions as $key => $action)
                <option value="{{ array_get($action, 'name', '') }}"
                        data-method="{{ array_get($action, 'method', 'get') }}"
                        data-ajax-url="{{ empty(array_get($action, 'route', '')) ? '' : route(array_get($action, 'route')) }}"
                        data-event="{{ array_get($action, 'data-event', true) }}"
                        class="{{ array_get($action, 'class', '') }}"
                        @if(!array_get($action, 'is_displayed', true)) style="display: none;" @endif>
                    {{ __(array_get($action, 'text', '')) }}
                </option>
            @endforeach
        </select>

        <button class="btn btn-accent default table-group-action-submit">
            <i class="fa fa-check"></i>&nbsp;{{ __('Apply') }}
        </button>
    </div>
@endif
