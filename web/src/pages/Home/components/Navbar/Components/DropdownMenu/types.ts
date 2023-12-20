import type { Dispatch, SetStateAction } from 'react'

export interface Props {
	isOpen?: boolean | undefined
	setOpenMenu: Dispatch<SetStateAction<boolean>>
}
