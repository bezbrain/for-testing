import { Outlet } from "react-router-dom";
import { Nav } from "../components/sharedLayouts";
import { useSelector } from "react-redux";
import { AppNav } from "../components/sharedLayouts";

const SharedLayout = () => {
  const { isFullNav } = useSelector((store) => store.navTrackStore);

  return (
    <div>
      {isFullNav ? <AppNav /> : <Nav />}
      <Outlet />
    </div>
  );
};

export default SharedLayout;
