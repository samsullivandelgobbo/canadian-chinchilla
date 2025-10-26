'use client'

import React from 'react'
import Image from 'next/image'

export default function BeforeLogin() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
        gap: '1rem',
      }}
    >
      <Image
        src="/logo.png"
        alt="Canadian Chinchilla Rescue"
        width={80}
        height={80}
        style={{ objectFit: 'contain' }}
      />
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a' }}>
          Canadian Chinchilla Rescue
        </h2>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
          Admin Panel
        </p>
      </div>
    </div>
  )
}
