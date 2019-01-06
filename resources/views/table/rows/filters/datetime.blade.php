@php $format = array_get($column, 'filter.format', 'Y-m-d H:i:s'); @endphp

<th>
    <div class="input-group date">
        <input type="text"
               data-column-index="{{ $index or '' }}"
               class="form-control form-filter input-sm ajaxdatatable-datetime-filter"
               data-date-format="{{ convert_to_js_date_time_format($format, true) }}"
               onkeydown="return false"
               name="{{ $name or '' }}">

        <span class="input-group-btn">
            <button class="btn btn-metal btn-clear-date-filter" type="button">
                <i class="fa fa-times"></i>
            </button>
        </span>
    </div>
</th>
