import { Row, Col, Card, Button } from "react-bootstrap";
import Tasks from "../components/Tasks";

const Columns = ({
  data: { columns, tasks },
  actions: {
    handleClickDeleteTask,
    handleClickAddTask,
    handleClickDeleteColumn,
  },
}) => {
  console.log(columns, "column");

  return (
    <>
      <Row>
        {columns.map((column) => (
          <Col lg={4} style={{ marginTop: "1rem" }} key={column.id}>
            <Card bg="dark" text="light" style={{ width: "100%" }}>
              <Card.Body>
                <h2>{column.label}</h2>
                <Tasks
                  tasks={tasks}
                  handleClickDeleteTask={handleClickDeleteTask}
                  columnId={column.id}
                />
                <Button
                  variant="success"
                  onClick={() => handleClickAddTask(column.id)}
                  style={{ marginRight: "10px", marginTop: "1rem" }}
                >
                  Add Task
                </Button>
                {/* Show only if column has no tasks */}
                {tasks.filter((task) => task.column === column.id).length <
                1 ? (
                  <Button
                    variant="danger"
                    onClick={() => handleClickDeleteColumn(column.id)}
                    style={{ marginRight: "10px", marginTop: "1rem" }}
                  >
                    Remove Column
                  </Button>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Columns;
