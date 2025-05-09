import { useEffect, useState, useLayoutEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPostAsync, RESET_POST_DATA } from '../../actions'
import { selectPost } from '../../selectors'
import { Comments, PostContent, PostForm } from './components'
import { Error, PrivateContent } from '../../components'
import { ROLE } from '../../constants'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()
	const params = useParams()
	const isEditing = !!useMatch('/post/:id/edit')
	const isCreating = !!useMatch('/post')
	const post = useSelector(selectPost)

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch, isCreating])

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false)
			return
		}

		dispatch(loadPostAsync(params.id)).then((postData) => {
			setError(postData.error)
			setIsLoading(false)
		})
	}, [isCreating, dispatch, params.id])

	if (isLoading) return null

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post}></PostForm>
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post}></PostContent>
				<Comments comments={post.comments} postId={post.id} />
			</div>
		)

	return error ? <Error errorMessage={error} /> : SpecificPostPage
}

export const Post = styled(PostContainer)`
	padding: 40px 80px;
`
