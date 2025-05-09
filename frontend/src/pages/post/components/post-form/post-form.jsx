import { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePostAsync } from '../../../../actions'
import { Input, Icon } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel.jsx'
import { sanitizeContent } from './utils'
import { PROP_TYPE } from '../../../../constants'
import styled from 'styled-components'

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [imageUrlValue, setImageUrlValue] = useState(imageUrl)
	const [titleValue, setTitleValue] = useState(title)
	const contentRef = useRef(null)

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl)
		setTitleValue(title)
	}, [imageUrl, title])

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML)

		dispatch(
			savePostAsync(id, {
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => {
			navigate(`/post/${id}`)
		})
	}

	const onImageChange = ({ target }) => setImageUrlValue(target.value)
	const onTitleChange = ({ target }) => setTitleValue(target.value)

	return (
		<div className={className}>
			<Input
				defaultValue={imageUrlValue}
				placeholder="Изображение"
				onChange={onImageChange}
			/>
			<Input
				defaultValue={titleValue}
				placeholder="Заголовок"
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-disk"
						fontSize="21px"
						margin="-3px 0 0 0"
						button={true}
						onClick={() => onSave()}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	)
}

export const PostForm = styled(PostFormContainer)`
	display: flex;
	flex-direction: column;

	& .post-text {
		white-space: pre-wrap;
		padding: 10px;
		min-height: 80px;
		border: 1px solid #000;
	}
`

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
}
