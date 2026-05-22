import { cn } from '@/lib/utils'

interface TricolorLineProps {
  className?: string
}

export default function TricolorLine({ className }: TricolorLineProps) {
  return (
    <div className={cn('flex h-[5px] w-full', className)}>
      <div className="flex-1 bg-brand-yellow" />
      <div className="flex-1 bg-brand-red" />
      <div className="flex-1 bg-brand-blue" />
    </div>
  )
}
