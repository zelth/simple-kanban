import { Button, Card } from "react-bootstrap";

const Tasks = ({ tasks, handleClickDeleteTask, columnId }) => {
  return (
    <>
      {tasks
        .filter((task) => task.column === columnId)
        .map((task) => (
          <Card
            border="dark"
            bg="secondary"
            key={task.id}
            style={{ marginTop: "1rem" }}
          >
            <Card.Body>
              <Card.Title>{task.label}</Card.Title>
              <Button
                variant="danger"
                onClick={() => handleClickDeleteTask(task.id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Tasks;
