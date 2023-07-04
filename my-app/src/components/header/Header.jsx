import Logo from '../../assets/logo.svg'
import css from './Header.module.css'
import { Profile } from './Profile/profile'

function Header() {
	return (
		<header className={css.header}>
			<img className={css.logo} src={Logo} alt='' />
			<h1 className={css.title}>Awesome Kanban Board</h1>
			{/* <p className={css.sprint}>Sprint #2023.1.8</p> */}
			<Profile className={css.Profile} ></Profile>
		</header>
	)
}

export default Header