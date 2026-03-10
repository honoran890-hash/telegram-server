const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const TELEGRAM_TOKEN = "8771918903:AAFBvv0CuP9JzfAmpXIO38rUu1222IqHQOE";
const CHAT_ID = "5532534320";

app.post("/send", async (req, res) => {
  const message = req.body.message;

  try {
    await axios.post("https://api.telegram.org/bot" + TELEGRAM_TOKEN + "/sendMessage", {
      chat_id: CHAT_ID,
      text: message
    });

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Telegram error" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});