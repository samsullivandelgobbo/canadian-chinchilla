import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
      }}
    >
      <Image
        src="/logo.png"
        alt="Canadian Chinchilla Rescue"
        width={40}
        height={40}
        style={{ objectFit: 'contain' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
        <span style={{ fontSize: '16px', fontWeight: 'bold', lineHeight: '1.2' }}>
          Canadian Chinchilla Rescue
        </span>
        <span style={{ fontSize: '11px', opacity: 0.8, lineHeight: '1.2' }}>
          Admin Panel
        </span>
      </div>
    </div>
  )
}

export default Logo
