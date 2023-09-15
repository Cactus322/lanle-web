import { switchToRegistrationType } from "@/pages/login/Login.types";
import { switchToRegistration } from "@/reducers/registrationReduser";
import { MenuItem } from "@mui/material";
import Link from "next/link";
import { connect } from "react-redux";

const Login = ({
  switchToRegistration,
}: {
  switchToRegistration: switchToRegistrationType;
}) => {
  return (
    <MenuItem onClick={() => switchToRegistration(false)}>
      <Link href="/login">Login</Link>
    </MenuItem>
  );
};

const mapDispatchProps = {
    switchToRegistration
}

export default connect(null, mapDispatchProps)(Login);
