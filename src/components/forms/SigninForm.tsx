import { Input } from "../ui/Input";
import { RootState } from "../../store/Store";
import { AppDispatch } from "../../store/Store";
import SIgnMediaButton from "../ui/SIgnMediaButton";
import {
  useAppSelector,
  useAppDispatch,
} from "../../hooks/useTypedSelectorHook";
import { loginUser } from "../../features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useEffect, useRef } from "react";

const SigninForm = () => {
  const {
    value: emailValue,
    isValid: emailisValid,
    hasFocus: emailhasFocus,
    inputChangeHandler: emailChangeHandler,
  } = useInput();
  const {
    value: passwordValue,
    isValid: passwordisValid,
    hasFocus: passwordhasFocus,
    inputChangeHandler: passwordChangeHandler,
  } = useInput();

  const emailRef = useRef<HTMLInputElement>(null);
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  useEffect(() => {
    emailRef.current?.focus();
    console.log("ref has been set");
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useAppDispatch();

  const email = "randalonthemic@gmail.com";
  const password = "iamkkbb";

  const onSigninClicked = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ email, password })).unwrap();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }

    // navigate(from , {replace :true})
  };

  return (
    <form className=" w-96  border border-border-light mx-auto mt-28 rounded-xl space-y-4 px-8 bg-body-light pt-4 font-semibold text-white relative pb-8">
      <img
        className="absolute inset-x-0 top-[-60px] m-auto w-10 "
        src="https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg"
        alt=""
      />
      <h1 className="text-center text-xl">Continue with</h1>
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        onChangeHandler={emailChangeHandler}
        ref={emailRef}
      ></Input>
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
        onChangeHandler={passwordChangeHandler}
      ></Input>
      <button
        className="w-full bg-primary py-2 rounded-md"
        type="submit"
        onClick={onSigninClicked}
      >
        Continue
      </button>

      <SIgnMediaButton
        medianame="Google"
        url={"http://localhost:3500/auth/google"}
      ></SIgnMediaButton>

      {/* <SIgnMediaButton medianame="Facebook"></SIgnMediaButton> */}
    </form>
  );
};

export default SigninForm;
