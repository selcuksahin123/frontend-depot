import {ReactElement} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {useAuthContext} from '../contexts/AuthContext/AuthContext'
import { LIST_VIEW } from '../config/paths';

export default function PrivateRoute(): ReactElement {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={`/${LIST_VIEW}`} />;
  }

  return <Outlet />;
}
