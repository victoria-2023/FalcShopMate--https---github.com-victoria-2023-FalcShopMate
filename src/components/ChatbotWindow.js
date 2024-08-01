import React from 'react';
import './ChatbotWindow.css';

const ChatbotWindow = ({ isOpen, toggleChatbot }) => {
    return (
        <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
            <div className="chatbot-header">
                <h2>Support ChatBot</h2>
                <button className="close-button" onClick={toggleChatbot}>X</button>
            </div>
            <div className="chatbot-body">
                <div className="chatbot-message">
                    <div className="bot-message">
                        <p>Hi! 👋 How can I help you today?</p>
                    </div>
                </div>
                <div className="chatbot-options">
                    <button>Services</button>
                    <button>Solutions</button>
                    <button>Book a call</button>
                    <button>Leave a message</button>
                </div>
            </div>
            <div className="chatbot-input">
                <input type="text" placeholder="Send a message..." />
                <button type="submit">Send</button>
            </div>
        </div>
    );
};

export default ChatbotWindow;
