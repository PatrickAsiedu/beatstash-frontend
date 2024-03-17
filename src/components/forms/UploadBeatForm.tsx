import { useState } from "react";
import DragnDropInput from "../ui/DragnDropInput";
import InputAlt from "../ui/InputAlt";
import { DroppedFile } from "../../types/dragndropfileTypes";
import React from "react";
import { timeLog } from "console";
import api from "../../network/api";
import ts from "typescript";

const UploadBeatForm = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [genre, setGenre] = useState("");
  const [key, setKey] = useState("");
  const [BPM, setBPM] = useState("");

  const data = [
    { title: title },
    { tags: tags },
    { genre: genre },
    { key: key },
    { BPM: BPM },
  ];

  const formSubtmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(files);
    const formData = new FormData();
    // @ts-ignore
    formData.append("files", files);
    data?.forEach((data) =>
      formData.append(`${Object.keys(data)}`, `${Object.values(data)}`)
    );

    // const post = await api.post("postbeats", formData);

    // console.log(formData.get("BPM"));
    // console.log(formData.get("files"));

    // for (let [k, v] of Object.entries(formData.entries())) {
    //   console.log(k, v);
    // }
  };

  return (
    <form
      onSubmit={formSubtmitHandler}
      id="uploadbeat"
      encType="multipart/form-data"
      className="w-full lg:w-[750px]  mx-auto px-4 flex flex-col bg-studiobody rounded-lg  pt-6 space-y-6 pb-10 shadow-2xl"
    >
      <DragnDropInput setFiles={setFiles}></DragnDropInput>
      <InputAlt
        name="Title"
        type="text"
        label="Title"
        constyle={"w-full"}
        labelstyle={""}
        inputstyle={
          "rounded-md bg-studiobody border border-slate-800 py-1 mt-2 w-full px-4"
        }
        onChangeHandler={setTitle}
      ></InputAlt>

      <InputAlt
        name="Tags"
        type="text"
        label="Tags"
        constyle={"w-full"}
        labelstyle={""}
        inputstyle={
          "rounded-md bg-studiobody border border-slate-800 py-1 mt-2 w-full px-4"
        }
        onChangeHandler={setTags}
      ></InputAlt>
      <InputAlt
        name="Genre"
        type="text"
        label="Genre"
        constyle={"w-full"}
        labelstyle={""}
        inputstyle={
          "rounded-md bg-studiobody border border-slate-800 py-1 mt-2 w-full px-4"
        }
        onChangeHandler={setGenre}
      ></InputAlt>
      <div className="flex ">
        <InputAlt
          name="Key"
          type="text"
          label="Key"
          constyle={"flex flex-col"}
          labelstyle={""}
          inputstyle={
            "rounded-md bg-studiobody border border-slate-800 py-1 mt-2 w-[60%] px-4"
          }
          onChangeHandler={setKey}
        ></InputAlt>
        <InputAlt
          name="BPM"
          type="select"
          label="BPM"
          constyle={"flex flex-col"}
          labelstyle={""}
          inputstyle={
            "rounded-md bg-studiobody border border-slate-800 py-1 mt-2 w-[60%] px-4"
          }
          onChangeHandler={setBPM}
        ></InputAlt>
      </div>

      <div className="mt-20">CONTRACTS</div>
      <div className="flex justify-end ">
        <button className="bg-primary py-2 px-4 rounded-md">Publish</button>
      </div>
    </form>
  );
};
export default UploadBeatForm;
