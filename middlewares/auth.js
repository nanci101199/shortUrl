const { getUser } = require("../service/auth");

const checkforAuthentication = (req, res, next) => {

  // ===== Authorization Header (Old Way) =====
  // const authorizationHeaderValue = req.headers["authorization"];
  // req.user = null;

  // if (
  //   !authorizationHeaderValue ||
  //   !authorizationHeaderValue.startsWith("Bearer ")
  // ) {
  //   return next();
  // }

  // const token = authorizationHeaderValue.split("Bearer ")[1];

  // ===== Cookie Based Authentication (New Way) =====
  const token = req.cookies?.token;

  req.user = null;

  if (!token) {
    return next();
  }

  const user = getUser(token);
  req.user = user;

  return next();
};

const restrictTo = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.redirect("/login");
    }
console.log(roles, req.user);
    if (!roles.includes(req.user.role)) {
      return res.end("Unauthorized");
    }

    next();
  };
}; 

const restrictToLoggedInUserOnly = (req, res, next) => {
  const userId = req.headers["authorization"];
  const token = userId.split("Bearer ")[1];
  const user = getUser(token);

  if (!token || !user) return res.redirect("login");
  req.user = user;
  next();
};

const checkAuth = (req, res, next) => {
  const userId = req.headers["authorization"];
  const token = userId?.split("Bearer ")[1];
  const user = getUser(token);

  req.user = user;
  next();
};

module.exports = {
  checkforAuthentication,
  restrictTo
};
