import React from "react";
import "./Part.css";
import { useParams, Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import usePart from "../../hooks/usePart";
import Spinner from "../../components/Spinner/Spinner";

const Part: React.FC = () => {
  const { name } = useParams();
  //custom hook for fetching part
  const {part, message, loading} = usePart(name);
  return (
    <Wrapper>
      <div className="part-title-container">
        <Link className="part-link" to="/">
          <i className="fa-solid fa-arrow-left" />
        </Link>
        <h1 className="title">Store Parts</h1>
      </div>
      <div className="part-container">
        <div className="part-titles-container">
          <h2>Name</h2>
          <h2>Type</h2>
          <h2>Price</h2>
        </div>
        {loading ? (
          <Spinner />
        ) : part.length > 0 ? (
          part.map((element, index) => (
            <div key={index} className="part-element-container">
              <p className="part-element">{element.name}</p>
              <p className="part-element">{element.type}</p>
              <p className="part-element">{element.price}</p>
            </div>
          ))
        ) : (
          <h3>{message}</h3>
        )}
      </div>
    </Wrapper>
  );
};

export default Part;
