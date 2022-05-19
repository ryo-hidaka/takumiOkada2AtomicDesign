import { PrimaryButton } from "./components/atoms/button/PrumaryButton";
import { SecondatyButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondatyButton>検索</SecondatyButton>
      <br />
      <SearchInput />
    </div>
  );
}
