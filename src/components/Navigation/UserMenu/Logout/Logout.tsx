import { switchToRegistrationType } from "@/pages/login/Login.types";
import { removeUserInfo } from "@/reducers/loginReducer";
import { MenuItem } from "@mui/material";
import Link from "next/link";
import { connect } from "react-redux";

const Logout = ({
  removeUserInfo,
}: {
  removeUserInfo: switchToRegistrationType;
}) => {
  return (
    <MenuItem onClick={() => removeUserInfo(true)}>
      <Link href="/login">Logout</Link>
    </MenuItem>
  );
};

const mapDispatchProps = {
  removeUserInfo,
};

export default connect(null, mapDispatchProps)(Logout);
