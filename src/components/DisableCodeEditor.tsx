'use client'

import { useEffect } from 'react'

export default function DisableCodeEditor() {
  useEffect(() => {
    // Patch the Monaco editor configuration context
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.MonacoEnvironment = {
        getWorkerUrl: function () {
          return 'data:text/javascript;charset=utf-8,' + encodeURIComponent('self.MonacoEnvironment = { baseUrl: "/" };')
        }
      }
    }
  }, [])

  return null
}
