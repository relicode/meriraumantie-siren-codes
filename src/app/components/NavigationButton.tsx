import Image from 'next/image'
import Link, { LinkProps } from 'next/link'

import backArrowIcon from '@/assets/icons/back-arrow.png'
import homeIcon from '@/assets/icons/home.png'
import leftArrowIcon from '@/assets/icons/left-arrow.png'
import rightArrowIcon from '@/assets/icons/right-arrow.png'

const variants = {
  back: backArrowIcon,
  home: homeIcon,
  left: leftArrowIcon,
  right: rightArrowIcon,
} as const

const NavigationButton = ({
  className,
  variant,
  ...rest
}: LinkProps & { variant: keyof typeof variants; className?: string }) => (
  <Link
    {...rest}
    className={
      'bg-amber-300 hover:bg-amber-400 active:bg-amber-400 h-[48px] w-[48px] rounded-[50%] flex items-center justify-center' +
      (typeof className === 'string' ? ` ${className}` : '')
    }
  >
    <Image unoptimized width={32} height={32} src={variants[variant].src} alt={variant} />
  </Link>
)

export default NavigationButton
