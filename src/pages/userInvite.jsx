import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isNav } from "../management/features/navTrack/navTrackSlice";
import { UserInviteComp } from "../components/userInvite";
import { CompWrapper } from "../components/compWrappers";
import { useLocation } from "react-router-dom";

const UserInvite = () => {
  const { isFullNav } = useSelector((store) => store.navTrackStore);

  const location = useLocation();

  const dispatch = useDispatch();

  // MAKE THIS PAGE HAVE THE FULL NAV BAR ITEMS
  useEffect(() => {
    dispatch(isNav());
  }, [location.pathname]);

  return (
    <CompWrapper
      containerStyle={{
        width: "fit-content",
        margin: "4rem auto 2rem",
      }}
    >
      <UserInviteComp />
    </CompWrapper>
  );
};

export default UserInvite;
