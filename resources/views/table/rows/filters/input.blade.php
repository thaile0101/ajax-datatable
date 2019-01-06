<th class="{{ isset($data['column']['class']) ? $data['column']['class'] : '' }}">
    <input type="text" value="{{ isset($value) ? $value : '' }}" class="form-control form-filter input-sm" name="{{ $name or '' }}" data-column-index="{{ $index or '' }}">
</th>
