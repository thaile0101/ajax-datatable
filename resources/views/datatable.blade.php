@if ( !isset($table['columns']) || count($table['columns']) === 0 )
    <span>{{ __('Please set columns to display table') }}</span>
@else
    @php $tableTitle = array_get($table, 'title', ''); @endphp
    <div class="row">
        <div class="col-md-12">
            <div class="m-portlet m-portlet--head-solid-bg m-portlet--head-sm" @if (!empty($tableTitle)) m-portlet="true" @endif>

                @include('ajaxdatatable::table.heading.actions')

                <div class="m-portlet__body">
                    @include('ajaxdatatable::table.heading.filters')

                    <div class="table-container">

                        @include('ajaxdatatable::table.heading.bulk-actions')

                        <table class="table table-hover table-checkable table-bordered m-table"
                               id="{{ array_get($table, 'id', 'default-datatable') }}"
                               data-sort-default="{{ array_get($table, 'order_default.column', 'id') }}"
                               data-sort-order-default="{{ array_get($table, 'order_default.order', 'asc') }}"
                               data-ajax-src="{{ array_get($table, 'ajax.src', '') != '' ? route(array_get($table, 'ajax.src'), array_get($table, 'ajax.params')) : '' }}"
                               data-ajax-option-values="{{ array_get($table, 'ajax.option_values', '') }}"
                               data-only-trashed="{{ array_get($table, 'ajax.only_trashed', '') }}"
                               data-record-per-page="{{config('ajaxdatatable.record_per_page')}}"
                               data-locale="{{ Session::get('locale', '') }}"
                        >

                            <thead>
                            @include('ajaxdatatable::table.rows.text')
                            @include('ajaxdatatable::table.rows.filters')
                            </thead>

                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('ajaxdatatable::modals.delete.confirmation', ['modalId' => 'modal-' . array_get($table, 'id', 'default-datatable')])
    @include('ajaxdatatable::modals.unblock.confirmation')
@endif
