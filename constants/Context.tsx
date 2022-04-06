//This Component is created to avoid require cycle error
import { createContext } from 'react';

interface ctx {
  signIn: void | any;
  signOut: void | any;
}

export const AuthContext = createContext<ctx | null>(null);
