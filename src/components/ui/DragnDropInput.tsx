import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { DroppedFile } from "../../types/dragndropfileTypes";
type DropZoneProps = {
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  formData?: FormData;
  divstyle: string;
  label: string;
};

const DragnDropInput = ({ setFiles, divstyle, label }: DropZoneProps) => {
  return (
    <Dropzone
      onDrop={(acceptedFiles: File[]) => {
        // console.log(acceptedFiles);
        acceptedFiles.forEach((file) => {
          setFiles((prev) => [...prev, file]);
          // const reader = new FileReader();

          // reader.onabort = () => console.log("file reading was aborted");
          // reader.onerror = () => console.log("file reading has failed");
          // reader.onload = () => {

          // };
          // reader.readAsArrayBuffer(file);
        });
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <label htmlFor="mp3input">{label}</label>
          <div className={divstyle} {...getRootProps()}>
            <input id="mp3input" {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
export default DragnDropInput;
