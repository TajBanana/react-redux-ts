import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "./store";

function App() {
  const dispatch = useDispatch();

  type Counter = {
    counter: number
  }

  const count = useSelector<Counter, number>((state) => state.counter);

    const increment = () => {
      dispatch(actions.increment())
    };

    const decrement = () => {
      dispatch(actions.decrement())
    };

  function addBy() {
    dispatch(actions.addBy(10))
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>add by</button>
    </div>
  );
}

export default App;
