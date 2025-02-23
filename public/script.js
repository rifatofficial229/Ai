async function askAI() {
    const question = document.getElementById("question").value.trim();
    
    if (!question) {
        alert("❌ Please enter a question");
        return;
    }

    document.getElementById("response").innerText = "🤖 Thinking...";

    try {
        const response = await fetch(`/ask?q=${encodeURIComponent(question)}`);
        const data = await response.json();
        document.getElementById("response").innerText = data.response || "⚠️ No response received.";
    } catch (error) {
        document.getElementById("response").innerText = "❌ Error fetching response. Try again.";
    }
}

document.getElementById("question").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        askAI();
    }
});
