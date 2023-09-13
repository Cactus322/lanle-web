import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addUser } from "@/reducers/loginReducer";
import { setNotice } from "@/reducers/noticeReducer";
import registrationService from "@/services/registration";

import { addUserFunctionType } from "./Login.types";
import { setNoticeFunctionType } from "@/types";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ILoginSlice } from "@/reducers/loginReducer.types";
import loginService from "@/services/login";

const Login = ({
  addUser,
  setNotice,
  registration,
  login,
}: {
  addUser: addUserFunctionType;
  setNotice: setNoticeFunctionType;
  registration: boolean;
  login: ILoginSlice;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (login.type === "error") {
      setNotice("Wrong credentials", 3, "error");
    }
  }, [login]);

  console.log(login)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      // await loginService.login({ username, password })
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      addUser({ username, password });
      setUser(user.username);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault;

    try {
      await registrationService.registration({ username, password });
      addUser({ username, password });
    } catch (exception) {
      console.error("Wrong credentials");
    }
  };

  // console.log(registration, login.state?.username)

  return (
    //Интересная ошибка. Если button type = submit, то при попытке зарегистрировать пользователя,
    //получаем ошибку RequsetAborted
    <Box component="form" className="position center" autoComplete="true">
      <FormControl>
        <InputLabel htmlFor="login-username">Username</InputLabel>
        <OutlinedInput
          id="login-username"
          type="text"
          label="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="login-username">Password</InputLabel>
        <OutlinedInput
          id="login-password"
          type="text"
          label="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </FormControl>
      <Button
        variant="outlined"
        type="button"
        onClick={registration ? handleRegistration : handleLogin}
      >
        {registration ? "Registration" : "Login"}
      </Button>
    </Box>
  );
};

const mapStateToProps = ({
  registration,
  login,
}: {
  registration: boolean;
  login: ILoginSlice;
}) => {
  return {
    registration: registration,
    login: login,
  };
};

const mapDispatchProps = {
  addUser,
  setNotice,
};

export default connect(mapStateToProps, mapDispatchProps)(Login);
