/*
  The function lengthenDate should take a date in the format '21.03.2017' and return a string in the format 'Tuesday 9th February 2017'
*/

function lengthenDate(date) {
  const dateArr = date.split(".");

  const day = dateArr[0];
  const month = dateArr[1];
  const year = dateArr[2];

  let suffix = "";

  if (day === "11" || day === "12" || day === "13") {
    suffix = "th";
  }
  if (day.endsWith("1")) {
    suffix = "st";
  } else if (day.endsWith("2")) {
    suffix = "nd";
  } else if (day.endsWith("3")) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  const months = {
    01: "January",
    02: "February",
    03: "March",
    04: "April",
    05: "May",
    06: "June",
    07: "July",
    08: "August",
    09: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const monthWord = months[+month];
  const returnDay = new Date(`${monthWord} ${day} ${year}`);
  const dayNumber = returnDay.getDay();

  const weekday = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  const dayOfTheWeek = weekday[dayNumber];

  return `${dayOfTheWeek} ${day}${suffix} ${monthWord} ${year}`;
}

console.log(lengthenDate("06.10.2022"));

module.exports = lengthenDate;
