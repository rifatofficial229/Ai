const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = "https://nggemini.tiiny.io/?prompt=";

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// API endpoint to handle AI requests
app.get("/ask", async (req, res) => {
    const question = req.query.q;
    if (!question) {
        return res.json({ response: "❌ Please enter a question." });
    }

    try {
        const apiResponse = await axios.get(API_URL + encodeURIComponent(question));
        res.json({ response: apiResponse.data });
    } catch (error) {
        res.json({ response: "❌ Error fetching AI response." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
