const OpenAI = require("openai");

module.exports = class GPTConnection {
    constructor() {
        this.client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    /**
     * getChatGPTResponse
     * Sends a message to the ChatGPT model and returns the response text.
     *
     * @param {string} userMessage - The input message from the user
     * @returns {Promise<string>} - The response from ChatGPT
     */
    async getChatGPTResponse(userMessage) {
        try {
            const completion = await this.client.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful WhatsApp chatbot.",
                    },
                    { role: "user", content: userMessage },
                ],
            });

            return completion.data.choices[0].message.content;
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
            return "Sorry, I am having trouble right now. Please try again later.";
        }
    }
};
