<?php

if (!function_exists('convert_to_js_date_time_format')) {
    /**
     * Convert PHP date time format to JS date time format
     * PHP format: Y-m-d H:i  ===> JS format: yyyy-mm-dd hh:ii
     *
     * @param string $format : full date time format : "d.m.Y H:i"
     * @param bool   $onlyDate
     * @param bool   $onlyTime
     *
     * @return mixed|string
     */
    function convert_to_js_date_time_format($format = '', $onlyDate = false, $onlyTime = false)
    {
        if (empty($format)) {
            return $format;
        }

        $format = str_replace(['d', 'm', 'Y', 'H', 'i'], ['dd', 'mm', 'yyyy', 'hh', 'ii'], $format);

        if ($onlyDate) {
            $format = explode(' ', $format);
            return isset($format[0]) ? $format[0] : '';
        }

        if ($onlyTime) {
            $format = explode(' ', $format);
            return isset($format[1]) ? $format[1] : '';
        }

        return $format;
    }
}
