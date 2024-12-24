import React from 'react'

type CardProps = {
	children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-full">
			{children}
		</div>
	)
}

export default Card
