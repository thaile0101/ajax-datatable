require('../bootstrap.js');

const ButtonRenderer = require('./render-action-buttons');

DynamicColumns = function () {
    // init variables
    var $headingColumns = $(ADConst.controls.tableHeadingColumns),
        $tableActions = $(ADConst.controls.tableActionColumn);

    // define callbacks
    var onChangeColumnClassCallback;

    var buildColumns = function buildColumns($table) {
        var definedColumns, actionColumn = [];
        definedColumns = renderDefinedColumns($table);
        actionColumn = renderActionColumn($table);
        return definedColumns.concat(actionColumn);
    };

    var renderDefinedColumns = function renderDefinedColumns($table) {
        var columns = [];
        $table.find("tr.heading > th").each(function (key, item) {
            var columnName = $(item).attr('data-col-name');
            if (typeof columnName == 'undefined' || columnName == '') {
                return true; // skips to the next iteration
            }

            // add column custom classes via callback function
            var customClasses = '';
            if (typeof onChangeColumnClassCallback === 'function') {
                customClasses = onChangeColumnClassCallback(columnName);

                var classes = $(item).attr('data-col-class');
                if (typeof classes != 'undefined' && classes != '') {
                    customClasses += ' ' + classes;
                }
            }

            var isOrderable = $(item).attr('data-col-orderable') === '1';
            columns.push({
                data: columnName,
                name: columnName,
                orderable: isOrderable,
                className: customClasses,

                // if data is displayed by HTML format (i.e: status, image) -> render html
                mRender: function mRender(data, type, row) {
                    var html = $(item).attr('data-html');
                    if (typeof html != 'undefined' && html != '') {
                        if (columnName == 'status' && data == 'pending') {
                            html = html.replace('fa-check font-green-jungle', 'fa-refresh font-red');
                            html = html.replace('Publish', 'Pending');
                        }
                        return html.replace('#data#', row[columnName]);
                    }

                    return data;
                }
            });
        });

        return columns;
    };

    var renderActionColumn = function renderActionColumn($table) {
        var columns = [];
        // if (typeof $tableActions == 'undefined' || $tableActions.length <= 0) {
        //     return columns;
        // }

        columns.push({
            orderable: false,
            className: "dt-body-center",
            mRender: function mRender(data, type, row) {
                var btnShow = ButtonRenderer.setTable($table).renderShowButton(data, type, row);
                var btnEdit = ButtonRenderer.setTable($table).renderEditButton(data, type, row);
                var btnDelete = ButtonRenderer.setTable($table).renderDeleteButton(data, type, row);
                var btnAssign = ButtonRenderer.setTable($table).renderAssignButton(data, type, row);
                var btnRestore = ButtonRenderer.setTable($table).renderRestoreButton(data, type, row);
                var btnTrash = ButtonRenderer.setTable($table).renderTrashButton(data, type, row);
                var btnUnblock = ButtonRenderer.setTable($table).renderUnblockButton(data, type, row);
                var btnTransaction = ButtonRenderer.setTable($table).renderTransactionButton(data, type, row);

                return btnShow + " " + btnEdit + " " + btnDelete + " " + btnAssign + " " + btnRestore + " " + btnTrash + " " + btnUnblock + " " + btnTransaction;
            }
        });

        return columns;
    };

    var _setModifyColumnClassCallback = function _setModifyColumnClassCallback(callback) {
        onChangeColumnClassCallback = callback;
    };

    return {
        build: function build($table) {
            return buildColumns($table);
        },

        setModifyColumnClassCallback: function setModifyColumnClassCallback(callback) {
            _setModifyColumnClassCallback(callback);
        }
    };
}();

module.exports = DynamicColumns;
