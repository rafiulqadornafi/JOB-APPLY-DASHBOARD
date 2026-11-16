import {createContext,useContext} from "react";import type {ReactNode} from "react";import {useAuthStore} from "../store/authStore";
const AuthContext=createContext({user:useAuthStore.getState().user});
export function AuthProvider({children}:{children:ReactNode}){const user=useAuthStore(s=>s.user);return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;}
export const useAuth=()=>useContext(AuthContext);