/* eslint-disable react/button-has-type */
import type { Props } from './types'

function Button({
	text,
	buttonColor,
	textSize,
	paddingY,
	onClick,
	type = 'submit',
	name,
	icon,
	testid,
	disabled,
	width
}: Props) {
	return (
		<button
			className={`h-auto min-h-[40px] min-w-[144px] transform items-center rounded-[50px] px-[29px] transition-colors duration-300 ease-in hover:bg-[#FF4351] 
        ${buttonColor ?? 'bg-benefits'} 
				${paddingY ?? 'py-2'}
				${width ?? 'w-auto'}
       `}
			data-testid={testid}
			disabled={disabled}
			name={name}
			onClick={onClick}
			type={type}
		>
			<p
				className={`text-center font-TitilliumWeb font-semibold text-white ${
					textSize ?? 'text-sm'
				}`}
			>
				{text ?? 'Ingrese texto'}
			</p>
			{icon}
		</button>
	)
}

export default Button
