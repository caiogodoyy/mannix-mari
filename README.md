# MARI

## Overview

Mari is a ChatGPT Chatbot that receives incoming WhatsApp messages via Twilio, sends them to the OpenAI API, and responds with ChatGPT-generated text. This allows you to build a conversational interface for customer support, information retrieval, or just fun experimentation.

## Features
- ChatGPT Integration: Leverages the OpenAI API to generate context-aware replies.
- WhatsApp Messaging: Uses Twilio or the WhatsApp Cloud API for sending/receiving WhatsApp messages.
- Dockerized: Easily run locally or in the cloud using Docker.
- Extendable: You can add more functionality like conversation memory, user tracking, and integrations with databases.

## Requirements
- Node.js (version 14 or higher recommended) or another language runtime if you adapt the code.
- Docker & Docker Compose (for containerized development).
- ngrok account (optional but recommended for local testing).
- OpenAI API Key (from OpenAI).
- Twilio Account or a verified WhatsApp Cloud API setup.

## Variables
| Environment Variable     | Description                                                 | Example                                  |
|--------------------------|-------------------------------------------------------------|------------------------------------------|
| `OPENAI_API_KEY`         | Your OpenAI API key for accessing ChatGPT models.           | `sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`     |
| `TWILIO_ACCOUNT_SID`     | Twilio account SID for WhatsApp integration.                | `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`     |
| `TWILIO_AUTH_TOKEN`      | Twilio auth token associated with the account SID.          | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`       |
| `PORT`                   | Port on which your application will run (if configurable).  | `3000`                                   |
