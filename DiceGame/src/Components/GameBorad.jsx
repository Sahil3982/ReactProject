// import React from 'react'
import { useState } from "react";
import "../App.css";

const GameBorad = () => {
  const [number, setNumber] = useState(3);

  function RandomNumberGenerate(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(num);
  }

  const showRules = () => {};
  return (
    <>
      <section
        style={{
          display: "flex",
          margin: "30px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <article
          style={{ flex: "1", textAlign: "center", marginBottom: "20px" }}
        >
          <span style={{ fontSize: "70px", fontWeight: "2000px" }}>0</span>
          <br />
          <strong>Total Score</strong>
        </article>
        <article
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div
            style={{ display: "flex", gap: "5px", justifyContent: "center" }}
          >
            <button className="my-button" style={{ padding: "1rem" }}>
              1
            </button>
            <button className="my-button" style={{ padding: "1rem" }}>
              2
            </button>
            <button className="my-button" style={{ padding: "1rem" }}>
              3
            </button>
            <button className="my-button" style={{ padding: "1rem" }}>
              4
            </button>
            <button className="my-button" style={{ padding: "1rem" }}>
              5
            </button>
            <button className="my-button" style={{ padding: "1rem" }}>
              6
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <strong>Select Number</strong>
          </div>
        </article>
      </section>

      <section>
        <center>
          <img
            src={`/Images/dice${number}.svg`}
            style={{ width: "150px" }}
            onClick={() => RandomNumberGenerate(1, 6)}
          />
        </center>
      </section>

      <section>
        <center>
          <h3>Click on the Dice to roll</h3>
          <button
            style={{
              padding: "5px",
              paddingLeft: "70px",
              paddingRight: "70px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            Reset
          </button>
          <br />
          <button
            onClick={showRules}
            style={{
              padding: "5px",
              paddingLeft: "50px",
              paddingRight: "50px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Show Rules
          </button>
        </center>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
};

export default GameBorad;
