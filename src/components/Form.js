import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/module/todos";

const Form = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  return (
    <FormWrap
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(addTodo(todo));
        setTodo("");
      }}
    >
      <Label>Todo의 제목을 입력하세요</Label>
      <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button type="submit">추가하기</Button>
    </FormWrap>
  );
};

export default Form;

const FormWrap = styled.form`
  padding: 20px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ddd;

  justify-content: flex-start;
  align-items: center;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;
