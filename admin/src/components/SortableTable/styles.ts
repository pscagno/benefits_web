const tableStyles = {
	container: {
		borderRadius: '4px',
		border: '1px solid #cccccc',
		backgroundColor: '#fafafa'
	},
	table: {
		width: '100%',
		borderCollapse: 'collapse',
		borderRadius: '16px',
		backgroundColor: '#ffffff'
	},
	headerCell: {
		backgroundColor: '#003057',
		color: '#ffffff',
		padding: '24px 15px',
		fontSize: '0.95rem',
		fontWeight: 'bold'
	},
	label: {
		color: '#ffffff',
		'&:hover, &:focus, &:active': {
			color: '#c1121f' // Color rojo para poder visualizar el estilo, cambiar a blanco
		}
	},
	'Mui-active': {
		color: '#f0f0f0 !important',
		'&:hover, &:focus, &:active': {
			color: '#c1121f' // Color rojo para poder visualizar el estilo, cambiar a blanco
		}
	},
	// headRow: {
	// 	color: '#ffffff',
	// 	'&:hover, &:focus, &:active': {
	// 		color: '#c1121f'
	// 	}
	// },
	cell: {
		padding: '24px 15px',
		fontSize: '0.9rem',
		borderBottom: '1px solid #cccccc'
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: '#f2f2f2'
		}
	},
	link: {
		color: '#007bff',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline'
		}
	}
}

export default tableStyles
