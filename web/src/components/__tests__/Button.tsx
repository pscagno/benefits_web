import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import type ReactRouterDOM from 'react-router-dom'

import Button from 'components/Button'

vi.mock('react-router-dom', async () => ({
	...(await vi.importActual<typeof ReactRouterDOM>('react-router-dom')),
	Navigate: vi.fn()
}))
const mockOnClickButton = vi.fn()

const renderButton = (): void => {
	render(
		<Button
			name='buttonTest'
			onClick={mockOnClickButton}
			testid='buttonTest'
			text='Button test'
		/>
	)
}

describe('<Button />', () => {
	it('should render the button', () => {
		renderButton()

		expect(screen.getByText('Button test')).toBeInTheDocument()
	})

	it('should execute function onClick', async () => {
		renderButton()
		const button = screen.getByTestId('buttonTest')
		await userEvent.click(button)

		expect(mockOnClickButton).toHaveBeenCalledTimes(1)
		await waitFor(() => expect(mockOnClickButton).toHaveBeenCalledTimes(1))
	})
})
