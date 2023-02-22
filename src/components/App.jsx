import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [array, setArray] = useState([]);

  function addItem(Note) {
    setArray((prevValue) => [...prevValue, Note]);
  }

  function deleteItem(id) {
    console.log(id);
    setArray((prevValue) => {
      return array.filter((item, index) => {
        return index !== id;
      });
    });
  }

  console.log(array);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {array.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDel={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
