/**
 * AppSidebar Component
 * 
 * Settings sidebar with conversion options.
 * Includes engine selection, template selection, file upload, and quick actions.
 */

import React, { memo, useCallback } from 'react';
import { Button, Dropdown, Tag } from '@carbon/react';
import {
  Upload,
  Play,
  Download,
  ColorPalette,
  TextFont,
  ChartBar,
  Grid as GridIcon,
  Template,
} from '@carbon/icons-react';

// Engine options
const ENGINE_OPTIONS = [
  { id: 'typst', text: 'Typst (Hızlı)' },
  { id: 'quarto', text: 'Quarto (LaTeX)' },
  { id: 'both', text: 'Her İkisi' },
];

// Template options
const TEMPLATE_OPTIONS = [
  { id: 'carbon-advanced', text: 'Carbon Advanced' },
  { id: 'carbon-template', text: 'Carbon Basic' },
  { id: 'carbon-theme-g100', text: 'Carbon G100 (Dark)' },
];

function AppSidebar({
  selectedEngine,
  onEngineChange,
  selectedTemplate,
  onTemplateChange,
  onFileUpload,
  onConvert,
  onDownload,
  isConverting = false,
}) {
  // Handle file input change
  const handleFileChange = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload?.(file);
    }
  }, [onFileUpload]);

  return (
    <aside className="settings-sidebar" aria-label="Dönüştürme ayarları">
      {/* Engine Selection */}
      <div className="settings-section">
        <div className="settings-section__title">Dönüştürme Motoru</div>
        <Dropdown
          id="engine-select"
          items={ENGINE_OPTIONS}
          selectedItem={selectedEngine}
          onChange={({ selectedItem }) => onEngineChange?.(selectedItem)}
          label="Motor Seçin"
          titleText=""
        />
      </div>

      {/* Template Selection */}
      <div className="settings-section">
        <div className="settings-section__title">Şablon</div>
        <Dropdown
          id="template-select"
          items={TEMPLATE_OPTIONS}
          selectedItem={selectedTemplate}
          onChange={({ selectedItem }) => onTemplateChange?.(selectedItem)}
          label="Şablon Seçin"
          titleText=""
        />
      </div>

      {/* File Upload */}
      <div className="settings-section">
        <div className="settings-section__title">Dosya Yükle</div>
        <div className="file-upload-area" role="button" tabIndex={0}>
          <Upload size={32} className="file-upload-area__icon" aria-hidden="true" />
          <p className="file-upload-area__text">
            Dosya sürükleyin veya{' '}
            <label className="file-upload-area__link">
              gözatın
              <input
                type="file"
                accept=".md,.markdown,.txt"
                onChange={handleFileChange}
                className="visually-hidden"
                aria-label="Markdown dosyası seçin"
              />
            </label>
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="settings-section">
        <div className="settings-section__title">İşlemler</div>
        <Button
          kind="primary"
          size="lg"
          renderIcon={Play}
          onClick={onConvert}
          disabled={isConverting}
          className="action-button action-button--primary"
        >
          {isConverting ? 'Dönüştürülüyor...' : 'PDF Oluştur'}
        </Button>
        <Button
          kind="secondary"
          size="lg"
          renderIcon={Download}
          onClick={onDownload}
          className="action-button action-button--secondary"
        >
          PDF İndir
        </Button>
      </div>

      {/* Quick Access Tags */}
      <div className="settings-section">
        <div className="settings-section__title">Hızlı Erişim</div>
        <div className="quick-access-tags">
          <Tag type="blue" renderIcon={ColorPalette}>Renkler</Tag>
          <Tag type="purple" renderIcon={TextFont}>Tipografi</Tag>
          <Tag type="cyan" renderIcon={ChartBar}>Grafikler</Tag>
          <Tag type="teal" renderIcon={GridIcon}>Grid</Tag>
          <Tag type="green" renderIcon={Template}>Bileşenler</Tag>
        </div>
      </div>
    </aside>
  );
}

export default memo(AppSidebar);

// Export options for use in parent component
export { ENGINE_OPTIONS, TEMPLATE_OPTIONS };
