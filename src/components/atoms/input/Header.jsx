import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Header>
      <Link to="/">HOME</Link>
      <Link to="/users">USERS</Link>
    </Header>
  );
};
