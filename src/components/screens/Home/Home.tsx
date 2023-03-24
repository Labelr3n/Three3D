import { FC } from 'react'
import Three from './3D/Three'
import Carousel from './carousel/Carousel'

const Home: FC = () => {
	return (
		<div className='m-16'>
			<h1 className='text-7xl text-center font-medium'>Three.js</h1>
			<Carousel />

			<Three />
		</div>
	)
}

export default Home
