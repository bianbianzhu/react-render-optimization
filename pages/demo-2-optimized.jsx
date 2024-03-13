import { faker } from "@faker-js/faker";
import * as React from "react";
import randomNumber from "../utils/random-number";
import Layout from "../components/layout";

const randomArray = (size = 10) =>
  new Array(size).fill(0).map(() => ({
    id: faker.datatype.uuid(),
    value: randomNumber(),
  }));

export default function List() {
  const [data, setData] = React.useState([]);

  const changeArray = () => {
    setData([...randomArray(1), ...data]);
  };

  return (
    <Layout>
      <button onClick={changeArray}>Add an item</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <hr />
      <FormDemo />
    </Layout>
  );
}

function FormDemo() {
  const [formKey, setFormKey] = React.useState(0);

  const resetForm = () => {
    setFormKey((old) => old + 1);
  };

  return (
    <>
      {/* 2.5 By leveraging the key, we can force the Form to remount */}
      <FormInner key={"form-" + formKey} />
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </>
  );
}

function FormInner() {
  const [form, setForm] = React.useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
