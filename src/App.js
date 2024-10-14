import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Analytics } from '@vercel/analytics/react';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button onClick={() => changeLanguage('en')}>English</button>
            </li>
            <li>
              <button onClick={() => changeLanguage('zh')}>中文</button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;