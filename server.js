const express = require("express");
const cors = require("cors");
const dayjs = require("dayjs")
const path = require("path")
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
// copied and pasted this part
app.use(express.static("public")); // serve your static site

// example API route
app.get("/stats", cors(), async (req, res) => {
  try {
    // const slack_id = "U08QMC72ZST"
    const startofday = dayjs().startOf('day').format("YYYY-MM-DD");
    const endofday = dayjs().endOf('day').format("YYYY-MM-DD");

    const response = await fetch(`https://hackatime.hackclub.com/api/v1/users/U08QMC72ZST/stats?start_date=${startofday}&end_date=${endofday}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch API" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});