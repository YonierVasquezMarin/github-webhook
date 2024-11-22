const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/hook", (req, res) => {
  console.log("Capture event of Github WebHook");
  return res.status(200).end();
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});