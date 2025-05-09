export const Day = () => (
	<div>
		{new Date().toLocaleString('ru', {
			day: 'numeric',
			month: 'long',
		})}
	</div>
)
