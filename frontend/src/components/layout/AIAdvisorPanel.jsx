/**
 * AIAdvisorPanel Component
 * 
 * Carbon Design AI advisor chat panel.
 * Provides design recommendations and component suggestions.
 */

import React, { memo, useState, useCallback } from 'react';
import { TextArea, Button } from '@carbon/react';
import { Idea, Send, User, Bot } from '@carbon/icons-react';

// AI response suggestions
const AI_RESPONSES = [
  'Bu içerik için **stat-tile** bileşeni kullanmanızı öneririm. Önemli metrikleri vurgulamak için idealdir.',
  'Görsel hiyerarşi oluşturmak için Carbon tipografi ölçeğindeki heading-03 ve body-02 stillerini kullanabilirsiniz.',
  'Veri görselleştirmesi için **bar-chart** veya **donut-stat** bileşenlerini değerlendirebilirsiniz.',
  'Bu bölüm için **callout** veya **notification** bileşeni uygun olabilir. Önemli bilgileri vurgulamak için kullanılır.',
  'Gray-60 ile blue-60 renk kombinasyonu profesyonel bir görünüm sağlar.',
  'Tablo verileri için **data-table** bileşenini kullanabilirsiniz. Sıralama ve filtreleme özellikleri içerir.',
  'Zaman çizelgesi gösterimi için **timeline-item** bileşenini öneririm.',
  'Karşılaştırma içeriği için **comparison-table** veya **comparison-bars** kullanabilirsiniz.',
];

function AIAdvisorPanel({ isOpen = true }) {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Merhaba! Ben Carbon Design danışmanınızım. Markdown dokümanınız için tasarım önerileri sunabilirim. Ne tür bir doküman hazırlıyorsunuz?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Handle message send
  const handleSend = useCallback(() => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { type: 'user', content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
      setMessages((prev) => [...prev, { type: 'ai', content: randomResponse }]);
    }, 800);
  }, [inputValue]);

  // Handle Enter key
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  if (!isOpen) return null;

  return (
    <aside className="advisor-panel" aria-label="AI Tasarım Danışmanı">
      {/* Header */}
      <div className="panel__header">
        <h3>
          <Idea size={16} className="panel__header-icon" aria-hidden="true" />
          Carbon AI Danışman
        </h3>
        <p>Tasarım önerileri alın</p>
      </div>

      {/* Messages */}
      <div 
        className="chat-messages" 
        role="log" 
        aria-live="polite" 
        aria-label="Sohbet mesajları"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message chat-message--${msg.type}`}
          >
            <div 
              className={`chat-message__avatar chat-message__avatar--${msg.type}`}
              aria-hidden="true"
            >
              {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className="chat-message__content">
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <TextArea
          id="chat-input"
          labelText="Tasarım sorusu"
          hideLabel
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Tasarım sorunuzu yazın..."
          rows={2}
          className="chat-input__textarea"
        />
        <Button
          kind="primary"
          size="sm"
          hasIconOnly
          renderIcon={Send}
          iconDescription="Gönder"
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="chat-input__button"
        />
      </div>
    </aside>
  );
}

export default memo(AIAdvisorPanel);
