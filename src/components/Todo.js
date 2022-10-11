import styled from "styled-components";
import { Link } from "react-router-dom";

const Todo = ({ id, title }) => {
  return (
    <TodoItem>
      <Link to={`/${id}`}>{title}</Link>
    </TodoItem>
  );
};

export default Todo;

const TodoItem = styled.li`
  padding: 20px;
  border: 15px;
  border: 1px solid blue;
`;
