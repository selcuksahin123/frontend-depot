import {ReactElement} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext/AuthContext';


export default function PrivateRoute(): ReactElement {
  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  }

  return (
      <Outlet/>
  );
}
