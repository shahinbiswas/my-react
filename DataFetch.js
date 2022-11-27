import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>todos is loading</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{errorMessage}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
