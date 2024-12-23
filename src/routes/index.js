const express = require("express");
const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const GPTConnection = require("../openai/index");

const router = express.Router();
const gpt = new GPTConnection();

router.post("/webhook", async (req, res) => {
    try {
        const userPhoneNumber = req.body.From;
        const incomingMessage = req.body.Body;
        console.log(
            `Incomming message: (${userPhoneNumber}) ${incomingMessage}`
        );

        const chatbotResponse = await gpt.getChatGPTResponse(incomingMessage);
        console.log("Chatbot response:", chatbotResponse);

        client.messages
            .create({
                body: chatbotResponse,
                from: "whatsapp:+14155238886",
                to: userPhoneNumber,
            })
            .then((message) => console.log(message.sid))
            .done();

        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;
