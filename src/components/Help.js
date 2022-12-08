import React from "react";
import Collapse from "./Collapse";
function Help() {
  return (
    <>
      <div className="help-section">
        <h1>FAQ</h1>
        <Collapse question={"What is Code Now?"}>
          <p>
            It is an Editing, Collaboration application for all types of coders,
            that want to work on snippets, solving problems together.
          </p>
        </Collapse>
        <Collapse question={"How does it work"}></Collapse>
        <Collapse question={"How can you you use it"}></Collapse>
        <Collapse question={"You should try it out"}></Collapse>
      </div>
    </>
  );
}

export default Help;
