import React, { useState, useCallback } from 'react';
import {
  Theme,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Content,
  Grid,
  Column,
  Button,
  Dropdown,
  Toggle,
  TextArea,
  Tag,
  InlineNotification,
  Loading,
  Modal,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tile,
  ClickableTile,
} from '@carbon/react';

import {
  Document,
  DocumentPdf,
  Settings,
  Light,
  Asleep,
  Upload,
  Play,
  Chat,
  Help,
  Close,
  Download,
  Renew,
  Code,
  Template,
  ChartBar,
  ColorPalette,
  TextFont,
  Grid as GridIcon,
  Idea,
  Send,
  User,
  Bot,
} from '@carbon/icons-react';

import './styles/index.scss';

// Sample markdown content
const sampleMarkdown = `---
title: Sample Document
subtitle: Carbon Design System Demo
author: Your Name
date: 2025-01-15
---

# Introduction

This is a **sample document** demonstrating the Carbon Design System integration with Markdown to PDF conversion.

## Features

- Modern Typography with IBM Plex fonts
- Professional color palette
- Responsive layouts
- Data visualization components

## Code Example

\`\`\`javascript
const hello = () => {
  console.log('Hello, Carbon!');
};
\`\`\`

> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

## Conclusion

Start creating beautiful documents today!
`;

// Engine options
const engineOptions = [
  { id: 'typst', text: 'Typst (Hızlı)' },
  { id: 'quarto', text: 'Quarto (LaTeX)' },
  { id: 'both', text: 'Her İkisi' },
];

// Template options
const templateOptions = [
  { id: 'carbon-advanced', text: 'Carbon Advanced' },
  { id: 'carbon-template', text: 'Carbon Basic' },
  { id: 'carbon-theme-g100', text: 'Carbon G100 (Dark)' },
];

function App() {
  // State
  const [theme, setTheme] = useState('white');
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [markdown, setMarkdown] = useState(sampleMarkdown);
  const [selectedEngine, setSelectedEngine] = useState(engineOptions[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(templateOptions[0]);
  const [isConverting, setIsConverting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      content: 'Merhaba! Ben Carbon Design danışmanınızım. Markdown dokümanınız için tasarım önerileri sunabilirim. Ne tür bir doküman hazırlıyorsunuz?'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [notification, setNotification] = useState(null);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'white' ? 'g100' : 'white');
  };

  // Handle file upload
  const handleFileUpload = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
        setNotification({
          kind: 'success',
          title: 'Dosya Yüklendi',
          subtitle: `${file.name} başarıyla yüklendi.`
        });
      };
      reader.readAsText(file);
    }
  }, []);

  // Handle conversion
  const handleConvert = async () => {
    setIsConverting(true);
    setNotification(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setNotification({
        kind: 'success',
        title: 'Dönüştürme Başarılı',
        subtitle: `PDF ${selectedEngine.text} motoru kullanılarak oluşturuldu.`
      });
    } catch (error) {
      setNotification({
        kind: 'error',
        title: 'Dönüştürme Hatası',
        subtitle: error.message
      });
    } finally {
      setIsConverting(false);
    }
  };

  // Handle chat send
  const handleChatSend = async () => {
    if (!chatInput.trim()) return;

    const userMessage = { type: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        'Bu içerik için **stat-tile** bileşeni kullanmanızı öneririm. Önemli metrikleri vurgulamak için idealdir.',
        'Görsel hiyerarşi oluşturmak için Carbon tipografi ölçeğindeki heading-03 ve body-02 stillerini kullanabilirsiniz.',
        'Veri görselleştirmesi için **bar-chart** veya **donut-stat** bileşenlerini değerlendirebilirsiniz.',
        'Bu bölüm için **callout** veya **notification** bileşeni uygun olabilir. Önemli bilgileri vurgulamak için kullanılır.',
        'Gray-60 ile blue-60 renk kombinasyonu profesyonel bir görünüm sağlar.'
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setChatMessages(prev => [...prev, { type: 'ai', content: randomResponse }]);
    }, 1000);
  };

  return (
    <Theme theme={theme}>
      <div className="page-container">
        {/* Header */}
        <Header aria-label="Carbon PDF Converter">
          <HeaderName href="#" prefix="Carbon">
            PDF Converter
          </HeaderName>
          
          <HeaderNavigation aria-label="Main navigation">
            <HeaderMenuItem href="#">Editör</HeaderMenuItem>
            <HeaderMenuItem href="#">Şablonlar</HeaderMenuItem>
            <HeaderMenuItem href="#">Dokümanlar</HeaderMenuItem>
          </HeaderNavigation>

          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="AI Danışman"
              onClick={() => setShowAdvisor(!showAdvisor)}
              isActive={showAdvisor}
            >
              <Chat size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Tema Değiştir"
              onClick={toggleTheme}
            >
              {theme === 'white' ? <Asleep size={20} /> : <Light size={20} />}
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Ayarlar"
              onClick={() => setShowSettings(true)}
            >
              <Settings size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        {/* Main Content */}
        <div className="main-content">
          {/* Settings Sidebar */}
          <aside className="settings-sidebar">
            <div className="settings-section">
              <div className="settings-section__title">Dönüştürme Motoru</div>
              <Dropdown
                id="engine-select"
                items={engineOptions}
                selectedItem={selectedEngine}
                onChange={({ selectedItem }) => setSelectedEngine(selectedItem)}
                label="Motor Seçin"
                titleText=""
              />
            </div>

            <div className="settings-section">
              <div className="settings-section__title">Şablon</div>
              <Dropdown
                id="template-select"
                items={templateOptions}
                selectedItem={selectedTemplate}
                onChange={({ selectedItem }) => setSelectedTemplate(selectedItem)}
                label="Şablon Seçin"
                titleText=""
              />
            </div>

            <div className="settings-section">
              <div className="settings-section__title">Dosya Yükle</div>
              <div className="file-upload-area">
                <Upload size={32} className="file-upload-area__icon" />
                <p className="file-upload-area__text">
                  Dosya sürükleyin veya{' '}
                  <label className="file-upload-area__link">
                    gözatın
                    <input
                      type="file"
                      accept=".md,.markdown,.txt"
                      onChange={handleFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </p>
              </div>
            </div>

            <div className="settings-section">
              <div className="settings-section__title">İşlemler</div>
              <Button
                kind="primary"
                size="lg"
                renderIcon={Play}
                onClick={handleConvert}
                disabled={isConverting}
                style={{ width: '100%', marginBottom: '0.5rem' }}
              >
                {isConverting ? 'Dönüştürülüyor...' : 'PDF Oluştur'}
              </Button>
              <Button
                kind="secondary"
                size="lg"
                renderIcon={Download}
                style={{ width: '100%' }}
              >
                PDF İndir
              </Button>
            </div>

            <div className="settings-section">
              <div className="settings-section__title">Hızlı Erişim</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Tag type="blue" renderIcon={ColorPalette}>Renkler</Tag>
                <Tag type="purple" renderIcon={TextFont}>Tipografi</Tag>
                <Tag type="cyan" renderIcon={ChartBar}>Grafikler</Tag>
                <Tag type="teal" renderIcon={GridIcon}>Grid</Tag>
                <Tag type="green" renderIcon={Template}>Bileşenler</Tag>
              </div>
            </div>
          </aside>

          {/* Editor Panel */}
          <div className="editor-panel panel">
            <div className="panel__header">
              <h3>
                <Code size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Markdown Editör
              </h3>
              <p>Dokümanınızı düzenleyin</p>
            </div>
            <div className="panel__content markdown-editor">
              <TextArea
                id="markdown-editor"
                labelText="Markdown İçeriği"
                hideLabel
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Markdown içeriğinizi buraya yazın..."
                rows={30}
                style={{ 
                  height: '100%', 
                  fontFamily: 'IBM Plex Mono',
                  resize: 'none'
                }}
              />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="preview-panel panel">
            <div className="panel__header">
              <h3>
                <DocumentPdf size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                PDF Önizleme
              </h3>
              <p>Çıktı önizlemesi</p>
            </div>
            <div className="pdf-preview">
              <div className="pdf-preview__container">
                <div className="pdf-preview__document">
                  {isConverting ? (
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      height: '300px'
                    }}>
                      <Loading withOverlay={false} description="PDF oluşturuluyor..." />
                    </div>
                  ) : (
                    <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'IBM Plex Sans' }}>
                      {/* Simple markdown preview */}
                      <div dangerouslySetInnerHTML={{ 
                        __html: markdown
                          .replace(/^---[\s\S]*?---/m, '')
                          .replace(/^# (.+)$/gm, '<h1 style="font-size: 2.5rem; font-weight: 300; margin-bottom: 1rem;">$1</h1>')
                          .replace(/^## (.+)$/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 1rem;">$1</h2>')
                          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          .replace(/`([^`]+)`/g, '<code style="background: #f4f4f4; padding: 0.125rem 0.25rem; font-family: IBM Plex Mono;">$1</code>')
                          .replace(/^> (.+)$/gm, '<blockquote style="border-left: 3px solid #0f62fe; padding-left: 1rem; color: #525252; margin: 1rem 0;">$1</blockquote>')
                          .replace(/^- (.+)$/gm, '<li style="margin-left: 1.5rem;">$1</li>')
                          .replace(/\n/g, '<br/>')
                      }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* AI Advisor Panel */}
          {showAdvisor && (
            <aside className="advisor-panel">
              <div className="panel__header">
                <h3>
                  <Idea size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Carbon AI Danışman
                </h3>
                <p>Tasarım önerileri alın</p>
              </div>
              
              <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`chat-message chat-message--${msg.type}`}>
                    <div className={`chat-message__avatar chat-message__avatar--${msg.type}`}>
                      {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className="chat-message__content">
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-input">
                <TextArea
                  id="chat-input"
                  labelText="Soru"
                  hideLabel
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Tasarım sorunuzu yazın..."
                  rows={2}
                  style={{ flex: 1 }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleChatSend();
                    }
                  }}
                />
                <Button
                  kind="primary"
                  size="sm"
                  hasIconOnly
                  renderIcon={Send}
                  iconDescription="Gönder"
                  onClick={handleChatSend}
                />
              </div>
            </aside>
          )}
        </div>

        {/* Notifications */}
        {notification && (
          <div style={{ 
            position: 'fixed', 
            bottom: '1rem', 
            right: '1rem', 
            zIndex: 9999 
          }}>
            <InlineNotification
              kind={notification.kind}
              title={notification.title}
              subtitle={notification.subtitle}
              onCloseButtonClick={() => setNotification(null)}
            />
          </div>
        )}

        {/* Settings Modal */}
        <Modal
          open={showSettings}
          modalHeading="Ayarlar"
          primaryButtonText="Kaydet"
          secondaryButtonText="İptal"
          onRequestClose={() => setShowSettings(false)}
          onRequestSubmit={() => setShowSettings(false)}
        >
          <Tabs>
            <TabList aria-label="Settings tabs">
              <Tab>Genel</Tab>
              <Tab>Görünüm</Tab>
              <Tab>Dönüştürme</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div style={{ marginTop: '1rem' }}>
                  <Toggle
                    id="auto-save"
                    labelText="Otomatik Kaydetme"
                    defaultToggled
                  />
                  <br />
                  <Toggle
                    id="live-preview"
                    labelText="Canlı Önizleme"
                    defaultToggled
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div style={{ marginTop: '1rem' }}>
                  <Toggle
                    id="dark-mode"
                    labelText="Karanlık Mod"
                    toggled={theme === 'g100'}
                    onToggle={toggleTheme}
                  />
                  <br />
                  <Toggle
                    id="show-advisor"
                    labelText="AI Danışmanı Göster"
                    toggled={showAdvisor}
                    onToggle={() => setShowAdvisor(!showAdvisor)}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div style={{ marginTop: '1rem' }}>
                  <Dropdown
                    id="default-engine"
                    items={engineOptions}
                    selectedItem={selectedEngine}
                    onChange={({ selectedItem }) => setSelectedEngine(selectedItem)}
                    label="Varsayılan Motor"
                    titleText="Varsayılan Dönüştürme Motoru"
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Modal>
      </div>
    </Theme>
  );
}

export default App;
