var dayOfWeek = (new Date).getDay();

var today = new Date();
var mo = (today.getMonth() + 1);
var month = mo.toString();

//the following pulls the day and adds a zero in front, then it only displays the last two characters. that way 1 shows up as 01 and 12 still shows up as 12
var da = ('0' + today.getDate()).slice(-2);
var day = da.toString();
var yr = today.getFullYear();
var year = yr.toString();

var d = month.concat(day, year);
//for testing specific days use the var d below and comment out the var d above this line
//var d = "1102016";

//for testing use the line below to display date the code is pulling
//document.getElementById("date").innerHTML = d;

// note: you need to separate date ranges that cover different years so go until dec 31 and start on jan 1
// 2nd note: you don't need leading zeros for the month
if ((d >= 11192016 && d <= 11272016) || (d >= 12172016 && d <= 12312016) || (d >= 1012017 && d <= 1162017)) {
  // Holiday and Break Hours
  var hours = ["CLOSED", // Sunday
    "8:00 AM to 4:30 PM", // Monday
    "8:00 AM to 4:30 PM", // Tuesday
    "8:00 AM to 4:30 PM", // Wednesday
    "8:00 AM to 4:30 PM", // Thursday
    "8:00 AM to 4:30 PM", // Friday
    "CLOSED"
  ]; // Saturday
} else {
  // regular semester hours
  var hours = ["11:00 AM to 11:30 PM", // Sunday
    "8:00 AM to 11:30 PM", // Monday
    "8:00 AM to 11:30 PM", // Tuesday
    "8:00 AM to 11:30 PM", // Wednesday
    "8:00 AM to 11:30 PM", // Thursday
    "8:00 AM to 7:00 PM", // Friday
    "11:00 AM to 6:00 PM"
  ]; // Saturday
}

var todays = hours[dayOfWeek];
var words = "Today's Hours: ";
var todaysHours = words.concat(todays);

//exam hours, closed holiday days, revert to default hours above
//you can't code like this. it just doesn't work. if ( (d == 552016) || (d >= 592016 && d <= 5102016)) 
//the following doesn't work well with more than 2 else if statements
if (d == 12122016 || d == 12132016 || d == 12142016 || d == 12152016) {
  document.getElementById("hours").innerHTML = "Today's Hours: 7:30 AM to Midnight";
} else if (d == 12162016) {
  document.getElementById("hours").innerHTML = "Today's Hours: 7:30 AM to 6:00 PM";
} else if (d == 9032016 || d == 9042016 || d == 9052016 || d == 11242016 || d == 11252016 || d == 12262016 || d == 1022017 || d == 1162017) {
  document.getElementById("hours").innerHTML = "Today's Hours: CLOSED";
} else {
  document.getElementById("hours").innerHTML = todaysHours;
}
