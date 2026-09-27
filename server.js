import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "Barzo Instagram Backend"
  });
});

app.get("/instagram/callback", (req, res) => {
  const { code, error, error_description } = req.query;

  if (error) {
    return res.status(400).send(
      `Instagram login error: ${error_description || error}`
    );
  }

  if (!code) {
    return res.status(400).send("Missing Instagram authorization code.");
  }

  res.send("Instagram authorization code received. Barzo backend is ready.");
});

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode === "subscribe" &&
    token &&
    token === process.env.INSTAGRAM_VERIFY_TOKEN
  ) {
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

app.post("/webhook", (req, res) => {
  console.log("Instagram webhook:", JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Barzo Instagram Backend running on port ${PORT}`);
});
