import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    checked: true,
    tasks: []
  };

  addTask = e => {
    let length = this.state.tasks.length;
    let task = {
      taskText: this.state.taskText,
      taskStatus: false,
      taskId: this.state.tasks.length
    };
    console.log(task);
    this.state.tasks.push(task);
    console.table(this.state.tasks);
    this.setState({ taskText: "" });
    console.log(this.state.taskText);
    this.setState({ taskId: "" });
  };

  readTask = e => {
    this.setState({ taskText: e.target.value });
  };

  deleteTask = e => {
    let key = e.target.dataset.task;
    let tasks = this.state.tasks.slice();
    tasks.splice(key, 1);
    this.setState({ tasks: tasks });
  };

  isDone = e => {
    const newState = this.state;
    let tasks = this.state.tasks.slice();
    const index = e.currentTarget.dataset.task;
    console.log(index);
    tasks[index].taskStatus = !tasks[index].taskStatus;
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <textarea
          name="task"
          cols="30"
          rows="10"
          value={this.state.taskText}
          onChange={this.readTask}
        />
        <button onClick={this.addTask}>Add task</button>
        <ol>
          {this.state.tasks.map((elem, idx) => (
            <li className="task" key={idx} data-task={idx}>
              <div className={this.state.tasks[idx].taskStatus ? "done" : ""}>
                {elem.taskText}
              </div>
              <button onClick={this.deleteTask} data-task={idx}>
                delete
              </button>
              <button onClick={this.isDone} data-task={idx}>
                done
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default CreateTask;
