"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface IData {
  id: number;
  name: string;
  keyboard: any;
}

const createMenu = (label: string, data: IData[]) => (
  <PopupState
    variant="popover"
    popupId={`demo-popup-menu-${label.toLowerCase()}`}
  >
    {(popupState) => (
      <React.Fragment>
        <Button {...bindTrigger(popupState)}>{label}</Button>
        <Menu {...bindMenu(popupState)}>
          {data.map((item) => (
            <MenuItem key={item.id} sx={{ width: "200px" }}>
              <Link href={"./navbar"} style={{color: 'black', textDecoration:'none', display:'flex'}} >
                <ListItemText>{item.name}</ListItemText>
                <Typography variant="body2" color="text.secondary" sx={{ml:6}}>
                  {item.keyboard}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    )}
  </PopupState>
);

export default function MenuPopupState() {
  const dataFile: IData[] = [
    {
      id: 1,
      name: "New Map",
      keyboard: "Ctrl + N",
    },
    {
      id: 2,
      name: "New Map",
      keyboard: "Ctrl + P",
    },
    {
      id: 3,
      name: "New Map",
      keyboard: "Ctrl + S",
    },
    {
      id: 4,
      name: "New Map",
      keyboard: "Ctrl + A",
    },
    {
      id: 5,
      name: "New Map",
      keyboard: "Ctrl + W",
    },
  ];

  return (
    <>
      {createMenu("File", dataFile)}
      {createMenu("Edit", dataFile)}
      {createMenu("View", dataFile)}
      {createMenu("Image", dataFile)}
    </>
  );
}
