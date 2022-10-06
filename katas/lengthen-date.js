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
    console.log(suffix);
  } else if (day.endsWith("2")) {
    suffix = "nd";
    console.log(suffix);
  } else if (day.endsWith("3")) {
    suffix = "rd";
    console.log(suffix);
  } else {
    suffix = "th";
  }
  const birthday = new Date("October 06, 2022");
  console.log(birthday.getDay());
  const dayNumber = birthday.getDay();
  const weekday = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  console.log(weekday[dayNumber]);
  return `${day}${suffix} `;
}

lengthenDate(`21.03.2017`);

module.exports = lengthenDate;
