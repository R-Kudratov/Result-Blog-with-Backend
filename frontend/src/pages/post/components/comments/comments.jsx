import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { addCommentAsync } from '../../../../actions'
import { Icon } from '../../../../components'
import { Comment } from './components'
import { PROP_TYPE, ROLE } from '../../../../constants'
import { selectUserRole } from '../../../../selectors'
import styled from 'styled-components'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const dispatch = useDispatch()
	const userRole = useSelector(selectUserRole)
	const isGuest = userRole === ROLE.GUEST

	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content))
		setNewComment('')
	}

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Введите текст комментария"
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane"
						margin="0 0 0 10px"
						fontSize="18px"
						button={true}
						onClick={() => onNewCommentAdd(postId, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, createdAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={createdAt}
					/>
				))}
			</div>
		</div>
	)
}

export const Comments = styled(CommentsContainer)`
	margin: 20px auto;
	width: 580px;

	& .new-comment {
		display: flex;
		width: 100%;
		height: 120px;
	}

	& .new-comment textarea {
		resize: none;
		width: 550px;
		font-size: 18px;
		padding: 10px;
	}
`

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENTS).isRequired,
	postId: PropTypes.string.isRequired,
}
