import React from "react";
import ArticleList from "./ArticleList";
import articles from "../fixtures";
import Input from "./Input";
import CreateTask from "./CreateTask";
function App() {
  return (
    <div>
      <h1>Desk</h1>
      <Input name="guest" />
      <CreateTask />
    </div>
  );
}

export default App;
