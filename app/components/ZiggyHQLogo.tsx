import Image from 'next/image'

export function ZiggyHQLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggyhq-wordmark-dark.png"
      alt="ZiggyHQ"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
