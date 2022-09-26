import React from "react";

function Section({ subtitle, title, image }) {
  return (
    <section style={{ backgroundImage: `url(${image})` }}>
      <div className="section-inner">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
        <button href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </button>
      </div>

      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Section;
