import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{primary:'var(--primary)',brand:'var(--brand)', 'brand-blue':'var(--primary)', 'brand-green':'var(--brand)',lime:'var(--lime)',mint:'var(--mint)',muted:'var(--muted)'}}},plugins:[]} satisfies Config;
