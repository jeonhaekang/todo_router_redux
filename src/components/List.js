import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <TodoList>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </TodoList>
  );
};

export default List;

const TodoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
`;
