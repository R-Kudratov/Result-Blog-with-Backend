import { useEffect, useState } from 'react'
import { Day } from '../day/day.jsx'
import styled from 'styled-components'

const WeatherText = styled.div`
	display: flex;
	flex-direction: column;
`

const WeatherContainer = ({ className }) => {
	const [city, setCity] = useState('')
	const [temperature, setTemperature] = useState('')
	const [description, setDescription] = useState('')
	const [iconCode, setIconCode] = useState('')

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=2c4676724a09aa8668bcf81da3a7e0e2&units=metric&lang=ru',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name)
				setTemperature(Math.round(main.temp))
				setDescription(weather[0].description)
				setIconCode(weather[0].icon)
			})
	}, [])

	return (
		<div className={className}>
			<WeatherText>
				<Day />
				<div>
					{temperature}°C, {description}
				</div>
			</WeatherText>
			<img
				src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
				alt=""
			/>
		</div>
	)
}

export const Weather = styled(WeatherContainer)`
	display: flex;
	align-items: center;
`
