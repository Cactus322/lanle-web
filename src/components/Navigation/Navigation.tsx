import { AppBar, Toolbar, Link as MUILink } from "@mui/material";
import Link from "next/link";
import UserMenu from "./UserMenu/UserMenu";

const Navigation = () => {
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
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
