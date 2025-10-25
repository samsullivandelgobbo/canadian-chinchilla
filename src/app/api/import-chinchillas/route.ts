import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { parse } from 'csv-parse/sync'

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

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })

    // Get CSV data from request body
    const body = await request.json()
    const csvData = body.csv

    if (!csvData) {
      return NextResponse.json({ error: 'No CSV data provided' }, { status: 400 })
    }

    const records: ChinchillaCSVRow[] = parse(csvData, {
      columns: true,
      skip_empty_lines: true,
      bom: true,
    })

    console.log(`Found ${records.length} chinchillas to import`)

    const results = {
      success: 0,
      failed: 0,
      errors: [] as string[],
    }

    for (const row of records) {
      try {
        const name = row.Name.trim()
        if (!name) continue

        const slug = generateSlug(name)
        const age = parseAge(row.Age)
        const gender = row.Gender === 'Male' ? 'Male' : 'Female'
        const friendlyWithOthers = row['Friendly with Others']?.toLowerCase() === 'yes'

        await payload.create({
          collection: 'chinchillas',
          data: {
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
          },
        })

        results.success++
      } catch (error: any) {
        results.failed++
        results.errors.push(`Failed to import ${row.Name}: ${error.message}`)
      }
    }

    return NextResponse.json(results)
  } catch (error: any) {
    console.error('Import error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
