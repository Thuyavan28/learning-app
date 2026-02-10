import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'

console.log('Mounting React Application...');
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
  console.log('React Application Mounted Successfully');
} catch (error: any) {
  console.error('React Mount Error:', error);
  document.body.innerHTML += `<div style="color:red;padding:20px;font-size:20px;background:white">React Error: ${error.message}</div>`;
}
