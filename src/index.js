const express = require("express");

const router = require("./routes/index");

const PORT = process.env.PORT || 3000;

async function startSever() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { startSever };
