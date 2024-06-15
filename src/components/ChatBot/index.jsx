import React, { useState } from "react";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const currentTime = getCurrentTime();

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", message: userMessage, time: currentTime },
      {
        role: "bot",
        message:
          "Selamat datang di Plantpal.id ! Saya asisten virtual yang siap membantu Anda. Apakah ada yang bisa saya bantu?",
        time: currentTime,
      },
    ]);

    setUserMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="chatbot bg-[#EFAC00]">
      <header className="text-center text-white text-opacity-80 text-2xl font-bold">
        <h2>Chatbot</h2>
      </header>
      <ul className="chatbox bg-white m-2 no-scrollbar">
        {chatMessages.map((msg, index) => (
          <>
            <li
              key={index}
              className={`chat ${
                msg.role === "user" ? "outgoing" : "incoming"
              }`}
            >
              {/* {msg.role === 'bot' && <span className="material-symbols-outlined">smart_toy</span>} */}
              <p>{msg.message}</p>
            </li>
            <span
              className={`mb-6 chat ${
                msg.role === "user" ? "outgoing" : "incoming"
              }`}
            >
              {msg.time}
            </span>
          </>
        ))}
      </ul>
      <form className="chat-input z-2" onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter a message..."
          value={userMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          required
        ></textarea>
        <button type="submit" className="fa fa-paper-plane"></button>
      </form>
    </div>
  );
};

export default Chatbot;
