"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import "../style/style.css";

interface IData {
  id: number;
  name: string;
  icon: any;
}

const Sidebar = () => {
  const data: IData[] = [
    {
      id: 1,
      name: "Mapping",
      icon: InboxIcon,
    },
    {
      id: 2,
      name: "Venue",
      icon: DraftsIcon,
    },
    {
      id: 3,
      name: "Mapping",
      icon: InboxIcon,
    },
    {
      id: 4,
      name: "Venue",
      icon: DraftsIcon,
    },
  ];

  const [isClick, setIsClick] = React.useState<number | null>(1);
  const handleItemClick = (id: number) => {
    setIsClick(id);
  };
  return (
    <Box className="sidebar">
      <nav aria-label="main mailbox folders">
        {data.map((item) => (
          <ListItem
            disablePadding
            key={item.id}
            style={{
              background: isClick === item.id ? "#E34A66" : "white",
              color: isClick === item.id ? "white" : "black",
              height: 40
            }}
            onClick={() => handleItemClick(item.id)}
          >
            <ListItemButton>
              <ListItemIcon style={{
              color: isClick === item.id ? "white" : "black"
            }}>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </nav>
    </Box>
  );
};
export default Sidebar;
