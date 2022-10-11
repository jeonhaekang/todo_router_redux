import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const todos = useSelector((state) => state.todos);

  const todo = todos.find((todo) => todo.id === parseInt(params.id));

  return <div>{todo.title}</div>;
};

export default Detail;
