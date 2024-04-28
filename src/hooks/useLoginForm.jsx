import { useState, useEffect } from "react";

const LOGIN_KEY = "LOGIN_STATE";

export function useLoginForm() {
  // TODO: Add formik for form validation
  const [login, setLogin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = window.localStorage.getItem(LOGIN_KEY);
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem(LOGIN_KEY, login);
    if (login) {
      setIsLoggedIn(true);
    }
  };
  const handleLogout = () => {
    window.localStorage.removeItem(LOGIN_KEY);
    setIsLoggedIn(false);
  };
  return { handleChange, handleSubmit, login, isLoggedIn, handleLogout };
}
