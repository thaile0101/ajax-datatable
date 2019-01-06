ADConst = {
    blockUI: {
        message:'<div class="m-loader m-loader--success m-loader--lg" style="width: 30px; display: inline-block;"></div>',
        css: { "border": "none", "background": "none" },
        centerX: true,
        centerY: true,
    },

    default_per_page: 10,

    controls: {
        dataTableArr: {}, 
        // table
        table: 'table[id$="datatable"]',
        tableTBody: 'table[id$="datatable"] tbody',
        tableGroupActionInput: '.table-container .table-group-action-input',
        tableHeadingColumns: 'table[id$="datatable"] thead tr th.heading-columns',
        tableActionColumn: 'table[id$="datatable"] .table-actions',
        tableDom: "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
        tableFilterBar: '#filter-navigation',

        // form
        formDeletePermanently: '#ajaxdatatable-delete-modal form',

        // buttons
        btnFilterAll: '#datatable-btn-all',
        btnFilterTrash: '#datatable-btn-trashed',
        btnActionFilter: '#filter-navigation .btn-group .action-filter',
        btnResetFilter: '.btn-filter-cancel',
        btnRestore: 'a.btn-table-restore',
        btnDestroy: '.btn-table-destroy',
        btnShow: '.btn-table-show',
        btnEdit: '.btn-table-edit',
        btnTrash: '.btn-table-trash',
        btnClearDateFilter: '.btn-clear-date-filter',

        // checkboxes
        checkboxSelectAll: 'thead input[name="select_all"]',
        allCheckboxes: 'table[id$="datatable"] tbody input[type="checkbox"]',
        notCheckedCheckboxes: 'table[id$="datatable"] tbody input[type="checkbox"]:not(:checked)',
        checkedCheckboxes: 'table[id$="datatable"] tbody input[type="checkbox"]:checked',
        checkboxColumn: 'table[id$="datatable"] thead tr th.heading-columns.heading-columns-checkbox',

        // date time filters
        dateFilter: '.ajaxdatatable-date-filter',
        dateTimeFilter: 'input.ajaxdatatable-datetime-filter',
        timeFilter: 'input.ajaxdatatable-time-filter',

        // misc
        datePicker: '.date-picker',
        alerts: 'div.ustom-alerts.alert'
    },

    // local storage keys
    localStorage: {
        filterKey: 'datatable_filter'
    },

    // datatables sorting classes
    sortClass: {
        asc: 'sorting_asc',
        desc: 'sorting_desc',
        disable: 'sorting_disabled'
    },

    language: {
        en: {},

        de: {
            "sEmptyTable":   	"Keine Daten in der Tabelle vorhanden",
            "sInfo":         	"<span class='seperator'>|</span>_START_ bis _END_ von _TOTAL_ Einträgen",
            "sInfoEmpty":    	"0 bis 0 von 0 Einträgen",
            "sInfoFiltered": 	"(gefiltert von _MAX_ Einträgen)",
            "sInfoPostFix":  	"",
            "sInfoThousands":  	".",
            "sLengthMenu":   	"<span class='seperator'>|</span>Aussicht _MENU_ Einträge anzeigen",
            "sLoadingRecords": 	"Wird geladen...",
            "sProcessing":   	"Bitte warten...",
            "sSearch":       	"Suchen",
            "sZeroRecords":  	"Keine Einträge vorhanden.",
            "oPaginate": {
                "sFirst":    	"Erste",
                "sPrevious": 	"Zurück",
                "sNext":     	"Nächste",
                "sLast":     	"Letzte",
                "page":         "Seite",
                "pageOf":       "von"
            },
            "oAria": {
                "sSortAscending":  ": aktivieren, um Spalte aufsteigend zu sortieren",
                "sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
            }
        }
    }
};
