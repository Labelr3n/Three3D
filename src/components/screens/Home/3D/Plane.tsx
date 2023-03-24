import { FC, forwardRef, useRef } from 'react'

interface IPlane {
	shift?: number
	opacity?: number
	args: any
	map: any
}

const Plane: FC<IPlane> = forwardRef(({ args, map, opacity, shift }, ref) => {
	const material = useRef()
	return <div>Plane</div>
})

export default Plane
