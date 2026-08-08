import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import InputField from "../ui/InputField";
import TextArea from "../ui/TextArea";
import CheckboxGroup from "../ui/CheckboxGroup";
import Button from "../ui/Button";
import { SERVICES } from "../../data/services";
import type {
  AppointmentFormData,
  AppointmentFormErrors,
  SubmissionStatus,
} from "../../types/appointment";

const HEADING_ID = "appointment-heading";

const EMPTY_FORM: AppointmentFormData = {
  fullName: "",
  phone: "",
  email: "",
  services: [],
  preferredDate: "",
  preferredTime: "Morning",
  additionalInfo: "",
};

const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = SERVICES.map((service) => ({
  id: service.id,
  label: service.name,
}));

function validate(data: AppointmentFormData): AppointmentFormErrors {
  const errors: AppointmentFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_PATTERN.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (data.email.trim() && !EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.services.length === 0) {
    errors.services = "Please select at least one service.";
  }

  if (!data.preferredDate) {
    errors.preferredDate = "Please select a preferred date.";
  }

  return errors;
}

/**
 * No booking backend exists yet in this MVP (see SRS 1.2), so this simulates
 * the network round trip. Swap the body for a real API call once one exists.
 */
function submitAppointmentRequest(): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 1200);
  });
}

export default function Appointment() {
  const [formData, setFormData] = useState<AppointmentFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const updateField = <K extends keyof AppointmentFormData>(
    field: K,
    value: AppointmentFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      await submitAppointmentRequest();
      setStatus("success");
      setFormData(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="appointment"
      aria-labelledby={HEADING_ID}
      className="py-16 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          headingId={HEADING_ID}
          title="Request an Appointment"
          tagline="We're excited to welcome you. Request your appointment below."
        />

        <div className="mx-auto mt-12 max-w-2xl rounded border border-rose-gold/20 bg-blush p-6 shadow-sm sm:p-8">
          {status === "success" && (
            <div
              role="status"
              className="mb-6 rounded border border-terracotta/30 bg-terracotta/10 p-4 text-center"
            >
              <p className="font-heading text-lg font-semibold text-espresso">
                Thank You!
              </p>
              <p className="mt-1 font-body text-sm text-espresso/80">
                Your appointment request has been received successfully.
              </p>
              <p className="font-body text-sm text-espresso/80">
                We&apos;ll contact you shortly to confirm your preferred date
                and time.
              </p>
            </div>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="mb-6 rounded border border-red-300 bg-red-50 p-4 text-center font-body text-sm text-red-700"
            >
              Something went wrong while sending your request. Please try
              again.
            </p>
          )}

          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputField
                id="fullName"
                label="Full Name (Required)"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                error={errors.fullName}
                autoComplete="name"
              />
              <InputField
                id="phone"
                label="Phone Number (Required)"
                type="tel"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                error={errors.phone}
                autoComplete="tel"
              />
            </div>

            <InputField
              id="email"
              label="Email Address (Optional)"
              type="email"
              placeholder="hello@example.com"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              error={errors.email}
              autoComplete="email"
            />

            <div>
              <CheckboxGroup
                legend="Select Service(s)"
                options={SERVICE_OPTIONS}
                selected={formData.services}
                onChange={(services) => updateField("services", services)}
              />
              {errors.services && (
                <p role="alert" className="mt-1.5 font-body text-xs text-red-600">
                  {errors.services}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputField
                id="preferredDate"
                label="Preferred Date"
                type="date"
                value={formData.preferredDate}
                onChange={(event) =>
                  updateField("preferredDate", event.target.value)
                }
                error={errors.preferredDate}
              />

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="preferredTime"
                  className="font-body text-sm font-medium text-espresso"
                >
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(event) =>
                    updateField(
                      "preferredTime",
                      event.target.value as AppointmentFormData["preferredTime"],
                    )
                  }
                  className="rounded border border-rose-gold/20 bg-blush px-4 py-2.5 font-body text-sm text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <TextArea
              id="additionalInfo"
              label="Additional Information"
              placeholder="Skin sensitivity, special requests..."
              rows={4}
              value={formData.additionalInfo}
              onChange={(event) =>
                updateField("additionalInfo", event.target.value)
              }
            />

            <div className="flex flex-col items-center gap-2">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "submitting" && (
                  <Loader2
                    size={18}
                    className="mr-2 animate-spin"
                    aria-hidden="true"
                  />
                )}
                {status === "submitting" ? "Submitting..." : "Submit Request"}
              </Button>
              <p className="font-body text-xs text-espresso/50">
                By submitting, you agree to our booking policy and privacy
                terms.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
