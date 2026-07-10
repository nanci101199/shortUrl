const { getUser } = require("../service/auth");

const restrictToLoggedInUserOnly = (req, res, next) => {
  const userUUID = req.cookies?.uid;
  const user = getUser(userUUID);

  if (!userUUID || !user) return res.redirect("login");
  req.user = user;
  next();
};

const checkAuth = (req, res, next) => {
  const userUUID = req.cookies?.uid;
  const user = getUser(userUUID);

  req.user = user;
  next();
};

module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth
}