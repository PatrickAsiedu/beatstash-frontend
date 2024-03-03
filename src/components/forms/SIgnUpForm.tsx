import React from "react";
import { Input } from "../ui/Input";
import SIgnMediaButton from "../ui/SIgnMediaButton";

const SIgnUpForm = () => {
  return (
    <form className=" w-96  border border-border-light mx-auto mt-28 rounded-xl space-y-4 px-8 bg-body-light pt-4 font-semibold text-white relative pb-8">
      <img
        className="absolute inset-x-0 top-[-60px] m-auto w-10 "
        src="https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg"
        alt=""
      />
      <h1 className="text-center text-xl">Continue with</h1>
      <Input
        name="username"
        label="Username"
        type="text"
        placeholder="Username"
      ></Input>
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
      ></Input>
      <div className="flex flex-col">
        <label htmlFor="userrole">I'm A</label>
        <select name="userrole" id="" className="bg-body">
          <option value="Listener">Listener</option>
          <option value="Producer">Producer</option>
        </select>
      </div>

      <Input
        name="password"
        label="Password"
        type=""
        placeholder="Password"
      ></Input>

      <button className="w-full bg-primary py-2 rounded-md" type="submit">
        Continue
      </button>

      <SIgnMediaButton medianame="Google"></SIgnMediaButton>
      <SIgnMediaButton medianame="Facebook"></SIgnMediaButton>
    </form>
  );
};

export default SIgnUpForm;
