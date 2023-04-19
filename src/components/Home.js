import React from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const Home = () => {
  return (
    <div>
      <Button onClick={() => signOut(auth)}>Sign Out</Button>;
    </div>
  );
};
