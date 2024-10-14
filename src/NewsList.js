import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news`);
        setNews(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{t('latestNews')}</h1>
      {news.length === 0 ? (
        <p>{t('noNewsAvailable')}</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item._id}>
              <Link to={`/news/${item._id}`}>
                <h2>{item.analysis.title}</h2>
              </Link>
              <p>{t('relatedCryptos')}:</p>
              <ul>
                {item.analysis.relatedCryptocurrencies.map((crypto, index) => (
                  <li key={index}>
                    {crypto.name}: {t(crypto.direction)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;