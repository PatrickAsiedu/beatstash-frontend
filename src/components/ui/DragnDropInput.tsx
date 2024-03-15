import React from "react";
import Dropzone from "react-dropzone";
import { DroppedFile } from "../../types/dragndropfileTypes";
type DropZoneProps = {
  setFiles: React.Dispatch<React.SetStateAction<number>>;
};

const DragnDropInput = ({ setFiles }: any) => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        console.log(acceptedFiles);
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();

          reader.onabort = () => console.log("file reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.onload = () => {
            setFiles((prev: any) => [...prev, file]);
          };
          reader.readAsArrayBuffer(file);
        });
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <label htmlFor="mp3input">Upload mp3</label>
          <div
            className="w-full border border-slate-800 h-32 flex items-center justify-center rounded-lg cursor-pointer"
            {...getRootProps()}
          >
            <input id="mp3input" {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
export default DragnDropInput;
