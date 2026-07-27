import React from "react";
import Card from "../Elements/Card";

function CardGoal(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Goals"
        desc=<div>
          {data.targetAmount} {data.presentAmount}
        </div>
      />
    </>
  );
}

export default CardGoal;