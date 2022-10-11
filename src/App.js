import "./App.css";

import TodoList from "./page/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./page/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
