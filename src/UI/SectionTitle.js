import React from "react";


const SectionTitle = ({ icon, title, className }) => {
  return (
    <div className={`section-title ${className}`}>
      <span>{icon}</span>
      <h1>{title}</h1>
    </div>
  )
};

export default SectionTitle;