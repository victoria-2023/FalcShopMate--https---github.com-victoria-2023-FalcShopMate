// // import React, { useState } from 'react';
// // import './Chatbot.css';

// // const Chatbot = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [messages, setMessages] = useState([]);
// //     const [input, setInput] = useState('');

// //     const toggleChatbot = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     const handleSendMessage = () => {
// //         if (input.trim()) {
// //             const newMessages = [...messages, { text: input, user: 'user' }];
// //             setMessages(newMessages);
// //             setInput('');
// //             generateBotResponse(newMessages);
// //         }
// //     };

// //     const generateBotResponse = (newMessages) => {
// //         const botMessage = "Thank you for your message. How can I assist you further?";
// //         setTimeout(() => {
// //             setMessages([...newMessages, { text: botMessage, user: 'bot' }]);
// //         }, 1000);
// //     };

// //     return (
// //         <div className={`chatbot ${isOpen ? 'open' : ''}`}>
// //             <div className="chatbot-icon" onClick={toggleChatbot}>
// //                 <img src={chatIcon} alt="Chat Icon" />
// //             </div>
// //             {isOpen && (
// //                 <div className="chatbot-window">
// //                     <div className="chatbot-header">
// //                         <h2>Welcome to Chatbot</h2>
// //                         <button onClick={toggleChatbot}>&times;</button>
// //                     </div>
// //                     <div className="chatbot-messages">
// //                         {messages.map((msg, index) => (
// //                             <div key={index} className={`message ${msg.user}`}>
// //                                 {msg.text}
// //                             </div>
// //                         ))}
// //                     </div>
// //                     <div className="chatbot-input">
// //                         <input
// //                             type="text"
// //                             value={input}
// //                             onChange={(e) => setInput(e.target.value)}
// //                             placeholder="Ask me anything..."
// //                         />
// //                         <button onClick={handleSendMessage}>Send</button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Chatbot;



// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
// import './Chatbot.css';

// const Chatbot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');

//     const toggleChatbot = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleSendMessage = () => {
//         if (input.trim()) {
//             const newMessages = [...messages, { text: input, user: 'user' }];
//             setMessages(newMessages);
//             setInput('');
//             generateBotResponse(newMessages);
//         }
//     };

//     const generateBotResponse = (newMessages) => {
//         const botMessage = "Thank you for your message. How can I assist you further?";
//         setTimeout(() => {
//             setMessages([...newMessages, { text: botMessage, user: 'bot' }]);
//         }, 1000);
//     };

//     return (
//         <div className={`chatbot ${isOpen ? 'open' : ''}`}>
//             <div className="chatbot-icon" onClick={toggleChatbot}>
//                 <FontAwesomeIcon icon={faCommentDots} />
//             </div>
//             {isOpen && (
//                 <div className="chatbot-window">
//                     <div className="chatbot-header">
//                         <h2>Welcome to Chatbot</h2>
//                         <button onClick={toggleChatbot}>&times;</button>
//                     </div>
//                     <div className="chatbot-messages">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`message ${msg.user}`}>
//                                 {msg.text}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="chatbot-input">
//                         <input
//                             type="text"
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Ask me anything..."
//                         />
//                         <button onClick={handleSendMessage}>Send</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Chatbot;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessages = [...messages, { text: input, user: 'user' }];
            setMessages(newMessages);
            setInput('');
            generateBotResponse(newMessages);
        }
    };

    const generateBotResponse = (newMessages) => {
        const botMessage = "Thank you for your message. How can I assist you further?";
        setTimeout(() => {
            setMessages([...newMessages, { text: botMessage, user: 'bot' }]);
        }, 1000);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={`chatbot ${isOpen ? 'open' : ''}`}>
            <div className="chatbot-icon" onClick={toggleChatbot}>
                <FontAwesomeIcon icon={faCommentDots} />
            </div>
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h2>Welcome to Chatbot</h2>
                        <button onClick={toggleChatbot}>&times;</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.user}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
