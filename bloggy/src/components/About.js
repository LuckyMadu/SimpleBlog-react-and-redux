import React from "react";
import Higher from "../hoc/Higher";
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        mollitia est? Qui quisquam, aspernatur soluta impedit blanditiis
        ratione, dignissimos vero dicta debitis suscipit recusandae esse quod
        est velit deserunt inventore.
      </p>
    </div>
  );
};

export default Higher(About);
