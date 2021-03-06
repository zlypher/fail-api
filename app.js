const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require('path')
const router = express.Router();

const sendResult = (res, code) => {
    if (isNaN(code)) {
        res.sendStatus(418);
    } else {
        res.sendStatus(code);
    }
}

router.all("/fail/:code", (req, res) => {
    const code = parseInt(req.params.code, 10);
    const delay = parseInt(req.query.delay, 10);

    if (!isNaN(delay)) {
        setTimeout(() => sendResult(res, code), delay);
    } else {
        sendResult(res, code);
    }
});

const accessStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a"
});

const app = express();
app.use(morgan("combined", { stream: accessStream }));
app.use(morgan("dev"));
app.use(cors());
app.use("/", router);

module.exports = app;