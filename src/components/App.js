import React from "react";
import ArticleList from "./ArticleList";
import articles from "../fixtures";
import Input from "./Input";
function App() {
  return (
    <div>
      <h1>Hello, world</h1>
      <Input name="guest" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aliquam
        voluptatem similique voluptatum a impedit, quidem dolore reprehenderit,
        assumenda error debitis cumque nam mollitia tempora sit quis, excepturi
        ullam aut.
      </p>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
