import { request } from '../utils'
import { removeComment } from './remove_comment'

export const removeCommentAsync = (id, postId) => (dispatch) => {
	request(`/posts/${postId}/comments/${id}`, 'DELETE').then(() => {
		dispatch(removeComment(id))
	})
}
