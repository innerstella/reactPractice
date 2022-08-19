// 최종 주문 내역 화면

import React, { useState } from "react";

function Recipt() {
  //전체 주문 내역 받아오기
  const recipt = { 아메리카노: 1, 카페라떼: 2 };
  let keys = Object.keys(recipt);
  let key_1 = keys[0];
  let key_2 = keys[1];
  //메뉴 1
  const [menu_1, setAmount_1] = useState(recipt[key_1]);
  const onPlus_1 = () => setAmount_1(menu_1 + 1);
  const onMinus_1 = () => {
    if (menu_1 === 1) {
      return;
    }
    setAmount_1(menu_1 - 1);
  };
  //메뉴2
  const [menu_2, setAmount_2] = useState(recipt[key_2]);
  const onPlus_2 = () => setAmount_2(menu_2 + 1);
  const onMinus_2 = () => {
    if (menu_2 === 1) {
      return;
    }
    setAmount_2(menu_2 - 1);
  };

  return (
    <div>
      <hr />
      <p>[최종 주문 내역 화면]</p>
      <h3>주문 내역</h3>
      <span>아메리카노 ({menu_1})</span>
      <button onClick={onPlus_1}>+</button>
      <button onClick={onMinus_1}>-</button>
      <button>❌</button>
      <br></br>
      <span>카페라떼 ({menu_2})</span>
      <button onClick={onPlus_2}>+</button>
      <button onClick={onMinus_2}>-</button>
      <button>❌</button>
    </div>
  );
}

export default Recipt;
