import { Link } from 'react-router-dom'
import { Icon } from '../../../../components'
import styled from 'styled-components'

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
`

const SmallText = styled.div`
	font-size: 18px;
	font-weight: 600;
`

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon fontSize="70px" margin="0 10px 0 0" id="fa-code" button={true} />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
)

export const Logo = styled(LogoContainer)`
	display: flex;
	align-items: center;
	width: 260px;
`
