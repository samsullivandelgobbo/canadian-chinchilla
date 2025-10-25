import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

interface ChinchillaCSVRow {
  Name: string
  Age: string
  Color: string
  'Date Added': string
  Description: string
  'Friendly with Others': string
  Gender: string
  Notes: string
  Photos: string
  Status: string
}

function parseAge(ageStr: string): number {
  const age = parseInt(ageStr)
  return isNaN(age) ? 1 : age
}

function parseDate(dateStr: string): string {
  if (!dateStr) return new Date().toISOString()

  try {
    // Parse "September 4, 2025" format
    const date = new Date(dateStr)
    if (!isNaN(date.getTime())) {
      return date.toISOString()
    }
  } catch (e) {
    // Fall back to current date
  }

  return new Date().toISOString()
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function importChinchillas(csvPath: string) {
  const payload = await getPayload({ config })

  console.log(`Reading CSV from: ${csvPath}`)

  const fileContent = fs.readFileSync(csvPath, 'utf-8')
  const records: ChinchillaCSVRow[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    bom: true, // Handle BOM
  })

  console.log(`Found ${records.length} chinchillas to import\n`)

  const results = {
    success: 0,
    failed: 0,
    errors: [] as string[],
  }

  for (const row of records) {
    try {
      const name = row.Name.trim()
      if (!name) {
        console.log('Skipping row with no name')
        continue
      }

      const slug = generateSlug(name)
      const age = parseAge(row.Age)
      const gender = row.Gender === 'Male' ? 'Male' : 'Female'
      const friendlyWithOthers = row['Friendly with Others']?.toLowerCase() === 'yes'

      const chinchillaData = {
        name,
        slug,
        age,
        gender,
        color: row.Color || 'Standard Grey',
        description: row.Description || `${name} is looking for a loving home.`,
        status: (row.Status || 'Available') as 'Available' | 'On Hold' | 'Adopted' | 'Not Ready',
        friendlyWithOthers,
        dateAdded: parseDate(row['Date Added']),
        notes: row.Notes || '',
      }

      await payload.create({
        collection: 'chinchillas',
        data: chinchillaData,
      })

      results.success++
      console.log(`✓ Imported: ${name} (Age: ${age}, ${gender}, ${chinchillaData.color})`)
    } catch (error: any) {
      results.failed++
      const errorMsg = `✗ Failed to import ${row.Name}: ${error.message}`
      results.errors.push(errorMsg)
      console.error(errorMsg)
    }
  }

  console.log('\n=== Import Summary ===')
  console.log(`Successful: ${results.success}`)
  console.log(`Failed: ${results.failed}`)
  if (results.errors.length > 0) {
    console.log('\nErrors:')
    results.errors.forEach((err) => console.log(err))
  }

  return results
}

// Run if called directly
const csvPath = process.argv[2] || '/Users/ss/Downloads/Private & Shared 8/Chinchillas 264c2b9c17b880809981c3b5734064ed_all.csv'

importChinchillas(csvPath)
  .then((results) => {
    console.log('\n✅ Import complete!')
    process.exit(results.failed > 0 ? 1 : 0)
  })
  .catch((error) => {
    console.error('❌ Import failed:', error)
    process.exit(1)
  })
