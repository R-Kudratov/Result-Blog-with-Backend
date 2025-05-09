import styled from 'styled-components'

const DescriptionContainer = ({ className }) => (
	<div className={className}>
		Веб-технологии
		<br />
		Написание кода
		<br />
		Разбор ошибок
	</div>
)

export const Description = styled(DescriptionContainer)`
	font-size: 20px;
	font-weight: normal;
	font-style: italic;
	line-height: 24px;
`
