import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Users } from "./users.js";
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  console.log(q);
  const keys = ["first_name", "last_name", "email", "gender"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q)),
    );
  };

  res.json(search(Users).slice(0, 10));
});

app.listen(2023, () => {
  console.log("Server is running on port 2023");
});
