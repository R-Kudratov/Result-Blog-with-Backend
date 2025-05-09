require("dotenv").config();
const jwt = require("jsonwebtoken");

function generate(userId) {
    return jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: "30d" });
}

function verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    generate,
    verify,
};
