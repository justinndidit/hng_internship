const Data = require("./data");

const getUser = async function (req, res) {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res.status(200).json(Data);
  }

  const user = Data.find(
    (users) =>
      users.slack_name.split(" ").join("_").toLocaleLowerCase() ===
        slack_name && users.track === track
  );

  res.status(200).json(user);
};

module.exports = {
  getUser,
};
