import React from 'react';
import "./Wrapper.css";

interface props {
    children?: React.ReactNode
}

const Wrapper: React.FC<props> = ({children}) => {
  return (
    <div className="wrapper-container">{children}</div>
  )
}

export default Wrapper