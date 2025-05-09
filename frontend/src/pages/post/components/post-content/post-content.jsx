import { useNavigate } from 'react-router-dom'
import { H2, Icon } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel.jsx'
import styled from 'styled-components'
import { PROP_TYPE } from '../../../../constants/prop-type.js'

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate()

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2 margin="0 0 20px">{title}</H2>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="0 0 20px"
				editButton={
					<Icon
						id="fa-file-pen"
						fontSize="18px"
						button={true}
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>
			<div className="post-text">{content}</div>
		</div>
	)
}

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		white-space: pre-wrap;
	}
`

PostContent.propTypes = {
	post: PROP_TYPE.POST.isRequired,
}
