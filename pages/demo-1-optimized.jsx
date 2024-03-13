import * as React from "react";
import Layout from "../components/layout";

const Counter = ({ count }) => {
  const element = <div>Counter</div>;
  console.log({ element });
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
