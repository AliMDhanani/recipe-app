import React from "react";


const Skills = () => {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

  return (
    <div className="section skills">
      <div className="column img">
        <img src="/img/food-gallery/img_10.jpg" alt="" />
      </div>
      <div className="column typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        { list.map((item, index) =>(
            <p className="skills__list" key={index}>{item}</p>
        )) }
        <button className="btn">signup now</button>
      </div>
    </div>
  );
};

export default Skills;
