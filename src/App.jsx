import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import WebPage from './pages/WebPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {page === 'home' && <HomePage />}
      {page === 'web' && <WebPage />}
      {page === 'contact' && <ContactPage />}
    </Layout>
  );
}

export default App;
