import React from "react";

const Img = (props) => {
  return (
    <main>
      <img src={props.url} alt={props.title} />
    </main>
  );
};

export default Img;
