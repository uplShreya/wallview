import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./Drawer.module.css";

function SidenavLeft() {
  const [open, setOpen] = useState(true);
  const hide = () => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      {!open && <div className={styles.SidenavLeftmain}></div>}
      <div
        onClick={() => {
          hide();
        }}
      >
        <p>click me</p>
      </div>
    </div>
  );
}

export default SidenavLeft;
