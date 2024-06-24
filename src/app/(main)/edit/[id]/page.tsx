import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import NewTaskForm from "@/components/NewTaskForm/NewTaskForm";

interface Params {
  params: { id: string };
}

const EditTaskPage = ({ params }: Params) => {
  // const id = params.id;
  return (
    <div className="flex flex-col justify-center dy-20">
      <h2 className="text-center text-2xl font-bold">Edit task</h2>
      <EditTaskForm />
    </div>
  );
};

export default EditTaskPage;
