// frontend/src/components/Card.js
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./styles/Card.css";
import { Button, Form } from "react-bootstrap";

const Card = ({ card, index, list, setLists, lists }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardTitle, setCardTitle] = useState(card.title);
  const [cardDescription, setCardDescription] = useState(card.description);

  const handleSave = () => {
    const updatedCard = {
      ...card,
      title: cardTitle,
      description: cardDescription,
    };
    const updatedList = {
      ...list,
      cards: list.cards.map((c) => (c.id === card.id ? updatedCard : c)),
    };

    setLists(lists.map((l) => (l.id === list.id ? updatedList : l)));
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className="card-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditing ? (
            <div>
              <Form.Control
                type="text"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
              />
              <Form.Control
                value={cardDescription}
                onChange={(e) => setCardDescription(e.target.value)}
                placeholder="Enter description"
                as="textarea"
                className="outline-secondary mt-2"
              />
              <Button variant="outline-primary mt-2" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="outline-danger mt-2 ms-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Button
                variant="outline-secondary"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
