import React from "react";
type SignMediaButton = {
  medianame: string;
};

const SIgnMediaButton = ({ medianame }: SignMediaButton) => {
  return (
    <button
      className="bg-button-dark px-2 w-full flex py-2 space-x-12 items-center"
      type="button"
    >
      <div className="mr-2 ">x</div>

      <div className="text-sm ">{`Continue with ${medianame}`}</div>
    </button>
  );
};

export default SIgnMediaButton;
