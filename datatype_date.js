// Construct date time object
var dt1 = new Date();
var dt1 = new Date(2020, 1, 1);
var dt1 = new Date(2020, 1, 1, 10, 0, 0, 0);
var dt1 = new Date(Date.now());  // milliseconds to datetime object

// Type of date - object
console.assert(typeof dt1 == "object");

// Current time.
var now_milliseconds = Date.now();  // Current time, in milliseconds.
var now_datetime = new Date();  // Current time, date object.

// Conversion between milliseconds since 1970 and date object
console.assert(Date.now() == new Date().getTime());
var dt1 = new Date(Date.now());  // milliseconds to datetime object

// Date components.
var dt1 = new Date(2021, 2, 24, 10, 15, 25, 850);
console.assert(dt1.getFullYear() == 2021);  // xxxx full year
console.assert(dt1.getMonth() == 2);  // month of the year
console.assert(dt1.getDate() == 24);  // day of the month
console.assert(dt1.getDay() == 3);  // day of the week, where 0 represents Sunday.
console.assert(dt1.getHours() == 10);  // hour
console.assert(dt1.getMinutes() == 15);  // minutes
console.assert(dt1.getSeconds() == 25);  // seconds
console.assert(dt1.getMilliseconds() == 850);  // milliseconds

// Date to string
console.assert(dt1.toString() == "Wed Mar 24 2021 10:15:25 GMT-0700 (Pacific Daylight Time)");

// String to date
console.assert(Date.parse('04 Dec 1995 00:12:00 GMT') == 818035920000);  // the result is milliseconds since 1970.
console.assert(isNaN(Date.parse('abcdefg')));  // Invalid date string, return NaN.
