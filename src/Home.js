import "./App.css";
//import Test from "./test";
// import About from "./About";
import { Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Add from "./Add";
import "./Media.css";
import { Button } from "react-bootstrap";

function Home() {
  const [Todo, setTodo] = useState(null);
  const [itemList, setItemList] = useState([]);

  function onChangeHandler(e) {
    setTodo(e.target.value);
  }
  function AddTodo() {
    setItemList([...itemList, { item: Todo, key: Date.now() }]);

    setTodo(" ");
  }
  function handleEnter(e) {
    if (e.key === "Enter") {
      console.log("do validate");
      AddTodo();
    }
  }
  if (onChangeHandler === "") {
    setTodo("");
  }
  const resetForm = () => {
    setTodo("");
    setItemList("");
  };

  return (
    <>
      <div className="container">
        <div className="input-field">
          <h5 className="h5-home">
            <span className="span-home">my</span>TodoList
          </h5>
          <input
            type="text"
            value={Todo}
            onChange={onChangeHandler}
            className="input"
            placeholder="write something here...."
            onKeyDown={handleEnter}
          />
          <Button
            className="btn btn-primary-sm"
            id="btn"
            onClick={() => {
              AddTodo();
            }}
            onKeyDown={handleEnter}
            onSubmit={resetForm}
          >
            {" "}
            Add
          </Button>
        </div>

        {itemList ? (
          <Add itemList={itemList} setItemList={setItemList} />
        ) : null}
      </div>
    </>
  );
}

export default Home;
