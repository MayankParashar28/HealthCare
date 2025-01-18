import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI health assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand your concern. While I can provide general information, please consult with a healthcare provider for medical advice.",
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">AI Health Assistant</h1>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] p-4 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
                <div className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;