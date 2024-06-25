"use client";

import axios from "axios";
import React from "react";

const FileUpload: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("files") as HTMLInputElement;
    const descriptionInput = form.elements.namedItem(
      "description"
    ) as HTMLInputElement;
    const assignedToInput = form.elements.namedItem(
      "assignedTo"
    ) as HTMLInputElement;

    if (fileInput.files) {
      for (let i = 0; i < fileInput.files.length; i++) {
        formData.append("files", fileInput.files[i]);
      }
    }
    formData.append("description", descriptionInput.value);
    formData.append("assignedTo", assignedToInput.value);

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full col-span-9">
      <form
        className="flex flex-col gap-5 border border-neutral-200 p-3 rounded-lg w-1/3"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="dropzone-file"
          className="flex p-4 flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-100 border-blue-600 hover:border-blue-500 hover:bg-neutral-200"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-blue-500 dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-blue-500 dark:text-blue-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-blue-500 dark:text-blue-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
          <input
            id="dropzone-file"
            name="files"
            type="file"
            className="hidden"
            multiple
          />
        </label>
        <input
          className="border border-neutral-200 p-3 rounded-lg w-full focus:outline-none"
          aria-label="description"
          name="description"
          type="text"
          placeholder="Description"
        />
        <input
          className="border border-neutral-200 p-3 rounded-lg w-full focus:outline-none"
          aria-label="assignedTo"
          name="assignedTo"
          type="text"
          placeholder="Assigned To"
        />
        <button
          className="bg-blue-400 text-white hover:bg-blue-500 p-3 rounded-lg"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
