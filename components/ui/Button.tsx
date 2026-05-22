import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-bold transition-colors duration-150 rounded-[6px] cursor-pointer'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-brand-yellow text-black hover:bg-yellow-300',
    secondary:
      'border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white',
  }

  const sizes: Record<ButtonSize, string> = {
    md: 'px-7 py-3 text-[15px]',
    lg: 'px-8 py-4 text-[17px]',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
