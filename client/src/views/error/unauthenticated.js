import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Unauthenticated = _ => {
  const location = useLocation();
  const navitate = useNavigate();
  useEffect(_ => {
    localStorage.setItem('authenticated', false);
    setTimeout(_ => {
      navitate('/auth/login',
      {
        replace: true,
        state: {
          from: location,
        },
      });
    }, 2000)
  }, [])

  return (
    <h2>Unauthenticated</h2>
  );
}

export default Unauthenticated;