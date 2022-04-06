//This Component is created to avoid require cycle error
import React, { createContext } from 'react';

interface ctx {
  myState: Boolean;
  setMyState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<ctx | null>(null);
