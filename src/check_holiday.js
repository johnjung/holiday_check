function is_sunday(datetime) {
    return datetime.getDay() == 0;
}

function is_day_of_month_holiday(datetime, month, date) {
    // note that months are indexed from 0, dates are indexed from 1-
    // e.g., January 1st is 0, 1. 
    return datetime.getMonth() == month && datetime.getDate() == date;
}

function is_new_years_day(datetime) {
    // January 1st
    return is_day_of_month_holiday(datetime, 0, 1);
}

function is_easter(datetime) {
    switch (datetime.getYear()) {
        case 121:
            // April 4th, 2021
            return datetime.getMonth() == 3 && datetime.getDate() == 4;
        case 122: 
            // April 17th, 2022
            return datetime.getMonth() == 3 && datetime.getDate() == 17;
        case 123:
            // April 9th, 2023
            return datetime.getMonth() == 3 && datetime.getDate() == 9;
        case 124:
            // March 31st, 2024
            return datetime.getMonth() == 2 && datetime.getDate() == 31;
        case 125:
            // April 20th, 2025
            return datetime.getMonth() == 3 && datetime.getDate() == 20;
        case 126:
            // April 5th, 2026
            return datetime.getMonth() == 3 && datetime.getDate() == 5;
        case 127:
            // March 28th, 2027
            return datetime.getMonth() == 2 && datetime.getDate() == 28;
        case 128:
            // April 16th, 2028
            return datetime.getMonth() == 3 && datetime.getDate() == 16;
        case 129:
            // April 1st, 2029
            return datetime.getMonth() == 3 && datetime.getDate() == 1;
        case 130:
            // April 21st, 2030
            return datetime.getMonth() == 3 && datetime.getDate() == 21;
        default:
            // break in an obvious way.
            return true; 
    }
 
function is_memorial_day(datetime) {
    switch (datetime.getYear()) {
        case 121:
            // May 31st, 2021
            return datetime.getMonth() == 4 && datetime.getDate() == 31;
        case 122:
            // May 30th, 2022
            return datetime.getMonth() == 4 && datetime.getDate() == 30;
        case 123:
            // May 29th, 2023
            return datetime.getMonth() == 4 && datetime.getDate() == 29;
        case 124:
            // May 27th, 2024
            return datetime.getMonth() == 4 && datetime.getDate() == 27;
        case 125:
            // May 26th, 2025
            return datetime.getMonth() == 4 && datetime.getDate() == 26;
        case 126:
            // May 25th, 2026
            return datetime.getMonth() == 4 && datetime.getDate() == 25;
        case 127:
            // May 31st, 2027
            return datetime.getMonth() == 4 && datetime.getDate() == 31;
        case 128:
            // May 29th, 2028
            return datetime.getMonth() == 4 && datetime.getDate() == 29;
        case 129:
            // May 28th, 2029
            return datetime.getMonth() == 4 && datetime.getDate() == 28;
        case 130:
            // May 27th, 2030
            return datetime.getMonth() == 4 && datetime.getDate() == 27;
        default:
            // break in an obvious way.
            return true;
}

function is_july_fourth(datetime) {
    // July 4th
    return is_day_of_month_holiday(datetime, 6, 4);
}

function is_labor_day(datetime) {
    switch (datetime.getYear()) {
        case 121:
            // September 6th, 2021
            return datetime.getMonth() == 8 && datetime.getDate() == 6;
        case 122:
            // September 5th, 2022
            return datetime.getMonth() == 8 && datetime.getDate() == 5;
        case 123:
            // September 4th, 2023
            return datetime.getMonth() == 8 && datetime.getDate() == 4;
        case 124:
            // September 2nd, 2024
            return datetime.getMonth() == 8 && datetime.getDate() == 2;
        case 125:
            // September 1st, 2025
            return datetime.getMonth() == 8 && datetime.getDate() == 1;
        case 126:
            // September 7th, 2026
            return datetime.getMonth() == 8 && datetime.getDate() == 7;
        case 127:
            // September 6th, 2027 
            return datetime.getMonth() == 8 && datetime.getDate() == 6;
        case 128:
            // September 4th, 2028
            return datetime.getMonth() == 8 && datetime.getDate() == 4;
        case 129:
            // Septemer 3rd, 2029
            return datetime.getMonth() == 8 && datetime.getDate() == 3;
        case 130: 
            // September 2nd, 2030
            return datetime.getMonth() == 8 && datetime.getDate() == 2;
        default:
            // break in an obvious way.
            return true;
    }
}

function is_thanksgiving(datetime) {
    switch (datetime.getYear()) {
        case 121:
            // November 25th, 2021
            return datetime.getMonth() == 10 && datetime.getDate() == 25;
        case 122:
            // November 24th, 2022
            return datetime.getMonth() == 10 && datetime.getDate() == 24;
        case 123:
            // November 23rd, 2023
            return datetime.getMonth() == 10 && datetime.getDate() == 23;
        case 124:
            // November 28th, 2024
            return datetime.getMonth() == 10 && datetime.getDate() == 28;
        case 125:
            // November 27th, 2025
            return datetime.getMonth() == 10 && datetime.getDate() == 27;
        case 126:
            // November 26th, 2026
            return datetime.getMonth() == 10 && datetime.getDate() == 26;
        case 127:
            // November 25th, 2027
            return datetime.getMonth() == 10 && datetime.getDate() == 25;
        case 128:
            // November 23rd, 2028
            return datetime.getMonth() == 10 && datetime.getDate() == 23;
        case 129:
            // November 22nd, 2029
            return datetime.getMonth() == 10 && datetime.getDate() == 22;
        case 130:
            // November 28th, 2030
            return datetime.getMonth() == 10 && datetime.getDate() == 28;
    }
}

function is_day_after_thanksgiving(datetime) {
    switch (datetime.getYear()) {
        case 121:
            // November 26th, 2021
            return datetime.getMonth() == 10 && datetime.getDate() == 26;
        case 122:
            // November 25th, 2022
            return datetime.getMonth() == 10 && datetime.getDate() == 25;
        case 123:
            // November 24th, 2023
            return datetime.getMonth() == 10 && datetime.getDate() == 24;
        case 124:
            // November 29th, 2024
            return datetime.getMonth() == 10 && datetime.getDate() == 29;
        case 125:
            // November 28th, 2025
            return datetime.getMonth() == 10 && datetime.getDate() == 28;
        case 126:
            // November 27th, 2026
            return datetime.getMonth() == 10 && datetime.getDate() == 27;
        case 127:
            // November 26th, 2027
            return datetime.getMonth() == 10 && datetime.getDate() == 26;
        case 128:
            // November 24th, 2028
            return datetime.getMonth() == 10 && datetime.getDate() == 24;
        case 129:
            // November 23rd, 2029
            return datetime.getMonth() == 10 && datetime.getDate() == 23;
        case 130:
            // November 29th, 2030
            return datetime.getMonth() == 10 && datetime.getDate() == 29;
    }
}

function is_christmas_eve(datetime) {
    // December 24th 
    return is_day_of_month_holiday(datetime, 11, 24);
}

function is_christmas(datetime) {
    // December 25th
    return is_day_of_month_holiday(datetime, 11, 25);
}

function is_new_years_eve(datetime) {
    // December 31st
    return is_day_of_month_holiday(datetime, 11, 31);
}

function is_holiday(datetime) {
    return is_new_years_day(datetime) ||
           is_easter(datetime) ||
           is_memorial_day(datetime) ||
           is_labor_day(datetime) ||
           is_thanksgiving(datetime) ||
           is_day_after_thanksgiving(datetime) ||
           is_christmas_eve(datetime) ||
           is_christmas(datetime) ||
           is_new_years_eve(datetime);
}

function is_workday(datetime) {
    return !is_sunday(datetime) && !is_holiday(datetime);
}
