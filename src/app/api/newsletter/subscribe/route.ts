import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'footer' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address required' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config })

    // Check if email already exists
    const existing = await payload.find({
      collection: 'email-list',
      where: {
        email: {
          equals: email.toLowerCase(),
        },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      const subscriber = existing.docs[0]

      // If previously unsubscribed, resubscribe
      if (!subscriber.subscribed) {
        await payload.update({
          collection: 'email-list',
          id: subscriber.id,
          data: {
            subscribed: true,
            subscribedAt: new Date().toISOString(),
            unsubscribedAt: null,
          },
        })
        return NextResponse.json({
          success: true,
          message: 'Successfully resubscribed!'
        })
      }

      return NextResponse.json({
        success: true,
        message: 'Already subscribed!',
      })
    }

    // Create new subscription
    await payload.create({
      collection: 'email-list',
      data: {
        email: email.toLowerCase(),
        subscribed: true,
        subscribedAt: new Date().toISOString(),
        source,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
