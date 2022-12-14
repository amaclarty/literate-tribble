import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  return (
    <div className="poems-container">
      {poems.map(poem => {
        return(
          <Poem poem={poem}/>
        )
      })}
    </div>
  );
}

export default PoemsContainer;
