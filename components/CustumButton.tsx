"use client"
import { CustomButtonProps } from '@/types'

const CustumButton = ({title,type="button",handleClick,containerStyles}:CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={type}
			className={'custom-btn '+containerStyles}
			onClick={handleClick}
		>
			<span className="flex-1">{title}</span>
		</button>
	)
}
export default CustumButton