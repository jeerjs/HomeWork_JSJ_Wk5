//Sets current date
function HeaderDate() {
  var currentDate = moment().format("dddd Do MMM YYYY");
  $("#currentDay").text(currentDate);
}

//Refreshes date every second
setInterval(HeaderDate, 1000);

//Object to store data
var Schedule = [
  {
    hour: "9am",
    time: "09",
    reminder: "",
  },
  {
    hour: "10am",
    time: "10",
    reminder: "",
  },
  {
    hour: "11am",
    time: "11",
    reminder: "",
  },
  {
    hour: "12am",
    time: "12",
    reminder: "",
  },
  {
    hour: "1pm",
    time: "13",
    reminder: "",
  },
  {
    hour: "2pm",
    time: "14",
    reminder: "",
  },
  {
    hour: "3pm",
    time: "15",
    reminder: "",
  },
  {
    hour: "4pm",
    time: "16",
    reminder: "",
  },
  {
    hour: "5pm",
    time: "17",
    reminder: "",
  },
];

// saves data to localStorage
function saveSchedule() {
  localStorage.setItem("Schedule", JSON.stringify(Schedule));
}

// sets any data in localStorage to the view
function displayLS() {
  Schedule.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}

// sets any existing localStorage data to the view if it exists
function init() {
  var StoredDate = JSON.parse(localStorage.getItem("Schedule"));

  if (StoredDate) {
    Schedule = StoredDate;
  }

  saveSchedule();
  displayLS();
}
