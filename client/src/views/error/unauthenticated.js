import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthenticated = _ => {
  const navitate = useNavigate();
  useEffect(_ => {
    setTimeout(_ => {
      navitate('/auth/login');
    }, 2000)
  }, [])

  return (
    <h2>Unauthenticated</h2>
  );
}

export default Unauthenticated;