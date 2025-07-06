const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

function tokenSign(payload) {
    return jwt.sign(payload, SECRET);
}

function tokenVerif(token) {
    console.log(token, "<<< token");
    return jwt.verify(token, SECRET);
}

module.exports = { tokenSign, tokenVerif };
