import React from "react";
const Collapse = ({ collapsed, children, question }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <button
        className={`collapse-button ${isCollapsed ? "collapsed" : "expanded"}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {question}
        <i className="fa-solid fa-arrow-down"></i>
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};
export default Collapse;
