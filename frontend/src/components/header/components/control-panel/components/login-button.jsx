import { Link } from 'react-router-dom'
import { Button } from '../../../../../components'

export const LoginButton = () => (
	<Link to="/login">
		<Button width="100px">Войти</Button>
	</Link>
)
