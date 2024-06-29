import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <AddTodoModal />
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button>

        <Button className="bg-primary-gradient text-xl font-semibold">
          Filter{" "}
        </Button>
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center item-center">
            <p>There is no task pending</p>
        </div> */}
        <div className="h-full w-full space-y-3 rounded-lg bg-white p-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
