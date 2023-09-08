//const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
const currentTime = new Date().toISOString().slice(0, -5) + "Z";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

module.exports = [
  {
    slack_name: "Olasoji Favour",
    current_day: weekdays[new Date().getDay()],
    utc_time: currentTime,
    track: "backend",
    github_file_url:
      "https://github.com/justinndidit/hng_internship/blob/main/server.js",
    github_repo_url: "https://github.com/justinndidit/hng_internship",
    status_code: 200,
  },
];
