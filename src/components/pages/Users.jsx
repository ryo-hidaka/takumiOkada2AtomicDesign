import React /*useContext*/ from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondatyButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(30).keys()].map((val) => {
  return {
    id: val,
    name: `りょう-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaa@aaa.aaa",
    phone: "00-0000-0000",
    comany: {
      name: "aaa会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondatyButton onClick={onClickSwitch}>切り替え</SecondatyButton>
      <SUSerArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUSerArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUSerArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
