import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import { ScrollManager } from './Components/ScrollManager';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollManager />
			<App />
		</BrowserRouter>
	</StrictMode>,
);
