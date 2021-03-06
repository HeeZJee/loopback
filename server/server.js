// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

"use strict";

const compression = require("compression");
const loopback = require("loopback");
const boot = require("loopback-boot");

const app = (module.exports = loopback());
app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit("started");
    const baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);
    if (app.get("loopback-component-explorer")) {
      const explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

app.models.user.find((err, result) => {
  if (err) { console.warn(err) }
  else {
    if (result.length === 0) {
      const user = {
        email: 'admin@gmail.com',
        password: 'abc123',
        username: 'admin'
      }
      app.models.user.create(user, (err, result) => {
        err ? console.warn("Error", err) : console.log("Result", result)
      })
    }

  }
})

app.models.user.afterRemote("create", (ctx, user, cb) => {
  console.log("New User \n", user);
  app.models.Profile.create(
    {
      firstName: "Asad",
      lastName: "Ali",
      age: 22,
      birthDate: "1998-03-19T15:19:13.057Z",
      createdAt: new Date(),
    },
    (err, result) => ((err && !result) ? console.error("Error:", err) : console.log("New Profile: \n", result))
  );
  cb()
});


app.middleware('auth', loopback.token({
  model: app.models.customAccessToken,
}))