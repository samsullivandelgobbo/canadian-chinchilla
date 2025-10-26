import React from 'react'
import Image from 'next/image'

export const Icon = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '32px', height: '32px' }}>
      <Image
        src="/logo.png"
        alt="Canadian Chinchilla Rescue"
        width={32}
        height={32}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
