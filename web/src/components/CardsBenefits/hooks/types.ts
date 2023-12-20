import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query'

import type { BenefitsCard } from '../../BenefitCard/types'

export type GetBenefitsFunction = (
	context: QueryFunctionContext<QueryKey, number>
) => Promise<{ nextCursor: number; benefits: BenefitsCard[] }>
