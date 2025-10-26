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
          {/* Header */}
          <Section style={header}>
            <Text style={headerEmoji}>🐭</Text>
            <Text style={headerText}>New Adoption Application</Text>
          </Section>

          {/* Main content */}
          <Section style={content}>
            <Text style={introText}>
              A new adoption application has been submitted and needs your review:
            </Text>

            {/* Applicant Info */}
            <Section style={infoBox}>
              <Heading style={h2}>Applicant Information</Heading>
              <Section style={infoGrid}>
                <Section style={infoRow}>
                  <Text style={infoLabel}>Name</Text>
                  <Text style={infoValue}>{applicantName}</Text>
                </Section>
                <Section style={infoRow}>
                  <Text style={infoLabel}>Email</Text>
                  <Text style={infoValue}>
                    <Link href={`mailto:${email}`} style={emailLink}>
                      {email}
                    </Link>
                  </Text>
                </Section>
                {phone && (
                  <Section style={infoRow}>
                    <Text style={infoLabel}>Phone</Text>
                    <Text style={infoValue}>
                      <Link href={`tel:${phone}`} style={emailLink}>
                        {phone}
                      </Link>
                    </Text>
                  </Section>
                )}
                <Section style={infoRow}>
                  <Text style={infoLabel}>Age</Text>
                  <Text style={infoValue}>{age} years old</Text>
                </Section>
                <Section style={infoRow}>
                  <Text style={infoLabel}>Location</Text>
                  <Text style={infoValue}>{cityProvince}</Text>
                </Section>
                {interestedChinchilla && (
                  <Section style={infoRow}>
                    <Text style={infoLabel}>Interested In</Text>
                    <Text style={infoValueHighlight}>{interestedChinchilla}</Text>
                  </Section>
                )}
              </Section>
            </Section>

            {/* Quick Assessment */}
            <Section style={quickInfoBox}>
              <Heading style={h2}>Quick Assessment</Heading>
              <Section style={badgeContainer}>
                <Section style={hasCage ? badge : badgeWarning}>
                  <Text style={badgeText}>
                    {hasCage ? '✓' : '✗'} {hasCage ? 'Has Cage' : 'Needs Cage'}
                  </Text>
                </Section>
                <Section style={hasExperience ? badge : badgeNeutral}>
                  <Text style={badgeText}>
                    {hasExperience ? '✓' : '○'} {hasExperience ? 'Experienced' : 'First-Time Owner'}
                  </Text>
                </Section>
              </Section>
            </Section>

            <Hr style={hr} />

            {/* CTA */}
            <Section style={ctaSection}>
              <Link href={adminUrl} style={button}>
                View Full Application
              </Link>
              <Text style={helpText}>
                Click above to review the complete application in the admin panel
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Canadian Chinchilla Rescue • Admin Notification
            </Text>
            <Text style={footerSubtext}>
              This is an automated email. Do not reply to this message.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default AdminNewApplicationEmail

// Styles
const main = {
  backgroundColor: '#f6f6f9',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '20px 0',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
}

const header = {
  backgroundColor: '#C1272D',
  padding: '32px 24px',
  textAlign: 'center' as const,
}

const headerEmoji = {
  fontSize: '40px',
  margin: '0 0 8px 0',
}

const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '1.2',
}

const content = {
  padding: '0 24px 24px 24px',
}

const introText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
}

const h2 = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
}

const infoBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px 0',
  border: '1px solid #e5e7eb',
}

const quickInfoBox = {
  backgroundColor: '#fef3c7',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px 0',
  border: '1px solid #fde68a',
}

const infoGrid = {
  margin: '0',
}

const infoRow = {
  marginBottom: '12px',
  paddingBottom: '12px',
  borderBottom: '1px solid #e5e7eb',
}

const infoLabel = {
  color: '#6b7280',
  fontSize: '13px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 4px 0',
}

const infoValue = {
  color: '#1a1a1a',
  fontSize: '15px',
  margin: '0',
  lineHeight: '1.5',
}

const infoValueHighlight = {
  color: '#C1272D',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0',
  lineHeight: '1.5',
}

const emailLink = {
  color: '#C1272D',
  textDecoration: 'none',
}

const badgeContainer = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap' as const,
}

const badge = {
  backgroundColor: '#d1fae5',
  color: '#065f46',
  borderRadius: '6px',
  padding: '8px 12px',
  display: 'inline-block',
  marginRight: '8px',
  marginBottom: '8px',
  border: '1px solid #a7f3d0',
}

const badgeWarning = {
  backgroundColor: '#fef3c7',
  color: '#92400e',
  borderRadius: '6px',
  padding: '8px 12px',
  display: 'inline-block',
  marginRight: '8px',
  marginBottom: '8px',
  border: '1px solid #fde68a',
}

const badgeNeutral = {
  backgroundColor: '#e0e7ff',
  color: '#3730a3',
  borderRadius: '6px',
  padding: '8px 12px',
  display: 'inline-block',
  marginRight: '8px',
  marginBottom: '8px',
  border: '1px solid #c7d2fe',
}

const badgeText = {
  fontSize: '13px',
  fontWeight: '600',
  margin: '0',
  lineHeight: '1',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
}

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#C1272D',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 40px',
  margin: '0',
}

const helpText = {
  color: '#6b7280',
  fontSize: '13px',
  margin: '12px 0 0 0',
  lineHeight: '1.4',
}

const footer = {
  backgroundColor: '#f9fafb',
  padding: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e5e7eb',
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px 0',
}

const footerSubtext = {
  color: '#9ca3af',
  fontSize: '12px',
  margin: '0',
}
