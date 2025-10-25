// Configuration for Canadian Chinchilla Rescue
// Update these settings to control various aspects of the rescue operations

export const RESCUE_CONFIG = {
  // Application restrictions
  applications: {
    // Enable/disable applications globally
    acceptingApplications: true,
    
    // Restrict applications to specific provinces
    // Set to 'all' to accept from all provinces, or provide array of province codes
    allowedProvinces: 'all' as 'all' | string[],
    // Example: ['ON', 'QC', 'MB'] for Ontario, Quebec, and Manitoba only
    
    // Minimum age for primary applicant
    minimumAge: 18,
    
    // Maximum applications per day (set to 0 for unlimited)
    dailyApplicationLimit: 0,
    
    // Require phone number
    requirePhoneNumber: false,
  },

  // Geographic settings
  provinces: {
    'AB': 'Alberta',
    'BC': 'British Columbia', 
    'MB': 'Manitoba',
    'NB': 'New Brunswick',
    'NL': 'Newfoundland and Labrador',
    'NS': 'Nova Scotia',
    'ON': 'Ontario',
    'PE': 'Prince Edward Island',
    'QC': 'Quebec',
    'SK': 'Saskatchewan',
    'NT': 'Northwest Territories',
    'NU': 'Nunavut',
    'YT': 'Yukon'
  },

  // Contact information
  contact: {
    email: 'info@chinchillarescue.ca',
    adoptionEmail: 'adopt@chinchillarescue.ca',
    surrenderEmail: 'surrender@chinchillarescue.ca',
    emergencyEmail: 'emergency@chinchillarescue.ca',
    volunteerEmail: 'volunteer@chinchillarescue.ca',
  },

  // Site features
  features: {
    // Show/hide donation section
    showDonations: true,
    
    // Show/hide volunteer recruitment
    showVolunteerRecruitment: true,
    
    // Enable blog functionality (if implemented)
    enableBlog: false,
    
    // Show application status on homepage
    showApplicationStatus: true,
  },

  // Messaging
  messages: {
    // Message shown when applications are closed
    applicationsClosedMessage: "We are temporarily not accepting new applications. Please check back soon or contact us for more information.",
    
    // Message shown when province restrictions are active
    provinceRestrictionMessage: "We are currently only accepting applications from specific regions. Please contact us if you're outside the listed areas.",
    
    // Homepage announcement (leave empty to hide)
    announcement: "",
  }
};

// Helper functions
export function isApplicationsOpen(): boolean {
  return RESCUE_CONFIG.applications.acceptingApplications;
}

export function isProvinceAllowed(province: string): boolean {
  if (RESCUE_CONFIG.applications.allowedProvinces === 'all') {
    return true;
  }
  return RESCUE_CONFIG.applications.allowedProvinces.includes(province);
}

export function getAllowedProvinces(): Array<{code: string, name: string}> {
  if (RESCUE_CONFIG.applications.allowedProvinces === 'all') {
    return Object.entries(RESCUE_CONFIG.provinces).map(([code, name]) => ({
      code,
      name
    }));
  }
  
  return RESCUE_CONFIG.applications.allowedProvinces.map(code => ({
    code,
    name: RESCUE_CONFIG.provinces[code as keyof typeof RESCUE_CONFIG.provinces]
  }));
}

export function getProvinceRestrictionMessage(): string {
  if (RESCUE_CONFIG.applications.allowedProvinces === 'all') {
    return '';
  }
  
  const allowedProvinceNames = RESCUE_CONFIG.applications.allowedProvinces
    .map(code => RESCUE_CONFIG.provinces[code as keyof typeof RESCUE_CONFIG.provinces])
    .join(', ');
    
  return `Currently accepting applications from: ${allowedProvinceNames}`;
}