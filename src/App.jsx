import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

const App = () => {
  const [category, setCategory] = useState("General");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <News category={category} />
    </div>
  );
};

export default App;
