'use server';

import { ApplicationFormData } from '@/lib/schemas';
import { createApplication } from '@/lib/payload/applications';

export async function submitApplication(data: ApplicationFormData) {
  try {
    // Create a formatted string of all application data
    const fullApplication = `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Age: ${data.age}
Location: ${data.city}, ${data.province}

Housing & Setup:
- Has cage: ${data.hasCage ? 'Yes' : 'No'}
- Cage type: ${data.cageType || 'Not specified'}
- Has air conditioning: ${data.hasAirConditioning ? 'Yes' : 'No'}

Experience & Household:
- Has chinchilla experience: ${data.hasExperience ? 'Yes' : 'No'}
- Has other pets: ${data.hasPets ? 'Yes' : 'No'}
- Pet types: ${data.petTypes || 'None'}
- Has children: ${data.hasChildren ? 'Yes' : 'No'}
- Has allergies: ${data.hasAllergies ? 'Yes' : 'No'}

Interest:
- Interested chinchilla: ${data.interestedChinchilla || 'No preference'}
- Why adopt: ${data.whyAdopt}

Agreements:
- Read care guide: ${data.readCareGuide ? 'Yes' : 'No'}
- Financial responsibility: ${data.financialResponsibility ? 'Yes' : 'No'}
- Time commitment: ${data.timeCommitment ? 'Yes' : 'No'}
    `.trim();

    // Submit to Payload
    const applicationId = await createApplication({
      applicantName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      age: data.age,
      cityProvince: `${data.city}, ${data.province}`,
      interestedChinchilla: data.interestedChinchilla,
      hasCage: data.hasCage,
      hasExperience: data.hasExperience,
      fullApplication,
    });

    if (!applicationId) {
      throw new Error('Failed to create application');
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting application:', error);
    throw new Error('Failed to submit application');
  }
}