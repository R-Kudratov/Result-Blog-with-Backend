import { H2 } from '../h2/h2.jsx'
import { PROP_TYPE } from '../../constants'
import styled from 'styled-components'

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Error = ({ errorMessage }) =>
	errorMessage && (
		<Div>
			<H2>Ошибка</H2>
			<div>{errorMessage}</div>
		</Div>
	)

Error.propTypes = {
	errorMessage: PROP_TYPE.ERROR,
}
