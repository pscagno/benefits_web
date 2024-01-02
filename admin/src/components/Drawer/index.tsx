import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CategoryIcon from '@mui/icons-material/Category'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeIcon from '@mui/icons-material/Home'
import LayersIcon from '@mui/icons-material/Layers'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import PublicIcon from '@mui/icons-material/Public'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: property => property !== 'open'
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}))

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}))

const menuItems = [
	{
		id: 1,
		text: 'Usuarios',
		icon: <PeopleIcon />,
		path: '/users',
		disabled: true
	},
	{
		id: 2,
		text: 'Beneficios',
		icon: <CardGiftcardIcon />,
		path: '/benefits'
	},
	{
		id: 3,
		text: 'Categorias',
		icon: <CategoryIcon />,
		path: '/categories'
	},
	{
		id: 4,
		text: 'Subcategorias',
		icon: <LayersIcon />,
		path: '/subcategories'
	},
	{
		id: 5,
		text: 'Provincias',
		icon: <PublicIcon />,
		path: '/provinces'
	},
	{
		id: 6,
		text: 'Regiones',
		icon: <LocationCityIcon />,
		path: '/cities'
	},
	{
		id: 7,
		text: 'Configuración de la home',
		icon: <HomeIcon />,
		path: '/homecarousel'
	},
	{
		id: 8,
		text: 'Reporte de uso',
		icon: <HomeIcon />,
		path: '/use-report'
	},
	{
		id: 9,
		text: 'Reporte de calificaciones',
		icon: <HomeIcon />,
		path: '/qualifications-report'
	}
]

export default function PersistentDrawerLeft() {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)
	const navigate = useNavigate()

	const handleRedirect = (path: string) => navigate(path)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar open={open} position='fixed'>
				<Toolbar style={{ backgroundColor: '#003057' }}>
					<IconButton
						aria-label='open drawer'
						color='inherit'
						edge='start'
						onClick={handleDrawerOpen}
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography component='div' variant='h6' noWrap>
						Administrador Banco Macro
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer
				anchor='left'
				open={open}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box'
					}
				}}
				variant='persistent'
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menuItems.map(({ id, text, path, icon, disabled }) => (
						<ListItem key={id} disablePadding>
							<ListItemButton
								disabled={disabled}
								onClick={() => handleRedirect(path)}
							>
								<ListItemIcon>{icon}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	)
}
