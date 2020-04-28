import { useState } from 'react';

const getRandomQuote = async () => {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  const quote = `${data.content} — ${data.author}`;

  return quote;
};

const useQuote = () => {
  const [dailyQuote, setDailyQuote] = useState('');

  const handleDayChange = async (day: number) => {
    const d = new Date();
    const today = d.getDay();
    const isNewDay = today !== day;

    if (!isNewDay) {
      const quote = localStorage.getItem('dailyQuote');
      return setDailyQuote(quote as string);
    }

    const quote = await getRandomQuote();
    localStorage.setItem('dailyQuote', quote);
    setDailyQuote(quote);
  };

  const init = async () => {
    const d = new Date();
    const day = d.getDay().toString();
    const quote = await getRandomQuote();

    localStorage.setItem('currentDay', day);
    localStorage.setItem('dailyQuote', quote);
    setDailyQuote(quote);
  };

  return { handleDayChange, init, dailyQuote };
};

export default useQuote;