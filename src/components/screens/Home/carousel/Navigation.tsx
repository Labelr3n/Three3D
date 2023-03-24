import useActions from '@/hooks/useActions'
import { FC } from 'react'
import { BsFillSignTurnLeftFill, BsFillSignTurnRightFill } from 'react-icons/bs'

const Navigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()

	return (
		<div className='mt-36 w-1/2 flex items-center justify-center mx-auto'>
			<button
				onClick={() => prevSlide()}
				className='mr-14 transition-colors duration-500 hover:text-red-pink'
			>
				<BsFillSignTurnLeftFill size={40} />
			</button>

			<button
				onClick={() => nextSlide()}
				className='transition-colors duration-500 hover:text-red-pink'
			>
				<BsFillSignTurnRightFill size={40} />
			</button>
		</div>
	)
}

export default Navigation
