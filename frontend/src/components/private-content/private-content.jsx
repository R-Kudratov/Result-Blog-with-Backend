import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Error } from '../error/error.jsx'
import { selectUserRole } from '../../selectors'
import { checkAccess } from '../../utils'
import { ERROR, PROP_TYPE } from '../../constants'

export const PrivateContent = ({ serverError = null, access, children }) => {
	const userRole = useSelector(selectUserRole)

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED

	const error = serverError || accessError

	return error ? <Error errorMessage={error} /> : children
}

PrivateContent.propTypes = {
	serverError: PROP_TYPE.ERROR,
	access: PropTypes.arrayOf(PROP_TYPE.USER_ROLE_ID).isRequired,
	children: PropTypes.node.isRequired,
}
