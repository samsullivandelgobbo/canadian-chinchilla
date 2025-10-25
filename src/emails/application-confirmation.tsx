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
} from '@react-email/components'

interface ApplicationConfirmationEmailProps {
  applicantName: string
  interestedChinchilla?: string
}

export const ApplicationConfirmationEmail = ({
  applicantName,
  interestedChinchilla,
}: ApplicationConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your adoption application - Canadian Chinchilla Rescue</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Application Received!</Heading>

          <Text style={text}>Hi {applicantName},</Text>

          <Text style={text}>
            Thank you for your interest in adopting{' '}
            {interestedChinchilla ? (
              <>
                <strong>{interestedChinchilla}</strong>
              </>
            ) : (
              'a chinchilla'
            )}{' '}
            from Canadian Chinchilla Rescue.
          </Text>

          <Text style={text}>
            We've received your application and will review it carefully. Our volunteer team will
            reach out to you within 3-5 business days to discuss the next steps.
          </Text>

          <Section style={infoBox}>
            <Heading style={h2}>What Happens Next?</Heading>
            <Text style={text}>
              1. <strong>Application Review</strong> - We'll review your application details
            </Text>
            <Text style={text}>
              2. <strong>Phone Interview</strong> - If approved, we'll schedule a phone call to
              discuss your home and experience
            </Text>
            <Text style={text}>
              3. <strong>Home Visit</strong> - We may arrange a home visit to ensure your setup is
              suitable
            </Text>
            <Text style={text}>
              4. <strong>Meet & Greet</strong> - You'll have the chance to meet the chinchilla(s)
            </Text>
            <Text style={text}>
              5. <strong>Adoption</strong> - If everything goes well, you can bring your new friend
              home!
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={text}>
            In the meantime, we encourage you to read our{' '}
            <a href="https://canadianchinchillarescue.ca/care" style={link}>
              Chinchilla Care Guide
            </a>{' '}
            to prepare for your new companion.
          </Text>

          <Text style={text}>
            If you have any questions, please don't hesitate to reach out to us.
          </Text>

          <Text style={footer}>
            Canadian Chinchilla Rescue
            <br />
            Every Chinchilla Deserves a Home
            <br />
            <a href="mailto:info@canadianchinchillarescue.ca" style={link}>
              info@canadianchinchillarescue.ca
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ApplicationConfirmationEmail

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
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 48px',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#333',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '16px 0 8px',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 48px',
}

const infoBox = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 48px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
}

const link = {
  color: '#4f46e5',
  textDecoration: 'underline',
}

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  margin: '48px 0',
}
