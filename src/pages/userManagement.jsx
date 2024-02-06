import React, { useEffect } from "react";
import { CompWrapper } from "../components/compWrappers";
import { isNav } from "../management/features/navTrack/navTrackSlice";
import { useSelector, useDispatch } from "react-redux";
import UserMgtHeader from "../components/userMgt/userMgtHeader";
import { Users } from "../components/userMgt";
import { useLocation } from "react-router-dom";

const UserManagement = () => {
  const { isFullNav } = useSelector((store) => store.navTrackStore);

  const dispatch = useDispatch();
  const location = useLocation();

  // MAKE THIS PAGE HAVE THE FULL NAV BAR ITEMS
  useEffect(() => {
    dispatch(isNav());
  }, [location.pathname]);

  return (
    <CompWrapper>
      <UserMgtHeader />
      <Users />
    </CompWrapper>
  );
};

export default UserManagement;
