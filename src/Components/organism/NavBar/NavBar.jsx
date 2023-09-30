import React from "react";
import { useState } from "react";
import styles from "./NavBar.module.css";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function NavBar() {
  const [star, setStar] = useState(true);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.leftside}>
          <Button variant="text">Kanban Board</Button>
          {star ? (
            <Button
              onClick={() => {
                setStar(!star);
              }}
            >
              <StarBorderIcon />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setStar(!star);
              }}
            >
              <StarIcon />
            </Button>
          )}
          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<PeopleIcon />}
          >
            Workspace Visible
          </Button>
        </div>
        <div className={styles.rightside}>
          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<RocketLaunchIcon />}
          >
            Power-Ups
          </Button>

          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<FlashOnIcon />}
          >
            Automation
          </Button>
          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<FilterListOutlinedIcon />}
          >
            Filter
          </Button>
          <Button sx={{ color: "white" }}>
            <MoreHorizOutlinedIcon />
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
