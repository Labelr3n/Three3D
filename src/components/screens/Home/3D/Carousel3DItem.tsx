import useActions from '@/hooks/useActions'
import { ICarouselItem } from '@/store/carousel/carousel.interface'
import cn from 'clsx'
import { FC } from 'react'
import { useCarousel } from '../carousel/useCarousel'
import ThreeProvider from '../Three'
import Box from './Box'
const Carousel3DItem: FC<{ item: ICarouselItem }> = ({ item }) => {
	const { currentId } = useCarousel()
	const { changeCurrentId } = useActions()

	const isActive = currentId === item.id

	return (
		<div className={cn('mx-14 ', isActive ? 'w-1/2' : 'w-1/4')}>
			<button onClick={() => changeCurrentId(item.id)}>
				<ThreeProvider>
					<Box position={[0, 0, 0]} image={item.image} />
				</ThreeProvider>
			</button>
			<div
				className={cn(
					'mx-auto mt-10 bg-aqua h-2 rounded transition-all duration-500 ease-in-out',
					isActive ? 'w-1/2' : 'w-0'
				)}
			></div>
		</div>
	)
}

export default Carousel3DItem
