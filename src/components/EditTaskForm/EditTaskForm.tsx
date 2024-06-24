import React from "react";

const EditTaskForm = () => {
  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action="">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            Expired Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="isCompleted"
              name="isCompleted"
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="isCompleted" className="text-sm">
              Complete the task
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;