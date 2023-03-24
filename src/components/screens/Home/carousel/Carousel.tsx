import { FC } from 'react'
import Carousel3DItem from './Carousel3DItem'
import Navigation from './Navigation'
import { useCarousel } from './useCarousel'

const Carousel: FC = () => {
	const { items } = useCarousel()

	return (
		<section className='mt-14'>
			<div className='flex items-center justify-between'>
				{items.length ? (
					items.map(item => {
						return <Carousel3DItem key={item.id} item={item} />
					})
				) : (
					<div>Elements not found!</div>
				)}
			</div>

			<Navigation />
		</section>
	)
}

export default Carousel
