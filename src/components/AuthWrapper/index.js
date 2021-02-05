import "./styles.scss";

import React from "react";

const index = (props) => {
  const { headline, children } = props;

  return (
    <div className="authWrapper">
      <div className="wrap">
        {headline && <h2>{headline}</h2>}
        <div className="children">{children && children}</div>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
