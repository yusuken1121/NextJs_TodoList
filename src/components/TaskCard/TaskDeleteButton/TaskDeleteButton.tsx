import { FC } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: FC<TaskDeleteButtonProps> = () => {
  return (
    <form action="">
      <button
        type="submit"
        className="hover:text-gray-700 text-lg cursor-pointer"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
