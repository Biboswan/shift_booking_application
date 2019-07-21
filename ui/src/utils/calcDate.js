import dayDifference from "./dayDifference";

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function(from) {
  const dayDiff = dayDifference(from);
  if (dayDiff === 0) {
    return "Today";
  } else if (dayDiff === 1) {
    return "Tomorrow";
  } else {
    const date = new Date(from);
    return `${MONTH[date.getMonth()]} ${date.getDate()}`;
  }
}
