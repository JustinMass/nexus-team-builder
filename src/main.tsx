import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { validateCanonical } from './domain/validation';
try{validateCanonical();createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>)}catch{document.getElementById('root')!.textContent='The official lineup data could not be loaded. Please contact the maintainer.'}
