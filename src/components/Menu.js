// 메뉴판 및 중간 주문 내역
import React, { useState } from "react";
// import { Link } from "react-router-dom";
function Menu() {
  const [menu1, setMenu1] = useState([]);
  const onClick1 = (event) => {
    event.preventDefault();
    setMenu1((currentArray) => ["menu1", ...currentArray]);
  };
  const [menu2, setMenu2] = useState([]);
  const onClick2 = (event) => {
    event.preventDefault();
    setMenu2((currentArray) => ["menu2", ...currentArray]);
  };

  const recipt = [
    { name: "아메리카노", amount: menu1.length },
    { name: "카페라떼", amount: menu2.length },
  ];

  const reciptPop = (event, value) => {
    setMenu1([]);
    console.log(value);
  };

  const result = recipt
    .filter((data) => data.amount !== 0)
    .map((data) => {
      return (
        <div>
          <li>{data.name + " " + data.amount + "잔"}</li>
          <button value={data.name} onClick={reciptPop}>
            ❌
          </button>
        </div>
      );
    });

  return (
    <div>
      <p>[메뉴판 및 중간 주문 내역]</p>
      <h3>Menu</h3>
      <span>아메리카노</span>
      <button onClick={onClick1}>🛒</button>
      <br></br>
      <span>카페라떼</span>
      <button onClick={onClick2}>🛒</button>
      <h3>-----------------------</h3>
      {result}
    </div>
  );
}

export default Menu;
