const currentDay = new Date().getDay();
const currentTime = new Date().toISOString().slice(0, -5) + "Z";

module.exports = [
  {
    slack_name: "Olasoji Favour",
    current_day: currentDay,
    utc_time: currentTime,
    track: "backend",
    github_file_url:
      "https://github.com/justinndidit/hng_internship/blob/main/server.js",
    github_repo_url: "https://github.com/justinndidit/hng_internship",
    status_code: 200,
  },
];
