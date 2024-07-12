import React from "react";
import "./auto.css";

const List = ({ items, activeIndex }: any) => {
  return (
    <div>
      {items.map((item: any, index: number) => {
        return (
          <div className={activeIndex === index ? "option active" : "option"}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default List;
