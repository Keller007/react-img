import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;
function App() {
  React.useEffect(() => tg.ready(), []);
  const onClose = () => {
    tg.close();
  };
  return <button onClick={onClose}>Закрыть</button>;
}

export default App;
