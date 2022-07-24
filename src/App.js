import { useState } from "react";
import Index from "./components/Index";

function App() {
  const [isLoggedIn, setLoggedIn ] = useState(false);

  return (
    <>
      <Index isLoggedIn={true} setLoggedIn={setLoggedIn} />
    </>

  );
}

export default App;
