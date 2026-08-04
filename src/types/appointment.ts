export type PreferredTime = "Morning" | "Afternoon" | "Evening";

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  services: string[];
  preferredDate: string;
  preferredTime: PreferredTime;
  additionalInfo: string;
}

export interface AppointmentFormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  services?: string;
  preferredDate?: string;
}

export type SubmissionStatus = "idle" | "submitting" | "success" | "error";
