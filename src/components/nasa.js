import React from "react";
import Img from "./img";
import Text from "./text";

const Nasa = (props) => {
  const { data, title } = props;
  return (
    <div>
      <Img url={data.url} />
      <Text data={data} title={title} />
    </div>
  );
};

export default Nasa;
