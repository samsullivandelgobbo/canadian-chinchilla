import { config } from 'dotenv'
import path from 'path'

// Load .env.local explicitly BEFORE importing anything else
config({ path: path.resolve(process.cwd(), '.env.local') })

// Verify secret is loaded
if (!process.env.PAYLOAD_SECRET) {
  console.error('ERROR: PAYLOAD_SECRET not found in environment variables')
  console.log('Available env vars:', Object.keys(process.env).filter(k => k.includes('PAYLOAD')))
  process.exit(1)
}

// Now import after env is loaded
const runSeed = async () => {
  const { seed } = await import('../src/payload/seed/index.js')
  await seed()
}

runSeed()
  .then(() => {
    console.log('Seeding completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
