import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [], 
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
      },
    });
  };
  
  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <h1>Tasks</h1>  
        <form>
          <label>
            Add Task: <input
                        type="text"
                        value={task.text}
                        onChange={this.handleChange} />
          </label>
          <button onClick={this.onSubmitTask}>Submit</button>
        </form>
        <div>
          <Overview tasks={tasks} />
        </div>
      </div>
    );
  }
}

export default App;
