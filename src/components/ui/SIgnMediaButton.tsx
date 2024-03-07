import React from "react";
type SignMediaButton = {
  medianame: string;
  url?: string;
};

const SIgnMediaButton = ({ medianame, url }: SignMediaButton) => {
  return (
    <a
      href={url}
      className="bg-button-dark px-2 w-full flex py-2 space-x-12 items-center"
      type="button"
    >
      <div className="mr-2 ">x</div>

      <div className="text-sm ">{`Continue with ${medianame}`}</div>
    </a>
  );
};

export default SIgnMediaButton;
