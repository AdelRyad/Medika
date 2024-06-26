// pages/tasks.js

import axios from "axios";
import Task from "../components/Task";
import DropDown from "../components/DropDown";
import CreateTask from "../components/CreateTask";

export async function getServerSideProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API + "/api/tasks", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  const data = res.data;
  return {
    props: { tasks: data }, // will be passed to the page component as props
  };
}

const TasksPage = ({ tasks }: { tasks: any }) => {
  const handleTaskCreated = () => {
    // Re-fetch data or update state to force re-rendering with new data
  };

  return (
    <div>
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex justify-between w-full items-center h-fit">
          <h1 className="text-2xl font-semibold">Tasks</h1>
          <DropDown title="Today" options={["Last Week", "Last Month"]} />
        </div>
        <div className="overflow-auto scroll-bar">
          {tasks.map((task) => (
            <Task
              key={task._id}
              title={task.title}
              date={task.date}
              time={task.time}
              status={task.status}
              description={task.description}
              attachment={task.attachment}
            />
          ))}
        </div>
      </div>
      <CreateTask onTaskCreated={handleTaskCreated} />
    </div>
  );
};

export default TasksPage;
