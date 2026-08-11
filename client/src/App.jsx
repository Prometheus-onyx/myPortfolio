import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App
