import { Canvas } from '@react-three/fiber'
import { FC, PropsWithChildren } from 'react'

const ThreeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			{children}
		</Canvas>
	)
}

export default ThreeProvider
