import { useEffect, useState } from "react";
import "./App.css";
import Progressbar from "./components/Progressbar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    let timerId = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
    if (value >= 100) {
      clearInterval(timerId);
    }
  }, []);
  return (
    <div className="app">
      <span>Progress Bar</span>
      <Progressbar
        onComplete={() => setSuccess(true)}
        value={value}
      />
      <span>{success ? "Complete" : "Loading"}</span>
    </div>
  );
}

export default App;
