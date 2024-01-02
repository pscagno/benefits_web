export interface DataItem {
	id: number
	name: string
	title?: string
	province?: {
		id: number
		name: string
	}
}

export type SearchFields = keyof DataItem

export interface Props {
	data: DataItem[] | undefined
	arrayToFilter: SearchFields[]
	placeHolderSearch: string
}

export interface UseSearchReturnType {
	filteredDataHook: DataItem[]
	SearchInput: JSX.Element
}
