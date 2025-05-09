import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconContainer = ({ className, id, onClick }) => (
	<div className={className} onClick={onClick}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
)

export const Icon = styled(IconContainer)`
	font-size: ${({ fontSize = '24px' }) => fontSize};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled = false }) => (disabled ? '#ccc' : '#000')};
	cursor: ${({ button = false, disabled = false }) =>
		button && !disabled ? 'pointer' : 'default'};
`

Icon.propTypes = {
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
