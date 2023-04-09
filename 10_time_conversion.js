/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example:
s = '12:01:00PM"
returns "12:01:00"

s = '12:01:00AM"
returns "00:01:00"

*/

function timeConversion(s) {
    // Write your code here
    let [hh, mm, ss] = s.split(":"); // ss contains PM AM

    let code = s.includes("P") ? "PM" : "AM";
    if (code == "AM") {
        if (hh == "12") hh = "00";
    } else {
        if (hh != "12") hh = (parseInt(hh) + 12).toString();
    }
    return `${hh}:${mm}:${ss[0] + ss[1]}`;
}

console.log(timeConversion("12:01:00PM"));
