function connectingclient() {
  var ftpClient = require("ftp-client"),
    config = {
      host: "localhost",
      port: 21,
      user: "user1",
      password: "",
    },
    options = {
      logging: "basic",
    },
    client = new ftpClient(config, options);

  client.connect(function () {
    client.download(
      ".",
      ".",
      {
        overwrite: "none",
        // downloadedFiles: [('untergkl.txt')],
      },
      function (result) {
        console.log(result);
      }
    );
  });
}
