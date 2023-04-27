import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";
import { useState } from "react";

import Table from "./Table/Table";
import axios from "axios";

const Search = () => {
  const [Query, setQuery] = useState("");
  const [Data, setData] = useState([]);
  useEffect(() => {
    const filterstack = async () => {
      const response = await axios.get(`http://localhost:2023/?q=${Query}`);
      setData(response.data);
    };
    filterstack();
  }, [Query]);

  return (
    <div className="SearchContainer">
      <h1>Searching Component</h1>
      <input
        type="text"
        placeholder="Search.."
        className="search-input"
        value={Query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="tables">
        <Table data={Data} />
      </div>
    </div>
  );
};

export default Search;
