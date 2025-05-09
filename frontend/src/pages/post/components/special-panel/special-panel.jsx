import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { openModal, CLOSE_MODAL, removePostAsync } from '../../../../actions'
import { Icon } from '../../../../components'
import { checkAccess } from '../../../../utils'
import { ROLE } from '../../../../constants'
import { selectUserRole } from '../../../../selectors'
import styled from 'styled-components'

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userRole = useSelector(selectUserRole)
	const isAdmin = checkAccess([ROLE.ADMIN], userRole)

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Вы действительно хотите удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() => navigate('/'))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		)
	}

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt ? (
					<Icon id="fa-calendar" fontSize="18px" margin="0 10px 0 0" />
				) : null}

				{publishedAt}
			</div>
			{isAdmin && (
				<div className="control-buttons">
					{editButton}
					{publishedAt ? (
						<Icon
							id="fa-trash"
							margin="0 0 0 10px"
							fontSize="18px"
							button={true}
							onClick={() => onPostRemove(id)}
						/>
					) : null}
				</div>
			)}
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin = '0 0 20px' }) => margin};
	display: flex;
	justify-content: space-between;

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .control-buttons {
		display: flex;
	}
`

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
}
