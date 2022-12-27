import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { user } from "../types/api/user";
type LoginUser = user & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUSer: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUSer] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUSer }}>
      {children}
    </LoginUserContext.Provider>
  );
};
