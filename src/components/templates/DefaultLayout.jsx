import { Footer } from "../atoms/layOut/Footer";
import { Header } from "../atoms/layOut/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
