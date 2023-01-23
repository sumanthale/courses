import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import img from "../../../assets/images/users/user-round.svg";
import { LockOutlined } from "@mui/icons-material";
import LoginModal from "./Login";
import { Link } from "react-router-dom";
export default function AccountMenu() {
  const { isAuthenticated, signOutUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <React.Fragment>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Tooltip title="Home">
          <Button variant="text" sx={{ ml: "auto" }}>
            <Link
              to={"/"}
              style={{
                color: "#000",
                fontWeight: "500",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title="Services">
          <Button variant="text" sx={{ ml: 2 }}>
            <Link
              to={"services"}
              style={{
                color: "#000",
                fontWeight: "500",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title="Courses Offering">
          <Button variant="text" sx={{ ml: 2 }}>
            <Link
              to={"courses"}
              style={{
                color: "#000",
                fontWeight: "500",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Courses Offering
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title=" About Us">
          <Button variant="text" sx={{ ml: 2 }}>
            <Link
              to={"about"}
              style={{
                color: "#000",
                fontWeight: "500",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title="Contact Us">
          <Button variant="text" sx={{ ml: 2 }}>
            <Link
              to={"contact"}
              style={{
                color: "#000",
                fontWeight: "500",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </Button>
        </Tooltip>

        {!!isAuthenticated ? (
          <>
            <Tooltip title="Contact Us">
              <Button variant="text" sx={{ ml: "auto" }}>
                <Link
                  to={"/admin"}
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Dashboard
                </Link>
              </Button>
            </Tooltip>
          </>
        ) : null}

        {!!isAuthenticated ? (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: "auto" }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 38, height: 38 }} src={img}>
                M
              </Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <>
            <Button
              variant="contained"
              startIcon={<LockOutlined />}
              color="secondary"
              sx={{ ml: "auto" }}
              onClick={() => {
                handleOpenModal();
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                Login
              </Typography>
            </Button>
          </>
        )}
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        {!!isAuthenticated ? (
          <>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: "auto" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 38, height: 38 }} src={img}>
                  M
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={signOutUser}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              startIcon={<LockOutlined />}
              size="small"
              color="secondary"
              sx={{ ml: "auto" }}
              onClick={() => {
                handleOpenModal();
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Login
              </Typography>
            </Button>
          </>
        )}
        {openModal && (
          <LoginModal open={openModal} handleClose={handleCloseModal} />
        )}
      </Box>
    </React.Fragment>
  );
}
