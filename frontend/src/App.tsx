import { useState } from "react";
import MainApp from "./MainApp";
import Global from "./Styles/Global";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Global />
      <MainApp />
    </>
  );
}

export default App;
