function timeConversion(s) {
  // Write your code here
  const input = s.split(":");
  let hours = +input[0];
  let timeFrame = input[2].slice(2);
  let seconds = input[2].slice(0, 2);

  if (timeFrame === "PM" && hours !== 12) {
    hours += 12;
  }

  if (timeFrame === "AM" && hours === 12) {
    hours = "00";
  } else if (hours < 10) {
    hours = "0" + hours.toString();
  } else {
    hours = hours.toString();
  }

  return [hours, input[1], seconds].join(":");
}
timeConversion("07:00:01PM");
