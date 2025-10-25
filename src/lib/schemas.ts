import { z } from 'zod';

export const applicationSchema = z.object({
  // Personal Information
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address'),
  
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .optional(),
  
  age: z
    .number()
    .min(18, 'You must be at least 18 years old to adopt')
    .max(100, 'Please enter a valid age'),
  
  city: z
    .string()
    .min(1, 'City is required'),
  
  province: z
    .string()
    .min(1, 'Province is required'),

  // Housing & Setup
  hasCage: z
    .boolean(),
  
  cageType: z
    .string()
    .optional(),
  
  hasAirConditioning: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Air conditioning is required for chinchilla care'
    }),

  // Experience
  hasExperience: z
    .boolean(),
  
  hasPets: z
    .boolean(),
  
  petTypes: z
    .string()
    .optional(),

  // Household
  hasChildren: z
    .boolean(),
  
  hasAllergies: z
    .boolean(),

  // Chinchilla Interest
  interestedChinchilla: z
    .string()
    .optional(),
  
  whyAdopt: z
    .string()
    .min(100, 'Please provide at least 100 characters explaining why you want to adopt')
    .max(1000, 'Response must be less than 1000 characters'),

  // Agreements
  readCareGuide: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must read the care guide before applying'
    }),
  
  financialResponsibility: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must acknowledge financial responsibility'
    }),
  
  timeCommitment: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must acknowledge the time commitment required'
    }),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;