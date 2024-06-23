import NewTaskForm from "@/components/NewTaskForm/NewTaskForm";
import React from "react";

const NewTask = () => {
  return (
    <div className="flex flex-col justify-center dy-20">
      <h2 className="text-center text-2xl font-bold">Create new task</h2>
      <NewTaskForm />
    </div>
  );
};

export default NewTask;
