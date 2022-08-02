import React from "react";
import "./List.css";
import PartItem from "../PartItem/PartItem";
import Spinner from "../Spinner/Spinner";
import { Part } from "../../models/part";

interface ListProps {
  data: Part[];
  loading: boolean;
  message: string;
}

const List: React.FC<ListProps> = ({ data, loading, message }) => {
  return (
    <div className="list-container">
      <div className="list-titles-container">
        <h2>Name</h2>
        <h2>Type</h2>
        <h2>Price</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        data.map((element, index) => (
          <PartItem
            key={index}
            name={element.name}
            type={element.type}
            price={element.price}
          />
        ))
      ) : (
        <h3 className="list-message">{message}</h3>
      )}
    </div>
  );
};

export default List;
