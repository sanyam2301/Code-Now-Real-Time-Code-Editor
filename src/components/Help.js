import React from "react";
import Collapse from "./Collapse";
function Help() {
  return (
    <>
      <div className="help-section">
        <h1>FAQ</h1>
        <Collapse question={"What is Code Now?"}>
          <p>
            Code Now is a real-time code editor web application that allows
            multiple users to edit and collaborate,change on a code in
            real-time. It consists of a code editor that provides syntax
            highlighting,auto closing brackets. Real-time code editors are often
            used in online coding environments, such as coding challenges and
            coding tutorials, where users can practice and learn coding skills
            in real-time. They are also used in team collaboration tools, such
            as project management and team communication platforms, where
            developers can collaborate and share code in real-time. Overall,
            real-time code editors provide a convenient and efficient way for
            users to edit and collaborate on code in real-time. They are useful
            for collaborative coding projects, and can help to improve the
            productivity and collaboration of development teams.
          </p>
        </Collapse>
        <Collapse question={"What is the use of 'Code Now' "}>
          Code Now is useful for collaborative coding and programming projects,
          where multiple users need to work on the same codebase simultaneously.
        </Collapse>
        <Collapse
          question={
            "Are there any limitations or challenges to using Code Now?"
          }
        >
          One potential limitation of Code Now is the need for a stable and fast
          internet connection. Since Code Now rely on real-time communication
          and synchronization between users, they may not work well in
          environments with poor internet connectivity or high latency.
        </Collapse>
        <Collapse question={"What other things you can do with Code Now"}>
          Code Now acting as a real time code editor, may also act as way to
          present your code-snippets in fashionable way
        </Collapse>
      </div>
    </>
  );
}

export default Help;
