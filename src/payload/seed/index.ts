import { getPayload } from 'payload'
import config from '@payload-config'

export async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding database...')

  try {
    // Create admin user
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    let adminUser
    if (existingUsers.docs.length === 0) {
      console.log('Creating admin user...')
      adminUser = await payload.create({
        collection: 'users',
        data: {
          email: 'admin@chinchillarescue.ca',
          password: 'admin123',
          role: 'admin',
          name: 'Admin User',
        },
      })
      console.log('✅ Admin user created: admin@chinchillarescue.ca / admin123')
    } else {
      adminUser = existingUsers.docs[0]
      console.log('✅ Admin user already exists')
    }

    // Check if we already have chinchillas
    const existingChinchillas = await payload.find({
      collection: 'chinchillas',
      limit: 1,
    })

    if (existingChinchillas.docs.length > 0) {
      console.log('✅ Database already seeded with chinchillas')
      return
    }

    // Create test chinchilla
    console.log('Creating test chinchilla...')
    const chinchilla = await payload.create({
      collection: 'chinchillas',
      data: {
        name: 'Fluffy',
        slug: 'fluffy',
        age: 3,
        gender: 'Male',
        color: 'Standard Grey',
        description:
          'Fluffy is a sweet and curious chinchilla who loves to explore! He enjoys running on his wheel and taking dust baths. Fluffy would do best in a quiet home where he can get plenty of attention. He\'s friendly with humans once he gets to know you, but can be shy at first. Perfect for someone with chinchilla experience looking for an affectionate companion.',
        status: 'Available',
        friendlyWithOthers: false,
        dateAdded: new Date().toISOString(),
        notes: 'Test chinchilla created during database seeding.',
      },
    })

    console.log('✅ Test chinchilla "Fluffy" created')

    // Create a test blog post
    console.log('Creating test blog post...')
    const blogPost = await payload.create({
      collection: 'blog',
      data: {
        title: 'Welcome to Canadian Chinchilla Rescue',
        slug: 'welcome-to-canadian-chinchilla-rescue',
        author: adminUser.id,
        publishedDate: new Date().toISOString(),
        status: 'published',
        excerpt:
          'Learn about our mission to rescue and rehome chinchillas across Canada.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Welcome to the Canadian Chinchilla Rescue blog! We\'re dedicated to finding loving homes for chinchillas in need.',
                  },
                ],
              },
            ],
          },
        },
        tags: [{ tag: 'welcome' }, { tag: 'about' }],
      },
    })

    console.log('✅ Test blog post created')
    console.log('\n🎉 Seeding complete!')
    console.log('\n📝 You can now:')
    console.log('   - Access admin panel at: http://localhost:3000/admin')
    console.log('   - Login with: admin@chinchillarescue.ca / admin123')
    console.log('   - View test chinchilla on the homepage')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }
}
