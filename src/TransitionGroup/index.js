import React, {useState} from 'react';
import { Button, Card, Form  } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';


import './styles.scss';



function Todo({ todo, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(todo)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(todo)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function TransitionGroupAnimation() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    setTodos(items => [
      ...items,
      { id: uuidv4(), text },
    ]);
  };

  const markTodo = (todo) => {

    setTodos(items => items.map((item)=> {
        if (item.id === todo.id) {
          item.isDone = true
        }
        return item
      })
    )
  };

  const removeTodo = todo => {
    setTodos(items =>
      items.filter(item => item.id !== todo.id)
    )
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <TransitionGroup className="todo-list">
          {todos.map((todo) => (
            <CSSTransition
              key={todo.id}
              timeout={500}
              classNames="item"
            >
              <Card>
                <Card.Body>
                  <Todo
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default TransitionGroupAnimation;