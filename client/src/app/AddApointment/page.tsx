"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date();
    const time = date.toLocaleTimeString();
    const form = event.currentTarget;
    const typeInput = form.elements.namedItem("type") as HTMLInputElement;
    const statusInput = form.elements.namedItem("status") as HTMLInputElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const doctorInput = form.elements.namedItem("doctor") as HTMLInputElement;

    const data = {
      name: nameInput.value,
      time: time,
      type: typeInput.value,
      status: statusInput.value,
      doctor: doctorInput.value,
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API + "/api/patients",
        data
      );
      console.log(response);

      if (response.status === 200) {
        // router.push("/Dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full col-span-10 md:col-span-9">
      <form
        className="flex flex-col gap-5 border border-neutral-200 p-3 rounded-lg w-[90%] md:w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-neutral-200 p-3 rounded-lg w-full focus:outline-none"
          aria-label="name"
          name="name"
          type="text"
          placeholder="name"
          required
        />
        <select
          aria-label="statusSelect"
          title="Select Status"
          name="status"
          id="statusSelect "
          className="form-control border border-neutral-200 p-3 rounded-lg w-full focus:outline-none "
          value={selectedStatus}
          defaultValue={"On Hold"}
          onChange={handleStatusChange}
        >
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </select>
        <select
          aria-label="typeSelect"
          title="Select Status"
          name="type"
          id="typeSelect"
          className="form-control border border-neutral-200 p-3 rounded-lg w-full focus:outline-none "
          value={selectedStatus}
          defaultValue={"On Hold"}
          onChange={handleTypeChange}
        >
          <option value="On Hold">Urgent</option>
          <option value="Completed">Follow Up</option>
        </select>
        <input
          className="border border-neutral-200 p-3 rounded-lg w-full focus:outline-none"
          aria-label="doctor"
          name="doctor"
          type="text"
          placeholder="Doctor"
          required
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
