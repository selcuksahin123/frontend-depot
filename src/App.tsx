import "./index.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider} from '@mui/material';
import PublicRoute from "./router/PublicRoute";
import Login from './views/Login';
import { HOME, LIST_VIEW } from "./config/paths";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";
import PrivateRoute from "./router/PrivateRoute";
import theme from "./theme/theme";
import List from "./views/ListView/List";

function App(){
  return (
    <AuthContextProvider>
       <ThemeProvider theme={theme}>
    <Routes>
      {/* public routes */}
      <Route path={HOME} element={<PublicRoute/>}>
        <Route index element={<Login/>} />
      </Route>
      {/* prvate routes */}
      <Route path={LIST_VIEW} element={<PrivateRoute/>}>
        <Route index element={<List/>}/>
      </Route>
    </Routes>
       </ThemeProvider>
    </AuthContextProvider>
  )
}

export default App;