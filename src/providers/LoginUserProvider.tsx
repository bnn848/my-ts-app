import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

/**
 * ログインフラグに管理者フラグを追加する
 * useStateの型定義の際にも使いまわせるようにインスタンス化しておく
 */
type LoginUser = User & {isAdmin: boolean}

export type LoginUserContextType = {
  // loginUser: User & {isAdmin: boolean} | null;
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>

}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode}) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser}}>
      {children}
    </LoginUserContext.Provider>
  )
}
