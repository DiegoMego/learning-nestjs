import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Unauthenticated() {
  const location = useLocation();
  const navitate = useNavigate();
  useEffect(() => {
    localStorage.setItem('authenticated', 'false');
    setTimeout(() => {
      navitate(
        '/auth/login',
        {
          replace: true,
          state: {
            from: location,
          },
        },
      );
    }, 2000);
  }, []);

  return (
    <h2>Unauthenticated</h2>
  );
}

export default Unauthenticated;
