import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from 'App'
import { AuthProvider } from 'context/AuthContext'
import { MultipleNotificationProvider } from 'context/MultipleNotificationContext'
import './index.css'

const MAX_RETRIES = 1
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
})

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<MultipleNotificationProvider>
					<AuthProvider>
						<App />
					</AuthProvider>	
				</MultipleNotificationProvider>
			</QueryClientProvider>
		</StrictMode>
	)
}
