import ArrowComponents from '../ArrowsComponentsCarousel'
import './styles.css'
import type { Props } from './types'

function ArrowButton({ onClick, arrowDirection, color, nameClass }: Props) {
	const buttonClassName = `arrow-button z-10 ${arrowDirection} ${nameClass}`

	return (
		<button className={buttonClassName} onClick={onClick} type='button'>
			<ArrowComponents arrowDirection={arrowDirection} color={color} />
		</button>
	)
}

export default ArrowButton
