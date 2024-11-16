import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navigationData } from "../../config/contentData";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function TopAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState({});

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "90%", md: "70%" },
          pt: 1,
          pb: 1,
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          HKL
        </Typography>

        <IconButton
          sx={{ display: { md: "none" }, color: "black" }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {navigationData.map((item) => (
            <Button
              onClick={() => {
                navigate(item.path);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              sx={{
                color: "black",
                fontSize: "1.1rem",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "cursive",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  backgroundColor:
                    location.pathname === item.path ? "black" : "transparent",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>

      <Drawer anchor="top" open={openDrawer}>
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              pt: 1,
              pb: 1,
              pr: 2,
            }}
          >
            <IconButton
              sx={{ color: "black" }}
              onClick={() => {
                setOpenDrawer(false);
                setOpen({});
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          {navigationData.map((item, index) => (
            <List key={index} sx={{ p: 0 }}>
              {item.children ? (
                <>
                  <ListItemButton
                    sx={{ p: 2 }}
                    onClick={() =>
                      setOpen((prevOpen) => ({
                        ...prevOpen,
                        [index]: !prevOpen[index],
                      }))
                    }
                  >
                    <ListItemText primary={item.label} />
                    {open[index] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={open[index]} timeout="auto" unmountOnExit>
                    {item.children.map((item, index) => (
                      <List key={index} component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4, pt: 2, pb: 2 }}
                          onClick={() => {
                            navigate(item.path);
                            setOpenDrawer(false);
                            setOpen({});
                            setTimeout(() => {
                              window.scrollTo({
                                top:
                                  document
                                    .getElementById(item.path.split("#")[1])
                                    .getBoundingClientRect().top +
                                  window.pageYOffset -
                                  60,
                                behavior: "smooth",
                              });
                            }, 300);
                          }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </List>
                    ))}
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  sx={{ p: 2 }}
                  onClick={() => {
                    navigate(item.path);
                    setOpenDrawer(false);
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )}
            </List>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
}
