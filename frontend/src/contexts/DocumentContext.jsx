/**
 * DocumentContext - Document state management
 * Handles document upload, conversion, and workflow state
 */

import React, { createContext, useContext, useReducer, useCallback } from 'react';

// Document workflow steps
export const WORKFLOW_STEPS = {
  UPLOAD: 'upload',           // Step 1: Upload document
  PROCESSING: 'processing',   // Step 2: Converting to Markdown
  WIZARD: 'wizard',           // Step 3: AI-guided style wizard
  EDITOR: 'editor',           // Step 4: Review/Edit markdown
  PREVIEW: 'preview',         // Step 5: Preview and export
};

// Supported file types
export const SUPPORTED_FILE_TYPES = {
  'application/pdf': { extension: '.pdf', name: 'PDF', icon: 'DocumentPdf' },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { 
    extension: '.docx', name: 'Word Document', icon: 'Document' 
  },
  'application/msword': { extension: '.doc', name: 'Word Document (Legacy)', icon: 'Document' },
  'application/vnd.google-apps.document': { extension: '', name: 'Google Docs', icon: 'Document' },
  'text/plain': { extension: '.txt', name: 'Text File', icon: 'Document' },
  'text/markdown': { extension: '.md', name: 'Markdown', icon: 'Code' },
  'application/rtf': { extension: '.rtf', name: 'Rich Text Format', icon: 'Document' },
  'application/vnd.oasis.opendocument.text': { extension: '.odt', name: 'OpenDocument', icon: 'Document' },
};

// Initial state
const initialState = {
  // Workflow
  currentStep: WORKFLOW_STEPS.UPLOAD,
  completedSteps: [],
  
  // Document
  originalFile: null,
  fileName: '',
  fileType: '',
  fileSize: 0,
  
  // Conversion
  isConverting: false,
  conversionProgress: 0,
  conversionError: null,
  
  // Content
  markdownContent: '',
  originalContent: '', // Keep original for reference
  
  // Report settings (from wizard)
  reportSettings: {
    documentType: '', // report, presentation, article, etc.
    tone: '',         // formal, casual, technical
    audience: '',     // executive, technical, general
    purpose: '',      // inform, persuade, document
    colorScheme: '',  // professional, vibrant, minimal
    layoutStyle: '',  // compact, spacious, balanced
    emphasis: [],     // data, narrative, visuals
    components: [],   // charts, tables, callouts, etc.
  },
  
  // AI Wizard
  wizardMessages: [],
  wizardCurrentQuestion: 0,
  wizardAnswers: {},
  
  // Output
  selectedEngine: 'typst',
  selectedTemplate: 'carbon-advanced',
  generatedPdf: null,
  outputPath: null,
};

// Action types
const ActionTypes = {
  SET_STEP: 'SET_STEP',
  SET_FILE: 'SET_FILE',
  START_CONVERSION: 'START_CONVERSION',
  UPDATE_CONVERSION_PROGRESS: 'UPDATE_CONVERSION_PROGRESS',
  CONVERSION_SUCCESS: 'CONVERSION_SUCCESS',
  CONVERSION_ERROR: 'CONVERSION_ERROR',
  SET_MARKDOWN: 'SET_MARKDOWN',
  UPDATE_REPORT_SETTINGS: 'UPDATE_REPORT_SETTINGS',
  ADD_WIZARD_MESSAGE: 'ADD_WIZARD_MESSAGE',
  SET_WIZARD_ANSWER: 'SET_WIZARD_ANSWER',
  NEXT_WIZARD_QUESTION: 'NEXT_WIZARD_QUESTION',
  SET_ENGINE: 'SET_ENGINE',
  SET_TEMPLATE: 'SET_TEMPLATE',
  SET_OUTPUT: 'SET_OUTPUT',
  RESET: 'RESET',
};

// Reducer
function documentReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
        completedSteps: state.completedSteps.includes(action.payload)
          ? state.completedSteps
          : [...state.completedSteps, state.currentStep],
      };

    case ActionTypes.SET_FILE:
      return {
        ...state,
        originalFile: action.payload.file,
        fileName: action.payload.name,
        fileType: action.payload.type,
        fileSize: action.payload.size,
      };

    case ActionTypes.START_CONVERSION:
      return {
        ...state,
        isConverting: true,
        conversionProgress: 0,
        conversionError: null,
      };

    case ActionTypes.UPDATE_CONVERSION_PROGRESS:
      return {
        ...state,
        conversionProgress: action.payload,
      };

    case ActionTypes.CONVERSION_SUCCESS:
      return {
        ...state,
        isConverting: false,
        conversionProgress: 100,
        markdownContent: action.payload.markdown,
        originalContent: action.payload.markdown,
        currentStep: WORKFLOW_STEPS.WIZARD,
      };

    case ActionTypes.CONVERSION_ERROR:
      return {
        ...state,
        isConverting: false,
        conversionError: action.payload,
      };

    case ActionTypes.SET_MARKDOWN:
      return {
        ...state,
        markdownContent: action.payload,
      };

    case ActionTypes.UPDATE_REPORT_SETTINGS:
      return {
        ...state,
        reportSettings: {
          ...state.reportSettings,
          ...action.payload,
        },
      };

    case ActionTypes.ADD_WIZARD_MESSAGE:
      return {
        ...state,
        wizardMessages: [...state.wizardMessages, action.payload],
      };

    case ActionTypes.SET_WIZARD_ANSWER:
      return {
        ...state,
        wizardAnswers: {
          ...state.wizardAnswers,
          [action.payload.questionId]: action.payload.answer,
        },
      };

    case ActionTypes.NEXT_WIZARD_QUESTION:
      return {
        ...state,
        wizardCurrentQuestion: state.wizardCurrentQuestion + 1,
      };

    case ActionTypes.SET_ENGINE:
      return {
        ...state,
        selectedEngine: action.payload,
      };

    case ActionTypes.SET_TEMPLATE:
      return {
        ...state,
        selectedTemplate: action.payload,
      };

    case ActionTypes.SET_OUTPUT:
      return {
        ...state,
        generatedPdf: action.payload.pdf,
        outputPath: action.payload.path,
      };

    case ActionTypes.RESET:
      return initialState;

    default:
      return state;
  }
}

// Context
const DocumentContext = createContext(null);

// Provider component
export function DocumentProvider({ children }) {
  const [state, dispatch] = useReducer(documentReducer, initialState);

  // Actions
  const setStep = useCallback((step) => {
    dispatch({ type: ActionTypes.SET_STEP, payload: step });
  }, []);

  const setFile = useCallback((file) => {
    dispatch({
      type: ActionTypes.SET_FILE,
      payload: {
        file,
        name: file.name,
        type: file.type,
        size: file.size,
      },
    });
  }, []);

  const convertDocument = useCallback(async (file) => {
    dispatch({ type: ActionTypes.START_CONVERSION });

    try {
      // Check if it's already markdown
      if (file.type === 'text/markdown' || file.name.endsWith('.md')) {
        const text = await file.text();
        dispatch({
          type: ActionTypes.CONVERSION_SUCCESS,
          payload: { markdown: text },
        });
        return;
      }

      // Check if it's plain text
      if (file.type === 'text/plain') {
        const text = await file.text();
        dispatch({
          type: ActionTypes.CONVERSION_SUCCESS,
          payload: { markdown: text },
        });
        return;
      }

      // For other formats, call the backend API (Marker)
      const formData = new FormData();
      formData.append('file', file);

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        dispatch({
          type: ActionTypes.UPDATE_CONVERSION_PROGRESS,
          payload: Math.min(state.conversionProgress + 10, 90),
        });
      }, 500);

      const response = await fetch('/api/convert/to-markdown', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const data = await response.json();
      dispatch({
        type: ActionTypes.CONVERSION_SUCCESS,
        payload: { markdown: data.markdown },
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.CONVERSION_ERROR,
        payload: error.message,
      });
    }
  }, [state.conversionProgress]);

  const setMarkdown = useCallback((content) => {
    dispatch({ type: ActionTypes.SET_MARKDOWN, payload: content });
  }, []);

  const updateReportSettings = useCallback((settings) => {
    dispatch({ type: ActionTypes.UPDATE_REPORT_SETTINGS, payload: settings });
  }, []);

  const addWizardMessage = useCallback((message) => {
    dispatch({ type: ActionTypes.ADD_WIZARD_MESSAGE, payload: message });
  }, []);

  const setWizardAnswer = useCallback((questionId, answer) => {
    dispatch({
      type: ActionTypes.SET_WIZARD_ANSWER,
      payload: { questionId, answer },
    });
  }, []);

  const nextWizardQuestion = useCallback(() => {
    dispatch({ type: ActionTypes.NEXT_WIZARD_QUESTION });
  }, []);

  const setEngine = useCallback((engine) => {
    dispatch({ type: ActionTypes.SET_ENGINE, payload: engine });
  }, []);

  const setTemplate = useCallback((template) => {
    dispatch({ type: ActionTypes.SET_TEMPLATE, payload: template });
  }, []);

  const setOutput = useCallback((pdf, path) => {
    dispatch({ type: ActionTypes.SET_OUTPUT, payload: { pdf, path } });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: ActionTypes.RESET });
  }, []);

  // Generate PDF based on settings
  const generatePdf = useCallback(async () => {
    try {
      const response = await fetch('/api/convert/to-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          markdown: state.markdownContent,
          engine: state.selectedEngine,
          template: state.selectedTemplate,
          settings: state.reportSettings,
        }),
      });

      if (!response.ok) {
        throw new Error('PDF generation failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      setOutput(blob, url);
      return url;
    } catch (error) {
      throw error;
    }
  }, [state.markdownContent, state.selectedEngine, state.selectedTemplate, state.reportSettings, setOutput]);

  const value = {
    // State
    ...state,
    
    // Computed
    isFileUploaded: !!state.originalFile,
    canProceedToWizard: state.markdownContent.length > 0,
    canGeneratePdf: state.markdownContent.length > 0 && Object.keys(state.reportSettings).length > 0,
    
    // Actions
    setStep,
    setFile,
    convertDocument,
    setMarkdown,
    updateReportSettings,
    addWizardMessage,
    setWizardAnswer,
    nextWizardQuestion,
    setEngine,
    setTemplate,
    setOutput,
    generatePdf,
    reset,
  };

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
}

// Hook
export function useDocument() {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocument must be used within a DocumentProvider');
  }
  return context;
}

export default DocumentContext;
