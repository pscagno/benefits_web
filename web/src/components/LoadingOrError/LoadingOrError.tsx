interface Props {
	error?: Error
}

export default function LoadingOrError({ error }: Props) {
	return (
		<div className='flex min-h-screen items-center justify-center'>
			<h1 className='text-xl' data-testid='LoadingOrError'>
				{error ? error.message : 'Loading...'}
			</h1>
		</div>
	)
}
