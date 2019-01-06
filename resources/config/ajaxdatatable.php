<?php

return [
    'record_per_page' => 10,

    'filter_types' => [
        'input',
        'select',
        'date',
        'time',
        'datetime',
        'hiddenrow'
    ],

    'modal' => [
        'delete' => [
            'title'          => 'Delete permanently',
            'message'        => 'Do you want to delete permanently?',
            'button_close'   => 'Close',
            'button_confirm' => 'Delete permanently',
        ],
        'unblock' => [
            'title'          => 'Unblock current IP',
            'message'        => 'Do you want to unblock this IP?',
            'button_close'   => 'Close',
            'button_confirm' => 'Unblock',
        ],
    ],
];
