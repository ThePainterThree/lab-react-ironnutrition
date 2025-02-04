import React from "react";
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const { food, onDelete } = props;

    const handleDelete = () => {
        // Call the onDelete function and pass the food object to be deleted
        onDelete(food.name);
      };


    return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;