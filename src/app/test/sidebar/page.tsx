"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import DraftsIcon from "@mui/icons-material/Drafts";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam", "Gmail", "Youtube"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <InboxIcon />
                  ) : index === 1 ? (
                    <MailIcon />
                  ) : index === 2 ? (
                    <DeleteIcon />
                  ) : index === 3 ? (
                    <ReportIcon />
                  ) : index === 4 ? (
                    <DraftsIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
  const anchor = "left";

  const [dataArray, setDataArray] = React.useState<any[]>([]);
  const [nextId, setNextId] = React.useState<number>(1);

  const handlePushToArray = () => {
    // Tạo một đối tượng mới với id tăng dần
    const newItem = { id: nextId, name: `Item ${nextId}` };

    // Tăng giá trị id cho lần tiếp theo
    setNextId(nextId + 1);

    // Thêm đối tượng mới vào mảng
    setDataArray([...dataArray, newItem]);
  };


  return (
    <div>
      <React.Fragment key={anchor}>
        <Button variant="outlined" onClick={toggleDrawer(anchor, true)}>
          {anchor}
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>

      <button onClick={handlePushToArray}>Push to Array</button>
      <ul>
        {dataArray.map((item: any) => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
}
