<th>
    <select class="filter-select form-control form-filter" data-column-index="{{ $index or '' }}" name="{{ $name or '' }}">
        <option value="">{{ __('Select') }}</option>

        @foreach(array_get($column, 'filter.data') as $optionValue => $optionText)
            <option value="{{ $optionValue }}">{{ $optionText }}</option>
        @endforeach

    </select>
</th>
