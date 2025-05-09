import { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../../../components'
import { TableRow } from '../table-row/table-row.jsx'
import styled from 'styled-components'
import { PROP_TYPE } from '../../../../constants/prop-type.js'
import { request } from '../../../../utils'

const UserRowContainer = ({
	className,
	userId,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId)
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value))
	}

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId)
		})
	}

	const isSaveButtonDisabled = selectedRoleId === initialRoleId

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-disk"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						button={true}
						onClick={() => onRoleSave(userId, selectedRoleId)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash"
				margin="0 0 0 10px"
				button={true}
				onClick={onUserRemove}
			/>
		</div>
	)
}

export const UserRow = styled(UserRowContainer)`
	display: flex;
	align-items: center;
	margin-top: 10px;

	& select {
		font-size: 16px;
		padding: 0 5px;
	}
`

UserRow.propTypes = {
	userId: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.USER_ROLE_ID,
	roles: PropTypes.arrayOf(PROP_TYPE.USER_ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
}
