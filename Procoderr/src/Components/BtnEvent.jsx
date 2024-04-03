import React from 'react';
let leftvar = 0;
let rightvar = 10;
const GenerateLeft = () => {
  leftvar++;
  rightvar--;
  console.log(rightvar);
  console.log(leftvar);
}
const GenerateRight = () => {
  leftvar--;
  rightvar++;
  console.log(rightvar);
  console.log(leftvar);
}


const BtnEvent = () => {
  return (
    <>
      <span>{leftvar}</span>
      <button onClick={GenerateLeft}><span> --^</span></button>
      <button onClick={GenerateRight}><span> ^--</span></button>
      <span>{rightvar} if(rightvar == )</span>
    </>
  );
};

export default BtnEvent;
