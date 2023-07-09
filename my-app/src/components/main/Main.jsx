import {  Route, Routes } from 'react-router-dom'
import Board from '../board/Board'
import TaskDetail from '../task-detail/TaskDetail'
import css from './Main.module.css'


const Main = () => {
	return (
		<main className={css.main}>
			<Routes>
				{/* <Route path={'/'}>
					{<Board {...props} />}</Route> */}
				
				 <Route path="/" element={<Board />} /> 
				 {/* <Route path={'/tasks/:taskId'}>
				<TaskDetail {...props} /> 
				 </Route> */}
				<Route path= '/tasks/:taskId' element={<TaskDetail  />} />
			</Routes>
		</main>
		
	);
}

export default Main