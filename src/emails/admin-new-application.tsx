import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components'

interface AdminNewApplicationEmailProps {
  applicantName: string
  email: string
  phone?: string
  age: number
  cityProvince: string
  interestedChinchilla?: string
  hasCage: boolean
  hasExperience: boolean
  applicationId: string
}

export const AdminNewApplicationEmail = ({
  applicantName,
  email,
  phone,
  age,
  cityProvince,
  interestedChinchilla,
  hasCage,
  hasExperience,
  applicationId,
}: AdminNewApplicationEmailProps) => {
  const adminUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3005'}/admin/collections/applications/${applicationId}`

  return (
    <Html>
      <Head />
      <Preview>New adoption application from {applicantName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🐭 New Adoption Application</Heading>

          <Text style={text}>A new adoption application has been submitted:</Text>

          <Section style={infoBox}>
            <Text style={infoRow}>
              <strong>Applicant:</strong> {applicantName}
            </Text>
            <Text style={infoRow}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={infoRow}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            <Text style={infoRow}>
              <strong>Age:</strong> {age}
            </Text>
            <Text style={infoRow}>
              <strong>Location:</strong> {cityProvince}
            </Text>
            {interestedChinchilla && (
              <Text style={infoRow}>
                <strong>Interested In:</strong> {interestedChinchilla}
              </Text>
            )}
          </Section>

          <Section style={infoBox}>
            <Heading style={h2}>Quick Info</Heading>
            <Text style={infoRow}>✅ Has Cage: {hasCage ? 'Yes' : 'No'}</Text>
            <Text style={infoRow}>
              ✅ Has Experience: {hasExperience ? 'Yes' : 'No'}
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={text}>
            <Link href={adminUrl} style={button}>
              View Full Application in Admin Panel
            </Link>
          </Text>

          <Text style={footer}>
            Canadian Chinchilla Rescue Admin
            <br />
            This is an automated notification
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default AdminNewApplicationEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const h1 = {
  color: '#333',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 48px',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '16px 0 8px',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 48px',
  textAlign: 'center' as const,
}

const infoBox = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 48px',
}

const infoRow = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '4px 0',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
}

const button = {
  backgroundColor: '#4f46e5',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '16px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  margin: '48px 0',
}
