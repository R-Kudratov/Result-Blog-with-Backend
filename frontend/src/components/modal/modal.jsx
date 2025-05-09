import { useSelector } from 'react-redux'
import {
	selectModalText,
	selectModalOnConfirm,
	selectModalOnCancel,
	selectModalIsOpen,
} from '../../selectors'
import { Button } from '../button/button'
import styled from 'styled-components'

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen)
	const text = useSelector(selectModalText)
	const onConfirm = useSelector(selectModalOnConfirm)
	const onCancel = useSelector(selectModalOnCancel)

	if (!isOpen) return null

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3 className="title">{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Удалить
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	)
}

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	.overlay {
		background: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100vh;
	}

	& .box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 500px;
		background: #fff;
		box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		padding: 0 20px 20px;
	}

	& .buttons {
		display: flex;
		justify-content: center;
		padding-top: 20px;
	}

	& .buttons button {
		width: 120px;
		margin: 0 30px;
	}

	& .buttons button:first-child {
		background-color: rgb(255, 101, 101);
	}
`
