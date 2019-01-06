@php $tableTitle = array_get($table, 'title', ''); @endphp
@if (!empty($tableTitle))
<div class="m-portlet__head">
    <div class="m-portlet__head-caption">
        <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
                {{ __($tableTitle) }}
            </h3>

        </div>
    </div>

    <div class="m-portlet__head-tools">
        <div class="actions pull-right">
            @if (isset($table['actions_heading']))
                @foreach($table['actions_heading'] as $item)
                    <button class="btn {{ $item['class'] }} btn-info"
                            {{ !empty($item['id']) ? "id=" . $item['id'] : ''}}
                            data-original-title="Vollbild"
                            data-url="{{ array_get($item, 'url', '') }}"
                            title="{{ __($item['title']) }}">
                        {{ __($item['title']) }}
                    </button>
                @endforeach
            @endif
        </div>
        <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
                <a href="#"
                   m-portlet-tool="fullscreen"
                   class="m-portlet__nav-link m-portlet__nav-link--icon"
                   aria-describedby="tooltip_yswjbvn3or"
                   title="{{ __('Full screen') }}"
                >
                    <i class="la la-expand"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
@endif

