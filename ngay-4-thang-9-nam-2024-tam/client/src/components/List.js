import React, { useState } from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import { Button, Form } from "react-bootstrap";
import "./List.css";

const List = ({ list, setLists, lists }) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [listTitle, setListTitle] = useState(list.title);

  const addCard = () => {
    if (newCardTitle.trim() === "") return;
    const newCard = {
      id: (list.cards.length + 1).toString(),
      title: newCardTitle,
      description: "",
    };
    const updatedList = { ...list, cards: [...list.cards, newCard] };
    setLists(lists.map((l) => (l.id === list.id ? updatedList : l)));
    setNewCardTitle("");
    setIsAddingCard(false);
  };

  const handleListTitleChange = () => {
    const updatedList = { ...list, title: listTitle };
    setLists(lists.map((l) => (l.id === list.id ? updatedList : l)));
    setIsEditingTitle(false);
  };

  return (
    <Droppable droppableId={list.id}>
      {(provided) => (
        <div
          className="list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {/* List Title Editing */}
          <div className="list-header mb-3">
            {isEditingTitle ? (
              <Form.Control
                type="text"
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
                onBlur={handleListTitleChange}
                autoFocus
                className="mb-2"
              />
            ) : (
              <h4
                onClick={() => setIsEditingTitle(true)}
                className="list-title"
              >
                {list.title}
              </h4>
            )}
          </div>

          {/* Cards */}
          {list.cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              list={list}
              setLists={setLists}
              lists={lists}
            />
          ))}

          {provided.placeholder}

          {/* Add Card Section */}
          {isAddingCard ? (
            <div className="add-card-section">
              <Form.Control
                type="text"
                placeholder="Enter card title..."
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
                className="mb-2"
              />
              <Button
                variant="outline-success"
                onClick={addCard}
                className="mr-2"
              >
                Add Card
              </Button>
              <Button
                variant="outline-danger ms-2"
                onClick={() => setIsAddingCard(false)}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              variant="outline-primary"
              onClick={() => setIsAddingCard(true)}
            >
              + Add a card
            </Button>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default List;
