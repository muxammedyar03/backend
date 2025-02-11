import Lottie from 'lottie-react'
import spinAnimation from '../../public/animations/spin.json'

export default function SpinLoader() {
  return (
    <div className='flex_center gap-1 text-lg'>
        <Lottie animationData={spinAnimation} className="w-10 h-10" loop /> Loading. . .
    </div>
  )
}
