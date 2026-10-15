export function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/** Validates on both the browser and server; whitespace and punctuation are not content. */
export function validateInquiry(type: 'flight' | 'cargo', data: Record<string, string>) {
  for (const [key, label, max] of [
    ['name', 'your name', 100],
    ['from', 'departure city', 80],
    ['to', 'destination', 80],
  ] as const) {
    const value = data[key] || '';
    if (
      value.length > max ||
      (value.match(/\p{L}/gu) || []).length < 2 ||
      Array.from(value).some((character) => character.charCodeAt(0) < 32)
    )
      return `Please enter a valid ${label} with at least two letters.`;
  }
  if (data.from.toLocaleLowerCase() === data.to.toLocaleLowerCase())
    return 'Please choose different departure and destination cities.';
  if (
    !/^\+?[\d\s()-]{7,25}$/.test(data.phone || '') ||
    !/^\d{7,15}$/.test(data.phone.replace(/\D/g, ''))
  )
    return 'Enter a valid phone or WhatsApp number, including your country code.';
  if (type === 'flight') {
    const validDate = (value: string) =>
      /^\d{4}-\d{2}-\d{2}$/.test(value || '') &&
      Number.isFinite(Date.parse(value)) &&
      new Date(value).toISOString().slice(0, 10) === value;
    if (!validDate(data.departure) || data.departure < localToday())
      return 'Choose a departure date today or later.';
    if (data.return && (!validDate(data.return) || data.return < data.departure))
      return 'The return date must be on or after departure.';
    if (
      !/^\d+$/.test(data.passengers || '') ||
      Number(data.passengers) < 1 ||
      Number(data.passengers) > 99
    )
      return 'Enter between 1 and 99 passengers.';
    if (data.cabin && !['Economy', 'Premium Economy', 'Business', 'First'].includes(data.cabin))
      return 'Choose a valid cabin class.';
  } else {
    if (!Number.isFinite(Number(data.weight)) || Number(data.weight) <= 0)
      return 'Enter an approximate weight greater than zero.';
    if (!['Personal', 'Commercial', 'Documents', 'Other'].includes(data.cargoType))
      return 'Choose a cargo type.';
    if (
      (data.description || '').length > 600 ||
      (data.description?.match(/[\p{L}\p{N}]/gu) || []).length < 5
    )
      return 'Please describe what you are sending using at least five letters or numbers.';
  }
  return '';
}
