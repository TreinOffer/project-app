import React, { useState } from 'react';
import imgs from "../../imgs/arrayImagens";
import './estilo.css';
import { useDrag,DndProvider } from "react-dnd";

// const [{isDragging},drag] = useDrag((id) => {
//   accept: "image",
//   item
//   collect: (monitor) => ({
//     isDragging: monitor.isDragging(),
//   });
// });

const Ed = () => {

  // return(
  //   <DndProvider>
  //     <div className="dropSection"
  //     style={{border: "4px solid black", margin: "auto auto"}}
  //     ref={drop}
  //     ></div>
  //     <div className="dragSection"
  //     style={{border: "2px solid black"}}
  //     ref={drag}
  //     >
  //       <img src={imgs.empresa} alt="" srcset="" />
  //     </div>
  //   </DndProvider>
  // )

}

export default Ed;
