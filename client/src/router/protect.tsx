import React from 'react';
import { Outlet } from 'react-router-dom';
import Unauthenticated from '../views/error/unauthenticated';

export default function Protect({ token }: { token: string }) {
  if (!token) return <Unauthenticated />;
  return <Outlet />;
}
