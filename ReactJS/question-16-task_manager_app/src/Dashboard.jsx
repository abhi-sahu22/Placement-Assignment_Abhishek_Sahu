import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/tasks");
        setTasks(response.data.tasks);
      } catch (error) {
        console.log("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://reqres.in/api/tasks", {
        title: newTask,
      });

      const newTaskData = {
        id: response.data.id,
        title: response.data.title,
        createdAt: response.data.createdAt,
      };

      setTasks((prevTasks) => {
        const updatedTasks = Array.isArray(prevTasks) ? [...prevTasks] : [];
        updatedTasks.push(newTaskData);
        return updatedTasks;
      });

      setNewTask("");
    } catch (error) {
      console.log("Failed to create task", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://reqres.in/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.log("Failed to delete task");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Task Dashboard</h1>
      <p>Upon reload or re-login, the data gets deleted as reqres.in doesnot store data as per their documentation.</p>
      <div className="my-4">
        <form onSubmit={handleCreateTask}>
        <input
          className="border border-gray-300 rounded px-3 py-2 mr-2"
          type="text"
          placeholder="Enter task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateTask}
        >
          Create Task
        </button>
        </form>
      </div>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        <ul className="list-disc pl-6">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
              <span className="mr-2">{task.title}</span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default Dashboard;


