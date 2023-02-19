import React from "react";
import "./style.css";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";

function App() {
  const { onToggleButton, tg } = useTelegram();
  React.useEffect(() => tg.ready(), []);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>toggle</button>;
    </div>
  );
}

export default App;
