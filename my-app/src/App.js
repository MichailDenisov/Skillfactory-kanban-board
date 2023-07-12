import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Board from './components/board/Board'
import TaskDetail from './components/task-detail/TaskDetail'
import Main from './components/main/Main'

function App() {
	const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

  return (
	
		<div className='wrapper'>
			<Router>
				<Header />
				<Main>
				<Routes>
				{/* <Route tasks={tasks} setTasks={<Main/>} /> */}
					<Route path='/'element= {<Board {...tasks}{...setTasks}/>} />,
					
		 			<Route path='/tasks/:taskId' element={ <TaskDetail {...tasks}{...setTasks}/> }/>
				{/* <Main tasks={tasks} setTasks={setTasks} /> */}
				</Routes>
				</Main>
				<Footer tasks={tasks} />
			</Router>
		</div>
  );
}

export default App