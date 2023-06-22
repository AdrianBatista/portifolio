import { ReactNode, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import ViewListIcon from "@mui/icons-material/ViewList";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

type Page = {
  title: string;
  url: string;
  icon?: ReactNode;
};

const pages: Page[] = [
  { title: "Home", url: "/", icon: <HomeIcon /> },
  { title: "Projects", url: "/projects", icon: <ViewListIcon /> },
  { title: "About", url: "/about", icon: <InfoIcon /> },
  { title: "Contact", url: "/contact", icon: <EmailIcon /> },
];

function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} position="fixed">
      <Container maxWidth="xl" sx={{ display: { xs: "none", md: "flex" } }}>
        <Toolbar
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ADRIAN
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleDrawerClose}
                href={page.url}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Container
        sx={{
          display: { xs: "flex", md: "none", paddingInline: 5, width: "100vw" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 1,
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ADRIAN
            </Typography>
          </Box>
        </Toolbar>
        <SwipeableDrawer
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
          open={open}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
        >
          <List>
            {pages.map((page, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton href={page.url}>
                  <ListItemIcon>{page.icon ?? <PublicIcon />}</ListItemIcon>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
