import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './ChatbotIcon.css';

const ChatbotIcon = ({ toggleChatbot }) => {
    return (
        <div className="chatbot-icon" onClick={toggleChatbot}>
            <FontAwesomeIcon icon={faCommentDots} />
        </div>
    );
};

export default ChatbotIcon;
