import React from "react";
import { FaEraser, FaPenAlt, FaPencilAlt } from "react-icons/fa";

import "./tools.styles.scss";

const Tools = function () {
  return (
    <div className="tools">
      <div>
        <FaEraser className="tool eraser" />
      </div>
      <div>
        <FaPenAlt className="tool pen" />
      </div>
      <div>
        <FaPencilAlt className="tool pencil" />
      </div>
    </div>
  );
};

export default Tools;
