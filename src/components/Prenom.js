import React from "react";

const Prenom = (props) => {
  return (
    <div>
      {props.userPrenom === "Emna" ? (
        <>
          Hello{props.userPrenom}
          <img src={props.userImage} />
        </>
      ) : (
        "Hello, there!"
      )}
    </div>
  );
};

export default Prenom;
