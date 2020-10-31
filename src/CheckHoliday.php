<?php

class CheckHoliday
{
    public static function is_sunday($datetime)
    {
        return $datetime->format('l') == 'Sunday';
    }
    
    public static function is_new_years_day($datetime)
    {
        return $datetime->format('F j') == 'January 1';
    }
    
    public static function is_easter($datetime)
    {
        $d = new DateTime();
        $d->setTimestamp(
            easter_date(
                intval(
                    $datetime->format('Y')
                )
            )
        );
        return $datetime->format('Ymd') == $d->format('Ymd');
    }

    public static function is_day_of_month_holiday($datetime, $day_of_month_str)
    {
        $d = new DateTime();
        $d->setTimestamp(
            strtotime(
                sprintf(
                    '%s %d',
                    $day_of_month_str,
                    intval(
                        $datetime->format('Y')
                    )
                )
            )
        );
        return $datetime->format('Ymd') == $d->format('Ymd');
    }
    
    public static function is_memorial_day($datetime)
    {
        return self::is_day_of_month_holiday(
            $datetime, 
            'last monday of may'
        );
    }

    public static function is_july_fourth($datetime)
    {
        return $datetime->format('F j') == 'July 4';
    }
    
    public static function is_labor_day($datetime)
    {
        return self::is_day_of_month_holiday(
            $datetime,  
            'first monday of september'
        );
    }
    
    public static function is_thanksgiving($datetime)
    {
        return self::is_day_of_month_holiday(
            $datetime,  
            'fourth thursday of november'
        );
    }
    
    public static function is_day_after_thanksgiving($datetime)
    {
        $d = clone($datetime);
        $d->modify('-1 day');
        return self::is_thanksgiving($d);
    }
    
    public static function is_christmas_eve($datetime)
    {
        return $datetime->format('F j') == 'December 24';
    }
    
    public static function is_christmas($datetime)
    {
        return $datetime->format('F j') == 'December 25';
    }
    
    public static function is_new_years_eve($datetime)
    {
        return $datetime->format('F j') == 'December 31';
    }

    public static function is_holiday($datetime)
    {
        return self::is_new_years_day($datetime) ||
               self::is_easter($datetime) ||
               self::is_memorial_day($datetime) ||
               self::is_labor_day($datetime) ||
               self::is_thanksgiving($datetime) ||
               self::is_day_after_thanksgiving($datetime) ||
               self::is_christmas_eve($datetime) ||
               self::is_christmas($datetime) ||
               self::is_new_years_eve($datetime);
    }
    
    public static function is_workday($datetime)
    {
        return !self::is_sunday($datetime) && 
               !self::is_holiday($datetime);
    }
}
?>
