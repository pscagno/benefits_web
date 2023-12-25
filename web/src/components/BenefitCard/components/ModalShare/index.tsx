import { memo, useCallback } from 'react'

import EmailIcon from 'assets/EmailIcon'
import WhatsappIcon from 'assets/WhatsappIcon'
import Modal from 'components/Modal'
import config from 'config'

import share from '../../../../assets/vector/share.png'
import type { Props } from './types'

function ModalShare({ id, transparentBgColor, text }: Props) {
	const benefitLinkShare = `${config.portalURL}/benefit/${id}`

	const openEmailClient = useCallback(() => {
		const subject = encodeURIComponent('Increíble beneficio del Banco Macro')
		const body = encodeURIComponent(
			`Te comparto el increíble beneficio del Banco Macro ${benefitLinkShare}`
		)
		// Construye la URL del enlace mailto con parámetros
		const mailtoLink = `mailto:?subject=${subject}&body=${body}`

		// Abre el cliente de correo electrónico del usuario
		window.location.href = mailtoLink
	}, [benefitLinkShare])

	const openWhatsApp = useCallback(() => {
		// Construye la URL del enlace de WhatsApp con los parámetros
		const whatsappLink = `https://api.whatsapp.com/send/?text=Te comparto el increíble beneficio del Banco Macro ${benefitLinkShare}&type=custom_url&app_absent=0`

		// Abre WhatsApp Web en una nueva pestaña o ventana
		window.open(whatsappLink, '_blank')
	}, [benefitLinkShare])

	return (
		<Modal
			buttonClass={`grid h-[30px] w-[30px] place-content-center ${
				!transparentBgColor && 'bg-benefits'
			}`}
			textOrIconButton={
				<div className='flex items-center'>
					<img alt='share' className='h-[16px] w-[16px]' src={share} />
					{text && (
						<h1 className='mx-[7px] font-TitilliumWeb text-[14px] font-semibold text-white'>
							{text}
						</h1>
					)}
				</div>
			}
			titleModal={`Compartir beneficio ${benefitLinkShare}`}
		>
			<div className='flex h-[100px] w-auto flex-row justify-center'>
				<button
					className='justi me-2 flex h-full items-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-100'
					data-modal-hide='popup-modal'
					onClick={openWhatsApp}
					type='button'
				>
					<WhatsappIcon />
				</button>
				<button
					className='justi me-2 flex h-full items-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-100'
					data-modal-hide='popup-modal'
					onClick={openEmailClient}
					type='button'
				>
					<EmailIcon />
				</button>
			</div>{' '}
		</Modal>
	)
}

export default memo(ModalShare)
