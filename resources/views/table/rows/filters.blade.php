@php $hasCheckbox = array_get($table, 'checkbox_column', false); @endphp

<tr role="row" class="filter">
    @if ($hasCheckbox)
        <th></th>
    @endif

    @foreach($table['columns'] as $key => $column)
        @php
            $type            = array_get($column, 'filter.type', '');
            $value            = array_get($column, 'filter.value', '');
            $dataColumnIndex = $hasCheckbox ? $loop->iteration : $loop->iteration - 1;
            $data            = ['name' => $key, 'index' => $dataColumnIndex, 'column' => $column]
        @endphp

        @if (empty($type))
            <th></th>
        @elseif ($type == 'hiddenrow')
            <th class="hidden"></th>
        @elseif (in_array($type, config('ajaxdatatable.filter_types')))
            @include('ajaxdatatable::table.rows.filters.' . $type, $data)
        @endif
    @endforeach

    @if (isset($table['actions']) && count($table['actions']) > 0)
        <th class="text-center">
            <button class="btn btn-info btn-filter-cancel">
                {{ __('Reset filter') }}
            </button>
        </th>
    @endif
</tr>
