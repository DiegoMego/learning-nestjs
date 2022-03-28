import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Unauthenticated from "../views/error/unauthenticated";
import api from '../api/index';

export default function Protect({ token }) {
  const location = useLocation();

  useEffect(async _ => {
    if (token) {
      try {
        await api.auth.verify();
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);

  if (!token) return <Unauthenticated location={location}/>
  return <Outlet />;
}