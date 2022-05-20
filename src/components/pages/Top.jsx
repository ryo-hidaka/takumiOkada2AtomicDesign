// import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondatyButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondatyButton onClick={onClickAdmin}>管理者ユーザ</SecondatyButton>
      <br />
      <br />
      <SecondatyButton onClick={onClickGeneral}>一般ユーザ</SecondatyButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
