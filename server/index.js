const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);

app.get("/api/fortune", controller.getFortune);

app.get("/api/love", controller.getLove);

app.get("/api/number", controller.getNumber);

app.get("/api/baby", controller.getBaby);

app.listen(4000, () => console.log("Server running on 4000"));
