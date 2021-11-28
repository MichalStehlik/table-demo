import {useMemo} from "react";
import Table from "./components/Table";
import './App.css';

// https://react-table.tanstack.com/

function App() {
  const columns = useMemo(
    () => [
      {Header: "First Name", accessor: "firstname"},
      {Header: "Last Name", accessor: "lastname"},
      {Header: "Age", accessor: "age"},
      {Header: "Visits", accessor: "visits"}
    ],
    []
  );

  const data = useMemo(
    () => {
      return [
        {firstname: "Alois", lastname: "Antl", age: 12, visits: 25, status: "alive", progress: 80},
        {firstname: "Boris", lastname: "Blekota", age: 18, visits: 10, status: "barely alive", progress: 100},
        {firstname: "Cyril", lastname: "Cudný", age: 10, visits: 10, status: "barely alive", progress: 100},
        {firstname: "Diana", lastname: "Dvořáková", age: 35, visits: 6, status: "very alive", progress: 100},
    ]
    },[]);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
