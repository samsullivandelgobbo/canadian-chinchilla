import { Resend } from "resend";
import { render } from "@react-email/components";
import ApplicationConfirmationEmail from "@/emails/application-confirmation";
import AdminNewApplicationEmail from "@/emails/admin-new-application";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Canadian Chinchilla Rescue <noreply@canadianchinchilla.ca>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@canadianchinchilla.ca";

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

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Application: ${applicantName}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending admin notification:", error);
      return { success: false, error };
    }

    console.log("Admin notification sent:", data?.id);
    return { success: true, id: data?.id };
  } catch (error) {
    console.error("Error sending admin notification:", error);
    return { success: false, error };
  }
}
