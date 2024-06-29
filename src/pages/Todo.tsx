import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="semibold my-10 text-center text-3xl">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
