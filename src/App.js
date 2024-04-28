import { Login } from "./components/Login";
import { Main } from "./components/Main";
import { useLoginForm } from "./hooks/useLoginForm";
import { useState } from "react";

function App() {
  const { handleChange, handleSubmit, login, isLoggedIn,handleLogout } = useLoginForm();
  const [activeButton, setActiveButton] = useState(1);
  
  return (
    <div>
      {isLoggedIn ? (
        <Main
          handleButtonClick={setActiveButton}
          activeButton={activeButton}
          handleLogout={handleLogout}
        />
      ) : (
        <Login
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          login={login}
        />
      )}
    </div>
  );
}

export default App;
