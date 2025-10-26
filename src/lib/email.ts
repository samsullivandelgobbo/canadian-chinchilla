import { Resend } from "resend";
import { render } from "@react-email/components";
import { getPayload } from "payload";
import config from "@payload-config";
import ApplicationConfirmationEmail from "@/emails/application-confirmation";
import AdminNewApplicationEmail from "@/emails/admin-new-application";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Canadian Chinchilla Rescue <noreply@canadianchinchilla.ca>";
const FALLBACK_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@canadianchinchilla.ca";

export async function sendApplicationConfirmation({
  to,
  applicantName,
  interestedChinchilla,
}: {
  to: string;
  applicantName: string;
  interestedChinchilla?: string;
}) {
  try {
    const emailHtml = await render(
      ApplicationConfirmationEmail({
        applicantName,
        interestedChinchilla,
      })
    );

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: "Thank you for your adoption application",
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending confirmation email:", error);
      return { success: false, error };
    }

    console.log("Confirmation email sent:", data?.id);
    return { success: true, id: data?.id };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return { success: false, error };
  }
}

export async function sendAdminNotification({
  applicantName,
  email,
  phone,
  age,
  cityProvince,
  interestedChinchilla,
  hasCage,
  hasExperience,
  applicationId,
}: {
  applicantName: string;
  email: string;
  phone?: string;
  age: number;
  cityProvince: string;
  interestedChinchilla?: string;
  hasCage: boolean;
  hasExperience: boolean;
  applicationId: string;
}) {
  try {
    // Get all admin users from the database
    const payload = await getPayload({ config });
    const admins = await payload.find({
      collection: "users",
      where: {
        role: {
          equals: "admin",
        },
      },
    });

    // Get all admin email addresses
    const adminEmails = admins.docs
      .map((admin) => admin.email)
      .filter((email): email is string => !!email);

    // If no admins found, use fallback
    if (adminEmails.length === 0) {
      console.warn("No admin users found, using fallback email");
      adminEmails.push(FALLBACK_ADMIN_EMAIL);
    }

    console.log(`Sending admin notification to ${adminEmails.length} admins`);

    // Render the email
    const emailHtml = await render(
      AdminNewApplicationEmail({
        applicantName,
        email,
        phone,
        age,
        cityProvince,
        interestedChinchilla,
        hasCage,
        hasExperience,
        applicationId,
      })
    );

    // Send to all admins using BCC (keeps emails private)
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: adminEmails[0], // First admin as primary recipient
      bcc: adminEmails.length > 1 ? adminEmails.slice(1) : undefined, // Rest as BCC
      subject: `🐭 New Application: ${applicantName}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending admin notification:", error);
      return { success: false, error };
    }

    console.log(`Admin notification sent to ${adminEmails.length} admins:`, data?.id);
    return { success: true, id: data?.id, recipientCount: adminEmails.length };
  } catch (error) {
    console.error("Error sending admin notification:", error);
    return { success: false, error };
  }
}
