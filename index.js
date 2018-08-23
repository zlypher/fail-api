const express = require("express");
const router = express.Router();

const sendResult = (res, code) => {
    if (isNaN(code)) {
        res.sendStatus(404);
    }
    
    res.sendStatus(code);
}

router.get("/fail/:code", (req, res) => {
    const code = parseInt(req.params.code, 10);
    const delay = parseInt(req.query.delay, 10);

    if (!isNaN(delay)) {
        setTimeout(() => sendResult(res, code), delay);
    } else {
        sendResult(res, code);
    }
});

const app = express();
app.use("/", router);
app.listen(process.env.PORT || 1234);