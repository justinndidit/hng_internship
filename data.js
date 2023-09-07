module.exports = [
  {
    slack_name: "Olasoji Favour",
    current_day: new Date().toLocaleString("en-US", { weekday: "long" }),
    utc_time: new Date().toISOString().slice(0, -5) + "Z",
    track: "backend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  },
];
