import PropTypes from 'prop-types'
import { ROLE } from './role'

const USER_ROLE_ID = PropTypes.oneOf(Object.values(ROLE))

export const PROP_TYPE = {
	USER_ROLE_ID,
	USER_ROLE: PropTypes.shape({
		id: USER_ROLE_ID,
		name: PropTypes.string.isRequired,
	}),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENTS: PropTypes.shape({
		author_id: PropTypes.string.isRequired,
		author_login: PropTypes.string.isRequired,
		post_id: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		published_at: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
}
