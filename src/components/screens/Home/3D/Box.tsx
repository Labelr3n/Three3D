import useActions from '@/hooks/useActions'
import { ICarouselItem } from '@/store/carousel/carousel.interface'
import { useTexture } from '@react-three/drei'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef, useState } from 'react'
import * as THREE from 'three'
import { useCarousel } from '../carousel/useCarousel'

type TypeBox = {
	item: ICarouselItem
} & ThreeElements['mesh']

const Box: FC<TypeBox> = ({ item, ...rest }) => {
	const ref = useRef<THREE.Mesh>(null!)

	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

	const image = useTexture(item.image)

	const { currentId } = useCarousel()

	useFrame((state, delta) => {
		if (ref.current && currentId === item.id) {
			if (mousePos.x === 0 && mousePos.y === 0) {
				ref.current.rotation.y += delta / 5
			} else {
				// ref.current.rotation.x = -mousePos.y * 0.002
				ref.current.rotation.y = mousePos.x * 0.001
			}
		}
	})

	const { changeCurrentId } = useActions()

	return (
		<mesh
			{...rest}
			ref={ref}
			onClick={() => changeCurrentId(item.id)}
			onPointerMove={e => {
				setMousePos({ x: e.clientX, y: e.clientY })
			}}
			onPointerLeave={e => setMousePos({ x: 0, y: 0 })}
		>
			<boxGeometry args={[1, 0.56, 1]} />
			<meshBasicMaterial map={image} side={THREE.DoubleSide} />
		</mesh>
	)
}

export default Box
