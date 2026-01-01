const express = require("express");
const cors = require ("cors");
const dayjs = require ("dayjs")

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// copied and pasted this part
app.use(express.static("public")); // serve your static site

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// example API route
app.get("/stats", cors(), async (req, res) => {
  try {
    // const slack_id = "U08QMC72ZST"
    const startofday = dayjs().startOf('day');
    const endofday = dayjs().endOf('day');
    const response = await fetch(`https://hackatime.hackclub.com/api/v1/users/U08QMC72ZST/stats?start_date=${startofday}&end_date=${endofday}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch API" });
  }
});

app.listen(port, () => {
  console.log("Server running at port" + port);
  console.log('lol idk bruh')
});