import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    // Handle sending a message
    const handleSendMessage = async () => {
        if (!userInput) return;

        // Append user message to messages array
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages);

        try {
            // Call backend chatbot API
            const response = await fetch("https://flask-chatbot-latest.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_input: userInput }),
            });
            const data = await response.json();

            // Append bot response to messages array
            setMessages([...newMessages, { sender: "bot", text: data.response }]);
        } catch (error) {
            setMessages([...newMessages, { sender: "bot", text: "Sorry, something went wrong." }]);
        }

        // Clear input field
        setUserInput("");
    };

    return (
        <div className="chatbot-container">
            <h2>Delhi Metro Chatbot</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={userInput}
                    placeholder="Ask me anything about Delhi Metro..."
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
