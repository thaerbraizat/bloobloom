import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useHistory } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(true);
  const [temp,setTemp] = React.useState("");
  const [test1,setTest1] = React.useState(false);
  const navigate = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleChane=(text)=>{
    setTemp(text);
    setTest1(true);
  }

  const handleNavigation = (text) => {
    if (text === "SPECTACLES" && temp ==="Women") {
      navigate.push("/spectacles-women");
      window.location.reload();
    } else if(text === "SUNGLASSES" && temp ==="Women") {
      navigate.push("/sunglasses-women");
      window.location.reload();
    }else if (text === "SPECTACLES" && temp ==="Men"){
      navigate.push("/spectacles-men");
      window.location.reload();
    }
    else {
      navigate.push("/sunglasses-men");
      window.location.reload();
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {["Women", "Men"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleChane(text)
              }}
            >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const listTwo = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {["SPECTACLES", "SUNGLASSES"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleNavigation(text);
              }}
            >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
    <Drawer anchor={"left"} open={state} onClose={toggleDrawer("left", false)}>
      {test1?listTwo("left"):list("left")}
    </Drawer>
    </>
    
  );
}
