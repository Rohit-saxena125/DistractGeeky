import React, { useState, useEffect } from 'react';
import "../css/plan.css";





const getTime = (day = 0) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currTime = new Date();
  currTime.setDate(currTime.getDate() + day);
  return({
    day: days[currTime.getDay()],
    month: months[currTime.getMonth()],
    year: currTime.getFullYear(),
    date: currTime.getDate()
  })
}

const defaultTasks = [
  {
    date: getTime(),
    tasks: [
      {
        task: "Todays Video Task",
        done: false
      }
    ]
  },
  {
    date: getTime(1),
    tasks: [
      {
        task: "Go to the cinema",
        done: true
      },
      {
        task: "Go to the park",
        done: false
      }
    ]
  },
  {
    date: getTime(2),
    tasks: [
      {
        task: "Play a game",
        done: false
      }
    ]
  },
  {
    date: getTime(3),
    tasks: []
  },
  {
    date: getTime(4),
    tasks: []
  },
  {
    date: getTime(5),
    tasks: []
  },
  {
    date: getTime(6),
    tasks: []
  }
]

const Header = (props) => {
  const {tasks, currDay, handleOtherDay} = props;
  const currentDay = tasks[currDay].date.day;
  const currentMonth = tasks[currDay].date.month;
  const currentYear = tasks[currDay].date.year;
  const currentDate = tasks[currDay].date.date;
  const date = `${currentMonth} ${currentDate}, ${currentYear}`
  const addClassName = () => {
    return currDay == 0 ? "fas fa-chevron-left left" : null
  }
  
  return(
    <div className="header">
      <i
        className={"fas fa-chevron-left left" + (currDay == 0 ? " disabled" : null)}
        onClick={() => props.handleOtherDay("prev")}
      >
      </i>
      <div className="center">
        <p>{currentDay}</p>
        <p className="date">{date}</p>
      </div>
      <i
        className={"fas fa-chevron-right right" + (currDay == tasks.length - 1 ? " disabled" : null)}
        onClick={() => props.handleOtherDay("next")}
      >
      </i>
    </div>
  )
}

const InputForm = (props) => {
  const {value, handleAddTask, handleAddTaskSubmit} = props;
  return(
    <form className="addTask" onSubmit={handleAddTaskSubmit}>
      <i className="fas fa-list"></i>
      <input
        type="text"
        value={value}
        onChange={handleAddTask}
        placeholder="Add a task..."
      />
    </form>
  )
}

const Task = (props) => {
  const {task, done, handleTaskDone, handleDeleteTask, index} = props;
  return(
    <li>
        <input
          type="checkbox"
          checked={done}
          onChange={() => handleTaskDone(index)}
        />
        <span className="checkmark animate"></span>{task}
        <i className="fas fa-times delete-task"
          onClick={() => handleDeleteTask(index)}
        ></i>
    </li>
  )
}

const TaskList = (props) => {
  const {tasks, currDay, handleTaskDone, handleDeleteTask} = props;
  return(
    <ul className="taskList">
      {tasks[currDay].tasks.map((task, id)=>
        <Task
          key={id}
          index={id}
          task={task.task}
          done={task.done}
          handleTaskDone={handleTaskDone}
          handleDeleteTask={handleDeleteTask}
        />)}
    </ul>
  )
}

class App extends React.Component{
  state = {
    tasks: this.props.tasks,
    currDay: 0,
    taskInput: "",
  }

  handleTaskDone = (index) => {
    const {currDay, tasks} = this.state;
    const newTasks = [...tasks];
    newTasks[currDay].tasks[index].done = !newTasks[currDay].tasks[index].done;
    
    this.setState({
      tasks: newTasks
    });
  }
  
  handleDeleteTask = (index => {
    const {currDay, tasks} = this.state;
    const newTasks = [...tasks];
    newTasks[currDay].tasks.splice(index, 1);
    
    this.setState({
      tasks: newTasks
    });
  })

  handleOtherDay = (day) => {
    const {currDay, tasks} = this.state;
    
    if(day == "prev" && currDay>0){
      this.setState({currDay: currDay-1})
    }
    else if(day == "next" && currDay<tasks.length-1){
      this.setState({currDay: currDay+1})
    }
  }
  
  handleAddTask = (e) => {
    e.preventDefault();
    const {taskInput} = this.state;
    this.setState({
      taskInput: e.target.value
    })
    console.log("changing input: " + taskInput)
    
  }
  
  handleAddTaskSubmit = (e) => {
    e.preventDefault();
    const {taskInput, currDay, tasks} = this.state;
    if(taskInput!=""){
      const newTasks = [...tasks];
      console.log("Task added: " + taskInput);
      newTasks[currDay].tasks.push(
        {
          task: taskInput,
          done: false
        }
      )
      this.setState({
        tasks: newTasks
      })
    }
    // Reset input value after add one
    this.setState({
      taskInput: ""
    })
  }

  render(){
    const {tasks, currDay, taskInput} = this.state;
    return(
      <React.Fragment>
        <Header
          tasks={tasks}
          currDay={currDay}
          handleOtherDay={this.handleOtherDay}
        />
        <InputForm
          value={taskInput}
          handleAddTask={this.handleAddTask}
          handleAddTaskSubmit={this.handleAddTaskSubmit}
        />
        <TaskList
          tasks={tasks}
          currDay={currDay}
          handleTaskDone={this.handleTaskDone}
          handleDeleteTask={this.handleDeleteTask}
        />
      </React.Fragment>
    );
  }
}

// ReactDOM.render(<App tasks={defaultTasks}/>, document.getElementById("todoApp"));

export default function Plan() {
  return (
    <div>
      <h1>Plan</h1>
      <App tasks={defaultTasks}/>
    </div>
  )
}
