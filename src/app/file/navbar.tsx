"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box } from "@mui/material";

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
        <Button {...bindTrigger(popupState)} sx={{color: 'white', fontWeight: 550}}>{label}</Button>
        <Menu
          {...bindMenu(popupState)}
          sx={{ mt: 0.4 }}
          className="menu__list_mapping"
        >
          {data.map((item) => (
            <MenuItem key={item.id} sx={{ width: "200px" }}>
              <Link
                href={"./navbar"}
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  width:'100%'
                }}
              >
                <ListItemText sx={{ color: "white" }}>{item.name}</ListItemText>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "#348AFF" }}
                >
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

export default function Navbar() {
  const dataFile: IData[] = [
    {
      id: 1,
      name: "New Map",
      keyboard: "Ctrl + N",
    },
    {
      id: 2,
      name: "Save Map",
      keyboard: "Ctrl + S",
    },
    {
      id: 3,
      name: "Import",
      keyboard: "Ctrl + I",
    },
    {
      id: 4,
      name: "Export As",
      keyboard: "Ctrl + E",
    },
    {
      id: 5,
      name: "Setting",
      keyboard: "Ctrl + O",
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: 40,
          borderBottom: "1px solid rgba(255, 255, 255,0.5)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {createMenu("File", dataFile)}
        {createMenu("Edit", dataFile)}
        {createMenu("View", dataFile)}
        {createMenu("Image", dataFile)}
      </Box>
    </>
  );
}
