import { useSelector } from 'react-redux'
import { ControlButtons, LoginButton, UserBlock } from './components'
import { ROLE } from '../../../../constants'
import { selectUserRole } from '../../../../selectors'
import { checkAccess } from '../../../../utils'
import styled from 'styled-components'

const ControlPanelContainer = ({ className }) => {
	const userRole = useSelector(selectUserRole)
	const isAdmin = checkAccess([ROLE.ADMIN], userRole)

	return (
		<div className={className}>
			{userRole === ROLE.GUEST ? <LoginButton /> : <UserBlock />}
			<ControlButtons isAdmin={isAdmin} />
		</div>
	)
}

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 260px;
`
