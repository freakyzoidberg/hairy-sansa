module.exports = function(grunt) {
  grunt.initConfig({
    webServer: {
      port: 8090,
      rootFolder: "./www"
    }
  });

  grunt.registerTask("default", "start a webserver", function() {
    var
      http = require("http"),
      express = require("express"),
      app = express(),
      webServerOptions = grunt.config("webServer");

    this.async();

    app.use(express.static(webServerOptions.rootFolder));
    http.createServer(app).listen(webServerOptions.port, function() {
      grunt.log.writeln("web server started on port " + webServerOptions.port);
    });
  });
};
