import React, { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import SearchInput from "../../components/SearchInput/SearchInput";
import Select from "../../components/Select/Select";
import SortBtn from "../../components/SortBtn/SortBtn";
import useTypes from "../../hooks/useTypes";
import useParts from "../../hooks/useParts";
import List from "../../components/List/List";
import { Part } from "../../models/part";
import "./Home.css";

const Home: React.FC = () => {
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");
  //custom hook for fetching types
  const [types] = useTypes();
  //custom hook for fetching parts
  const { parts, message, loading } = useParts(query, type);

  //set type selected by user
  const typeHandler = (typeSelected: string) => {
    if (typeSelected === "Type") {
      setType("");
    } else {
      setType(typeSelected);
    }
  };

  //set query to value inserted by user
  const queryHandler = (queryInserted: string) => {
    setQuery(queryInserted.toLowerCase());
  };

  // change sort order when user clicks sort button
  // Initially, list has no sort order
  const sortHandler = () => {
    switch (sort) {
      case "":
        setSort("asc");
        break;
      case "asc":
        setSort("desc");
        break;
      case "desc":
        setSort("");
        break;
      default:
        break;
    }
  };

  //sort array by given order
  const sortParts = (partsArray: Part[]): Part[] => {
    if (partsArray.length > 0) {
      const sortedArray = [...partsArray];
      switch (sort) {
        case "asc":
          sortedArray.sort(
            (a, b) =>
              Number(a.price.replace("$", "")) -
              Number(b.price.replace("$", ""))
          );
          break;
        case "desc":
          sortedArray.sort(
            (a, b) =>
              Number(b.price.replace("$", "")) -
              Number(a.price.replace("$", ""))
          );
          break;
        default:
          break;
      }
      return sortedArray;
    } else {
      return partsArray;
    }
  };

  return (
    <Wrapper>
      <h1 className="title">Store Parts</h1>
      <div className="filters-container">
        <SearchInput queryHandler={queryHandler} />
        <Select data={types} typeHandler={typeHandler} defaultLabel="Type" />
        <SortBtn data={sort} sortHandler={sortHandler} />
      </div>
      <List data={sortParts(parts)} loading={loading} message={message} />
    </Wrapper>
  );
};

export default Home;
