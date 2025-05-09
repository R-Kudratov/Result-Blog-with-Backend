import { request } from '../utils'
import { setPostData } from './set-post-data'

export const loadPostAsync = (postId) => (dispatch) =>
	request(`/posts/${postId}`).then((post) => {
		if (post.data) {
			dispatch(setPostData(post.data))
		}

		return post
	})
