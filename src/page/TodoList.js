import styled from "styled-components";
import Form from "../components/Form";
import List from "../components/List";

const TodoList = () => {
  return (
    <Container>
      <Form />
      <List />
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
