const Data = require("./data");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getUser = async function (req, res) {
  const { slack_name, track } = req.query;
  const day = new Date().getDay(); //new Date().getDay();

  if (!slack_name || !track) {
    Data.current_day = daysOfWeek[day];
    Data.utc_time = new Date().toISOString().slice(0, -5) + "Z";
    return res.status(200).send(Data);
  }

  const user = Data.find(
    (users) =>
      users.slack_name.split(" ").join("_").toLocaleLowerCase() ===
        slack_name && users.track === track
  );
  user.current_day = daysOfWeek[day];
  user.utc_time = new Date().toISOString().slice(0, -5) + "Z";

  res.status(200).send(user);
};

module.exports = {
  getUser,
};
