<label>
    <input name="id[]"
           type="checkbox"
           class="checkboxes"
    @if(!empty($attr))
        @foreach($attr as $key => $val)
            {{$key}}="{{$val}}"
        @endforeach
    @endif
    value="{{!empty($value) ? $value : ''}}"/>
    <span></span>
</label>
