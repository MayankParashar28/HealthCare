import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

function HealthchatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your healthcare assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "I understand your concern. While I can provide general information, please consult with a healthcare provider for medical advice.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg h-[500px] flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">Healthcare Assistant</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HealthchatBot;