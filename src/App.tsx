import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Router from "./router";
function test(a: string) {
  console.log(a);
}
test(123);

function App() {
  const [count, setCount] = useState(0);
  console.log("import.meta.env", import.meta.env);
  return (
    <div>
      <Link to="/">home page</Link>
      &nbsp;
      <Link to="/about">about page</Link>
      <Router />
    </div>
  );
}

export default App;
