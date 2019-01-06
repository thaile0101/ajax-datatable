@if ( array_get($table, 'filter_navigation', true) )
    <ul class="nav nav-tabs m-tabs-line m-tabs-line--brand" role="tablist" id="filter-navigation">
        <li class="nav-item m-tabs__item btn-group">
            <a class="nav-link m-tabs__link action-filter active" id="datatable-btn-all">{{ __('All') }}</a>
        <li class="nav-item m-tabs__item btn-group">
            <a class="nav-link m-tabs__link action-filter" id="datatable-btn-trashed">{{ __('Trashed') }}</a>
        </li>
    </ul>
@endif
