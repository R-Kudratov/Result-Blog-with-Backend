import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../../../../../components'
import styled from 'styled-components'

const ControlButtonsContainer = ({ className, isAdmin = false }) => {
	const navigate = useNavigate()

	return (
		<div className={className}>
			<Icon id="fa-backward" button={true} onClick={() => navigate(-1)} />
			{isAdmin && (
				<>
					<Link to="/post">
						<Icon id="fa-file-lines" button={true} />
					</Link>
					<Link to="/users">
						<Icon id="fa-users" button={true} />
					</Link>
				</>
			)}
		</div>
	)
}

export const ControlButtons = styled(ControlButtonsContainer)`
	display: flex;
	justify-content: flex-end;
	gap: 14px;
	align-items: center;
	width: 100px;
	margin-top: 10px;
`

ControlButtons.propTypes = {
	isAdmin: PropTypes.bool.isRequired,
}
