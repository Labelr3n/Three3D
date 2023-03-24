import { ICarouselItem } from '@/store/carousel/carousel.interface'
import cn from 'clsx'
import { FC } from 'react'
import Box from '../3D/Box'
import ThreeProvider from '../3D/Three'
import { useCarousel } from './useCarousel'

const Carousel3DItem: FC<{ item: ICarouselItem }> = ({ item }) => {
	const { currentId } = useCarousel()
	const isActive = currentId === item.id

	return (
		<div className={cn(isActive ? 'w-2/6 h-[420px]' : 'w-1/5 h-60')}>
			<ThreeProvider>
				<Box position={[0, 0, 0]} item={item} />
			</ThreeProvider>

			<div
				className={cn(
					'mt-16 mx-auto bg-red-aqua h-2 rounded transition-all duration-500 ease-in-out',
					isActive ? 'w-1/2' : 'w-0'
				)}
			/>
		</div>
	)
}

export default Carousel3DItem
