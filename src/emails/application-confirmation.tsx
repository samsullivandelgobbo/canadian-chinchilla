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
  Row,
  Column,
} from "@react-email/components";

interface ApplicationConfirmationEmailProps {
  applicantName: string;
  interestedChinchilla?: string;
}

export const ApplicationConfirmationEmail = ({
  applicantName,
  interestedChinchilla,
}: ApplicationConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for your adoption application - Canadian Chinchilla Rescue
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with branding */}
          <Section style={header}>
            <Text style={headerText}>🐭 Canadian Chinchilla Rescue</Text>
            <Text style={tagline}>Every Chinchilla Deserves a Home</Text>
          </Section>

          {/* Main content */}
          <Section style={content}>
            <Heading style={h1}>Application Received!</Heading>

            <Text style={text}>Hi {applicantName},</Text>

            <Text style={text}>
              Thank you for your interest in adopting{" "}
              {interestedChinchilla ? (
                <strong style={highlight}>{interestedChinchilla}</strong>
              ) : (
                "a chinchilla"
              )}{" "}
              from Canadian Chinchilla Rescue.
            </Text>

            <Text style={text}>
              We've received your application and will review it carefully. Our
              volunteer team will reach out to you within <strong>3-5 business days</strong> to
              discuss the next steps.
            </Text>

            {/* What happens next section */}
            <Section style={infoBox}>
              <Heading style={h2}>What Happens Next?</Heading>

              <Section style={step}>
                <Text style={stepNumber}>1</Text>
                <Section style={stepContent}>
                  <Text style={stepTitle}>Application Review</Text>
                  <Text style={stepText}>
                    We'll carefully review your application details
                  </Text>
                </Section>
              </Section>

              <Section style={step}>
                <Text style={stepNumber}>2</Text>
                <Section style={stepContent}>
                  <Text style={stepTitle}>Phone Interview</Text>
                  <Text style={stepText}>
                    If approved, we'll schedule a call to discuss your home and experience
                  </Text>
                </Section>
              </Section>

              <Section style={step}>
                <Text style={stepNumber}>3</Text>
                <Section style={stepContent}>
                  <Text style={stepTitle}>Home Visit</Text>
                  <Text style={stepText}>
                    We may arrange a visit to ensure your setup is suitable
                  </Text>
                </Section>
              </Section>

              <Section style={step}>
                <Text style={stepNumber}>4</Text>
                <Section style={stepContent}>
                  <Text style={stepTitle}>Meet & Greet</Text>
                  <Text style={stepText}>
                    You'll have the chance to meet the chinchilla(s)
                  </Text>
                </Section>
              </Section>

              <Section style={step}>
                <Text style={stepNumber}>5</Text>
                <Section style={stepContent}>
                  <Text style={stepTitle}>Adoption Day</Text>
                  <Text style={stepText}>
                    If everything goes well, you can bring your new friend home!
                  </Text>
                </Section>
              </Section>
            </Section>

            <Hr style={hr} />

            {/* CTA section */}
            <Section style={ctaSection}>
              <Text style={text}>
                In the meantime, we encourage you to read our care guide:
              </Text>
              <Link href="https://canadianchinchilla.ca/care" style={button}>
                Chinchilla Care Guide
              </Link>
            </Section>

            <Text style={text}>
              If you have any questions, please don't hesitate to reach out.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              <Link href="https://canadianchinchilla.ca" style={footerLink}>
                canadianchinchilla.ca
              </Link>
              {" • "}
              <Link href="mailto:info@canadianchinchilla.ca" style={footerLink}>
                info@canadianchinchilla.ca
              </Link>
            </Text>
            <Text style={footerCopyright}>
              © 2025 Canadian Chinchilla Rescue. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ApplicationConfirmationEmail;

// Styles
const main = {
  backgroundColor: "#f6f6f9",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const header = {
  backgroundColor: "#C1272D",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const headerText = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 4px 0",
};

const tagline = {
  color: "rgba(255,255,255,0.9)",
  fontSize: "14px",
  margin: "0",
};

const content = {
  padding: "0 24px 24px 24px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "32px 0 24px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
};

const h2 = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const highlight = {
  color: "#C1272D",
  fontWeight: "600",
};

const infoBox = {
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
  border: "1px solid #e5e7eb",
};

const step = {
  display: "flex",
  marginBottom: "16px",
  alignItems: "flex-start",
};

const stepNumber = {
  backgroundColor: "#C1272D",
  color: "#ffffff",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 12px 0 0",
  flexShrink: 0,
  textAlign: "center" as const,
  lineHeight: "28px",
};

const stepContent = {
  flex: 1,
};

const stepTitle = {
  color: "#1a1a1a",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0 0 4px 0",
  lineHeight: "1.4",
};

const stepText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const button = {
  backgroundColor: "#C1272D",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 32px",
  margin: "12px 0",
};

const footer = {
  backgroundColor: "#f9fafb",
  padding: "24px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 8px 0",
};

const footerLink = {
  color: "#C1272D",
  textDecoration: "none",
};

const footerCopyright = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
};
