export type InquiryType = 'flight' | 'cargo' | 'general';
export const inquiryMessages: Record<InquiryType, string> = {
  flight: "Hi Kaah, I'd like to check a flight.",
  cargo: "Hi Kaah, I'd like to get a cargo quote.",
  general: "Hi Kaah, I'd like to make an inquiry.",
};

export function getWhatsAppUrl(message = inquiryMessages.general, number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER): string | null {
  const normalized = (number || '').replace(/[\s()+-]/g, '');
  if (!/^[1-9]\d{7,14}$/.test(normalized)) return null;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function formatInquiry(type: 'flight' | 'cargo', details: Record<string, string>): string {
  const rows: [string, string][] = type === 'flight'
    ? [['From', 'from'], ['To', 'to'], ['Departure', 'departure'], ['Return', 'return'], ['Passengers', 'passengers'], ['Cabin Class', 'cabin']]
    : [['From', 'from'], ['To', 'to'], ['Weight (kg)', 'weight'], ['Cargo Type', 'cargoType'], ['Description', 'description']];
  return [inquiryMessages[type], '', ...rows.filter(([, key]) => details[key]).map(([label, key]) => `${label}: ${details[key]}`), '', `Name: ${details.name}`, `Phone: ${details.phone}`].join('\n');
}
