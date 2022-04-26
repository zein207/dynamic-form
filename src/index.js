import React from 'react';
import ReactDOM from 'react-dom/client';
import FieldsProvider from './contexts/FieldsProvider';
import { DynamicFormApp } from './DynamicFormApp';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FieldsProvider>
    <DynamicFormApp />
  </FieldsProvider>
);
