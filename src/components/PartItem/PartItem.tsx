import React from "react";
import "./PartItem.css";
import { useNavigate } from "react-router-dom";

interface PartItemProps{
  name: string,
  type: string,
  price:string
}

const PartItem: React.FC<PartItemProps> = ({name, type, price}) => {
  const history = useNavigate();
  return (
    <div className="item-container" onClick={() => history(`/part/${name}`)}>
      <p className="item-category">{name}</p>
      <p className="item-category">{type}</p>
      <p className="item-category">{price}</p>
    </div>
  )
}

export default PartItem;