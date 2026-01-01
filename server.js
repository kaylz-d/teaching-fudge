const express = require("express");
const cors = require ("cors");
const dayjs = require ("dayjs")
const path = require("path")

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// copied and pasted this part
app.use(express.static(path.join(__dirname, "public")));

// example API route
app.get("/stats", cors(), async (req, res) => {
  try {
    // const slack_id = "U08QMC72ZST"
    const startOfDay = dayjs().startOf("day").format("YYYY-MM-DD");
    const endOfDay = dayjs().endOf("day").format("YYYY-MM-DD");
    const response = await fetch(`https://hackatime.hackclub.com/api/v1/users/U08QMC72ZST/stats?start_date=${startOfDay}&end_date=${endOfDay}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch API" });
  }
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server running at port" + port);
  console.log('lol idk bruh')
});