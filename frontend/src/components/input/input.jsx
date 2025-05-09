import { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />
})

InputContainer.displayName = 'Input'

export const Input = styled(InputContainer)`
	height: 40px;
	width: ${({ width = '100%' }) => width};
	font-size: 18px;
	padding: ${({ padding = '10px' }) => padding};
	margin: ${({ margin = '0 0 10px' }) => margin};
	border: 1px solid #000;
`
