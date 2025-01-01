import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { ChatMessage } from '../types/analyzer';

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input
    };

    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: `Thank you for your question! I'll help you improve your website based on our analysis. ${input}`
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">AI Assistant</h2>
      </div>
      
      <div className="h-[300px] overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-100 ml-auto max-w-[80%]'
                : 'bg-gray-100 mr-auto max-w-[80%]'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about improving your website..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}