import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthenticated = ({location}) => {
  const navitate = useNavigate();
  useEffect(_ => {
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