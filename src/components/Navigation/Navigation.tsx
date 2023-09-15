import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Link as MUILink,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { switchToRegistration } from "@/reducers/registrationReduser";
import { removeUserInfo } from "@/reducers/loginReducer";
import { connect } from "react-redux";
import { switchToRegistrationType } from "@/pages/login/Login.types";
import Link from "next/link";
import { ILoginSlice } from "@/reducers/loginReducer.types";

const Navigation = ({
  login,
  removeUserInfo,
  switchToRegistration,
}: {
  login: ILoginSlice;
  removeUserInfo: switchToRegistrationType;
  switchToRegistration: switchToRegistrationType;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <MUILink
          variant="h6"
          component={Link}
          href="/"
          sx={{
            flexGrow: 1,
            color: "black",
          }}
        >
          Lanle WEB
        </MUILink>
        {login.state ? `${login.state}` : null}
        <Button
          color="inherit"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <PersonIcon />
        </Button>
        {login.state ? (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => removeUserInfo(true)}>
              <Link href="/login">Logout</Link>
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => switchToRegistration(false)}>
              <Link href="/login">Login</Link>
            </MenuItem>
            <MenuItem onClick={() => switchToRegistration(true)}>
              <Link href="/login">Sign In</Link>
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ login }: { login: ILoginSlice }) => {
  return {
    login: login,
  };
};

const mapDispatchProps = {
  removeUserInfo,
  switchToRegistration,
};

export default connect(mapStateToProps, mapDispatchProps)(Navigation);
