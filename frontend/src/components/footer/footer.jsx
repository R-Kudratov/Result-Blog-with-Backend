import { Contacts, Weather } from './components'
import styled from 'styled-components'

const FooterContainer = ({ className }) => {
	return (
		<div className={className}>
			<Contacts />
			<Weather />
		</div>
	)
}

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: 600;
	background: #fff;
	box-shadow: 0px -3px 20px rgba(0, 0, 0, 0.25);
`
