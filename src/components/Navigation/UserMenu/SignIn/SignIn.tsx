import { switchToRegistrationType } from "@/pages/login/Login.types";
import { switchToRegistration } from "@/reducers/registrationReduser";
import { MenuItem } from "@mui/material";
import Link from "next/link";
import { connect } from "react-redux";

const SignIn = ({
  switchToRegistration,
}: {
  switchToRegistration: switchToRegistrationType;
}) => {
  return (
    <MenuItem onClick={() => switchToRegistration(true)}>
      <Link href="/login">Sign In</Link>
    </MenuItem>
  );
};

const mapDispatchProps = {
  switchToRegistration,
};

export default connect(null, mapDispatchProps)(SignIn);
