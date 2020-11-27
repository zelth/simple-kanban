import React, { useState } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import Columns from "./components/Columns";

let initialColumns = [
  {
    id: "todo",
    label: "Todo",
  },
  {
    id: "in-progress",
    label: "In Progress",
  },
  {
    id: "completed",
    label: "Completed",
  },
];
let initialTasks = [
  {
    id: "buy-eggs",
    label: "Buy Eggs",
    column: "todo",
  },
  {
    id: "cook-dinner",
    label: "Cook Dinner",
    column: "todo",
  },
  {
    id: "creating-mock-markup",
    label: "Creating Mock Markup",
    column: "in-progress",
  },
];

function App() {
  const [addColumns, setAddColumn] = useState(false);
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState(initialTasks);
  const [name, setName] = useState("");

  const handleClose = () => setAddColumn(false);
  const handleShow = () => setAddColumn(true);

  const handleClickAddColumn = () => {
    const label = name;
    label && setColumns([...columns, { label, id: label.toLowerCase() }]);
  };

  const handleClickDeleteColumn = (columnId) => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  const handleClickDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleClickAddTask = (columnId) => {
    const label = prompt("What's the task name?");
    label &&
      setTasks([
        ...tasks,
        { label, id: label.toLowerCase(), column: columnId },
      ]);
  };

  return (
    <div id="main-wrapper">
      <section style={{ padding: "5rem 0" }}>
        <Container>
          <h1 style={{ textAlign: "center" }}>Simple Kanban</h1>
        </Container>
      </section>
      <section style={{ background: "whitesmoke", padding: "5rem 0" }}>
        <Container>
          <Columns
            data={{
              columns,
              tasks,
            }}
            actions={{
              handleClickDeleteColumn,
              handleClickDeleteTask,
              handleClickAddTask,
            }}
          />
        </Container>
      </section>
      <Container style={{ marginTop: "2rem", textAlign: "center" }}>
        <Button size="lg" variant="success" onClick={handleShow}>
          {/* onClick={handleClickAddColumn}  */}
          Add Column
        </Button>

        <Modal
          show={addColumns}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Column Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Column Name"
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Text className="text-muted">Please input label</Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onSubmit={handleClickAddColumn}
            >
              Submit
            </Button>
          </Form>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
