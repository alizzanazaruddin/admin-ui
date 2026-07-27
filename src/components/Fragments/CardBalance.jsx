import React from "react";
import Card from "../Elements/Card";

function CardBalance(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Total Balance"
        desc={data.map((item) => (
          <div key={item.id}>{item.bankName}</div>
        ))}
      />
    </>
  );
}

export default CardBalance;