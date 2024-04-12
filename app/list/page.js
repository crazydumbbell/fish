"use client";

import Image from "next/image";
import { useState } from "react";
//!레이아웃 쉬프트 방지하기때문에 img 태그보다는 Image 임포트해서 쓰자

const List = () => {
  let charge = ["99$", "77$", "55$"];
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <h4>상품목록</h4>

      <span>{수량[0]}</span>
      <button
        onClick={() => {
          let copy = [...수량];
          copy[0]++;
          수량변경(copy);
        }}
        //!useState가 어레이일때는 수량을 복사해서 복사본으로 컨트롤해야댐(어레이복사분법으로)
      >
        +
      </button>
      <span>{수량[1]}</span>
      <button>+</button>
      <span>{수량[2]}</span>
      <button>+</button>

      {상품.map((a, i) => {
        return (
          <div key={i}>
            <h4 className="p-10 m-1 bg-slate-500 flex flex-col">
              {/* <img src={"/food" + i + ".png"} /> */}
              <img src={`/food${i}.png`} />
              //!포인트
              {a} {charge[i]}
              <span>{수량[i]}</span>
              <button
                onClick={() => {
                  let copy = [...수량];
                  copy[i]++;
                  수량변경(copy);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  let copy = [...수량];
                  copy[i]--;
                  수량변경(copy);
                }}
              >
                -
              </button>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default List;
