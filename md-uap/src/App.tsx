import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './App.css';

interface Message {
  user: string;
  text: string;
  timestamp: string;
}

function App() {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message) {
      const newMessage: Message = {
        user: 'John Doe',
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-green-700 text-white w-1/4">
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Channels</h1>
          <ul>
            <li className="text-gray-300 hover:text-white cursor-pointer mb-2">General</li>
            <li className="text-gray-300 hover:text-white cursor-pointer mb-2">Random</li>
            <li className="text-gray-300 hover:text-white cursor-pointer mb-2">Tech</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-green-50">
        {/* Navbar */}
        <nav className="bg-green-200 px-6 py-4 shadow">
          {/* Navbar content */}
          <h1 className="text-2xl font-bold text-green-900">General</h1>
        </nav>

        {/* Chat Messages */}
        <div className="p-4">
          {messages.map((msg: Message, index: number) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-400"></div>
              <div className="ml-4">
                <h2 className="text-lg font-bold">{msg.user}</h2>
                <p className="text-gray-600">{msg.timestamp}</p>
              </div>
              <p className="ml-auto text-gray-700">{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="bg-white p-4 shadow">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="mt-2 px-4 py-2 bg-green-700 text-white rounded-lg font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
