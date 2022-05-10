console.log("Hello");

//Sets current date
function HeaderDate() {
  var currentDate = moment().format("dddd Do MMM YYYY");
  $("#currentDay").text(currentDate);
}
HeaderDate();

//Object to store data
var Schedule = [
  {
    id: "0",
    hour: "09:00",
    time: "09:00",
  },
  {
    id: "1",
    hour: "10:00",
    time: "10:00",
  },
  {
    id: "2",
    hour: "11:00",
    time: "11:00",
  },
  {
    id: "3",
    hour: "12:00",
    time: "12:00",
  },
  {
    id: "4",
    hour: "01:00",
    time: "13:00",
  },
  {
    id: "5",
    hour: "02:00",
    time: "14:00",
  },
  {
    id: "6",
    hour: "03:00",
    time: "15:00",
  },
  {
    id: "7",
    hour: "04:00",
    time: "16:00",
  },
  {
    id: "8",
    hour: "05:00",
    time: "17:00",
  },
];
