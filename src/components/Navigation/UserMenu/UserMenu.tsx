import { Button, Menu } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import Login from "./Login/Login";
import SignIn from "./SignIn/SignIn";
import Logout from "./Logout/Logout";
import { connect } from "react-redux";
import { ILoginSlice } from "@/reducers/loginReducer.types";

const UserMenu = ({ login }: { login: ILoginSlice }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {login.state ? (
          <Logout />
        ) : (
          <div>
            <Login />
            <SignIn />
          </div>
        )}
      </Menu>
    </>
  );
};

const mapStateToProps = ({ login }: { login: ILoginSlice }) => {
  return {
    login: login,
  };
};

export default connect(mapStateToProps, null)(UserMenu);
