import * as React from "react";
import Layout from "../components/layout";

const Counter = ({ count }) => {
  const element = <div>Counter</div>; // no change, no update to the DOM
  console.log({ element }); // triggers on each _render_, despite no DOM update
  return element;
};

const Reconciliation = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Layout>
      <button onClick={() => setCount((old) => old + 1)}>Increment</button>
      <Counter count={count} />
    </Layout>
  );
};

export default Reconciliation;
