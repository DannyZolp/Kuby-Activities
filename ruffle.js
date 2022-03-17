const https = require("https");
const { exec } = require("child_process");

https.get(
  {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1",
    },
    hostname: "api.github.com",
    path: "/repos/ruffle-rs/ruffle/releases",
    port: 443,
  },
  (res) => {
    let data = "";

    res.on("data", (chunk) => (data += chunk));

    res.on("end", () => {
      const json = JSON.parse(data);
      const downloadURL = json[0].assets.find((j) =>
        j.name.includes("-web-selfhosted.zip")
      ).browser_download_url;

      exec(`wget -O ruffle.zip ${downloadURL}`, (error) => {
        if (error) {
          console.log(`wget error: ${error.message}`);
          return;
        }

        exec(`unzip -o -d ruffle ruffle.zip`, (error) => {
          if (error) {
            console.log(`unzip error: ${error}`);
            return;
          }
        });
      });
    });
  }
);
