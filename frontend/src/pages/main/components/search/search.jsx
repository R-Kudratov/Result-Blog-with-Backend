import { Icon, Input } from '../../../../components'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchContainer = ({ className, searchPhrase, handleSearch }) => {
	return (
		<div className={className}>
			<Input
				margin="0"
				padding="10px 40px 10px 10px"
				placeholder="Поиск"
				value={searchPhrase}
				onChange={handleSearch}
			/>
			<Icon id="fa-search" fontSize="20px" />
		</div>
	)
}

export const Search = styled(SearchContainer)`
	position: relative;
	display: flex;
	margin: 40px auto 0;
	width: 320px;
	height: 40px;
	justify-content: center;
	align-items: center;

	& > div {
		position: absolute;
		top: 6px;
		right: 10px;
	}
`

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
}
