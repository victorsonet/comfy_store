import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
}
export default HomeLayout;
