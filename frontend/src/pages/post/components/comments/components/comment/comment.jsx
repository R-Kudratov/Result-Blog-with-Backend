import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../../actions'
import { Icon } from '../../../../../../components'
import { checkAccess } from '../../../../../../utils'
import { ROLE } from '../../../../../../constants'
import { selectUserRole } from '../../../../../../selectors'
import styled from 'styled-components'

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch()
	const userRole = useSelector(selectUserRole)
	const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], userRole)

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Вы действительно хотите удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(id, postId))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		)
	}

	return (
		<div className={className}>
			<div className="comment">
				<div className="info-panel">
					<div className="author">
						<Icon id="fa-circle-user" fontSize="18px" margin="0 10px 0 0" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar" fontSize="18px" margin="0 10px 0 0" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>

			{isAdminOrModerator && (
				<Icon
					id="fa-trash"
					button={true}
					fontSize="18px"
					margin="5px 0 0 10px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	)
}

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;
	width: 100%;

	& .comment {
		border: 1px solid #000;
		border-radius: 3px;
		padding: 5px 10px;
		width: 550px;
	}

	& .info-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
	}

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .comment-text {
	}
`

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
}
