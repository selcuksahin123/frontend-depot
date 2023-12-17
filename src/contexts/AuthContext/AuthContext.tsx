import {
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
  ReactElement,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";
import { MY_AUTH_APP } from "../../const/localStorageAuthKey";
import { LOGIN } from "../../const/backend";
import { useNavigate } from "react-router-dom";
import { LIST_VIEW } from "../../config/paths";

export interface IUserContext {
  login: ({ email, password }: LoginArguments) => void;
  logout: () => void;
  isAuthenticated: null | string;
}
const AuthContext = createContext<IUserContext>({
  login: () => {},
  logout: () => {},
  isAuthenticated: null,
});

type Props = {
  children: ReactNode;
};

type LoginArguments = {
  email: string;
  password: string;
};

export default function AuthContextProvider({ children }: Props): ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(
    window.localStorage.getItem(MY_AUTH_APP) ?? null
  );
  const navigate = useNavigate();
  const login = useCallback(
    async function ({ email, password }: LoginArguments) {
      const response = await fetch(`${LOGIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
      if (response.status === 200) {
        const jsonResponse = await response.json();
        window.localStorage.setItem(MY_AUTH_APP, jsonResponse?.jwt);
        toast.success("Logged in successfully");
        setIsAuthenticated(jsonResponse?.jwt);
        navigate(`${LIST_VIEW}`);
      } else {
        toast.error("Login failed");
        throw new Error("Login failed");
      }
    },
    [navigate]
  );

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    toast.success("Logged out successfully");
    setIsAuthenticated(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): IUserContext {
  return useContext(AuthContext);
}
