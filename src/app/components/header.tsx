"use client";
import { CardMedia, styled, Avatar , Box} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DivStyles = {
  background: "#F0F4FE",
  display: "flex",
  justifyContent: "space-between",
  height: "48px"
};

interface IData {
  id: number;
  name: string;
  keyboard: any;
}

const DropUser = (link: any ,label: string, data: IData[]) => (
  <PopupState
    variant="popover"
    popupId={`demo-popup-menu-${label.toLowerCase()}`}
  >
    {(popupState) => (
      <React.Fragment>
        <Button {...bindTrigger(popupState)} endIcon={<KeyboardArrowDownIcon />}>{label}</Button>
        <Menu {...bindMenu(popupState)}>
          {data.map((item) => (
            <MenuItem key={item.id} sx={{ width: "200px" }}>
              <Link href={link} style={{color: 'black', textDecoration:'none', display:'flex'}} >
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

const HeaderPage = () => {
  const dataUser: IData[] = [
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
      <Box style={DivStyles}>
        <Box sx={{width:172, height:48, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CardMedia
            component="img"
            sx={{ width: 110, height: 32 }}
            image="./images/logo.png"
            alt="Paella dish"
          />
        </Box>
        <Box style={DivStyles} sx={{mr:3}}>
          <Avatar sx={{ width: 36, height: 36 , margin: 'auto 0' }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          
          {DropUser('./abc',"Do Thi Ha", dataUser)}
        </Box>
      </Box>
    </>
  );
};

export default HeaderPage;
