import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsDetail = () => {
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/${id}`);
        setNewsItem(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching news item:', error);
        setError('Failed to fetch news item. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{error}</div>;
  if (!newsItem) return <div>{t('newsNotFound')}</div>;

  return (
    <div>
      <h1>{newsItem.analysis.title}</h1>
      <p>{t('publishedOn')}: {new Date(newsItem.published_on).toLocaleString()}</p>
      <p>{t('source')}: {newsItem.source}</p>
      <div dangerouslySetInnerHTML={{ __html: newsItem.analysis.content }} />
      <h2>{t('relatedCryptos')}</h2>
      <ul>
        {newsItem.analysis.relatedCryptocurrencies.map((crypto, index) => (
          <li key={index}>
            {crypto.name}: {t(crypto.direction)}
          </li>
        ))}
      </ul>
      <h2>{t('originalNews')}</h2>
      <h3>{newsItem.title}</h3>
      <p>{newsItem.body}</p>
    </div>
  );
};

export default NewsDetail;