import React from "react";
import { Input } from "../ui/Input";
import { RootState } from "../../store/Store";
import { AppDispatch } from "../../store/Store";
import SIgnMediaButton from "../ui/SIgnMediaButton";
import {
  useAppSelector,
  useAppDispatch,
} from "../../hooks/useTypedSelectorHook";
import { loginUser } from "../../features/auth/authSlice";

const SigninForm = () => {
  const dispatch = useAppDispatch();

  const email = "randalonthemic@gmail.com";
  const password = "iamkkbb";

  const onSigninClicked = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      dispatch(loginUser({email,password})).unwrap();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }
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
      ></Input>
      <Input
        name="password"
        label="Password"
        type=""
        placeholder="Password"
      ></Input>
      <button
        className="w-full bg-primary py-2 rounded-md"
        type="submit"
        onClick={onSigninClicked}
      >
        Continue
      </button>
      <SIgnMediaButton medianame="Google"></SIgnMediaButton>1234
      <SIgnMediaButton medianame="Facebook"></SIgnMediaButton>
    </form>
  );
};

export default SigninForm;
