import * as React from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Grid from "../components/grid";
import NameFormatter from "../components/name-formatter";

import randomColor from "../utils/random-color";
import Layout from "../components/layout";

function App() {
  const [columnDefs, setColumnDefs] = React.useState(() => [
    { field: "id" },
    { field: "first_name", cellRenderer: NameFormatter },
    { field: "last_name" },
    { field: "email" },
    { field: "gender" },
    { field: "ip_address" },
  ]);

  const [pagination, setPagination] = React.useState(false);

  const updateColumns = () => {
    setColumnDefs([
      { field: "id", cellStyle: { background: randomColor() } }, // 4
      { field: "first_name", cellRenderer: NameFormatter },
      { field: "last_name" },
      { field: "email" },
      { field: "gender" },
      { field: "ip_address" },
    ]);
  };

  const togglePagination = () => {
    setPagination((old) => !old);
  };

  const defaultColDef = {
    filter: true,
    sortable: true,
  };

  return (
    <Layout>
      <button onClick={updateColumns} type="button">
        change columns
      </button>
      <button onClick={togglePagination}>toggle pagination</button>
      <Grid
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={pagination}
      />
    </Layout>
  );
}

export default App;
