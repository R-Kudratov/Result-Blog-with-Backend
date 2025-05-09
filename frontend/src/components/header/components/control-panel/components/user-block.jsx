import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../../../actions'
import { Icon } from '../../../../../components'
import { selectUserLogin } from '../../../../../selectors'
import styled from 'styled-components'

const UserName = styled.div`
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
`

const UserBlockContainer = ({ className }) => {
	const dispatch = useDispatch()
	const login = useSelector(selectUserLogin)

	const onLogout = () => {
		dispatch(logout())
		sessionStorage.removeItem('userData')
	}

	return (
		<div className={className}>
			<UserName>{login}</UserName>
			<Icon id="fa-sign-out" margin="0 0 0 10px" button={true} onClick={onLogout} />
		</div>
	)
}

export const UserBlock = styled(UserBlockContainer)`
	display: flex;
	width: 200px;
	align-items: center;
	justify-content: flex-end;
`
