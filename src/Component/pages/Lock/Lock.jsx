import React from "react";
import LockBanner from "../../../Lockscreen/LockBanner/LockBanner";
import LookSkills from "../../../Lockscreen/LookSkills/LookSkills";
import { Snackbar } from "@mui/material";
import SnakeCanvas from "../../../Lockscreen/SnakeCanvas/SnakeCanvas";
import Lockedcontact from "../../../Lockscreen/Lockedcontact/Lockedcontact";


const Lock = () => {
  return (
    <div>
      <LockBanner />
      <LookSkills/>
       <Lockedcontact/>
        <SnakeCanvas/>
     
    </div>
  );
};

export default Lock;