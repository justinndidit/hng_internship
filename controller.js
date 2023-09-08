const Data = require("./data");

const getUser = async function (req, res) {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    Data.current_day = new Date().toLocaleString("en-US", { weekday: "long" });
    Data.utc_time = new Date().toISOString().slice(0, -5) + "Z";
    return res.status(200).send(Data);
  }

  const user = Data.find(
    (users) =>
      users.slack_name.split(" ").join("_").toLocaleLowerCase() ===
        slack_name && users.track === track
  );
  user.current_day = new Date().toLocaleString("en-US", {
    weekday: "long",
  });

  user.utc_time = new Date().toISOString().slice(0, -5) + "Z";

  res.status(200).send(user);
};

module.exports = {
  getUser,
};
