import React, { createContext, useState } from "react";
import { RecoilRoot } from "recoil";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
