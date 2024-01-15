import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <nav>
        <p>Login</p>
        <h2>Navbar</h2>
      </nav>
      <Outlet />
    </div>
  );
}
export default HomeLayout;
