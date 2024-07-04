import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("")

  //  * From Local state
  // const { todos } = useAppSelector((state) => state.todos);

  // * From server
  const { data: todos, isLoading, isError, } = useGetTodosQuery(priority, { pollingInterval: 1000 });

  if (isLoading) {
    return <p>Loading ..........</p>
  }

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <AddTodoModal />

        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center item-center">
            <p>There is no task pending</p>
        </div> */}
        <div className="h-full w-full space-y-3 rounded-lg bg-white p-5">
          {todos?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
