import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => {
  console.log(course)
    return <h1>{course}</h1>
}

const Part = (props) => {
  return (
  <p>
    {props.part} {props.excercises}
  </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} excercises={props.parts[0].excercises}/>
      <Part part={props.parts[1].name} excercises={props.parts[1].excercises}/>
      <Part part={props.parts[2].name} excercises={props.parts[2].excercises}/>
    </div>
  )
}
  
const Total = (props) => {
  return (
    <p>Number of excercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        excercises: 10
  },
  {
    name:'Using props to pass data',
    excercises: 7
  },
  {
    name: 'State of component',
    excercises: 14
  }
]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)