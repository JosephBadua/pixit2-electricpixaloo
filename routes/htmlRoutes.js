module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/login", function(req, res) {
    res.render("login");
  });
  app.get("/about", function(req, res) {
    res.render("about");
  });
  app.get("/register", function(req, res) {
    res.render("register");
  });
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });
  app.get("/leaderboard", function(req, res) {
    res.render("leaderboard");
  });
  app.get("/splash", function(req, res) {
    res.render("splash");
  });
};
