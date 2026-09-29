import { ArrowRight, Check, Package, MessageCircle, MapPin, CalendarDays, Route, FileText } from 'lucide-react';

type PreviewType = 'flight' | 'cargo' | 'travel' | 'support' | 'request' | 'options' | 'confirm';

// Illustrative service previews, not live availability, prices, or booking confirmations.
export default function ProductMockup({ type = 'flight' }: { type?: PreviewType }) {
  return <div className={`product-ui service-preview preview-${type}`} aria-label="Illustrative service preview">
    <div className="preview-top"><span>KAAH / {type === 'flight' ? 'FLIGHTS' : type === 'cargo' ? 'CARGO' : 'YOUR JOURNEY'}</span><span className="preview-label">Preview</span></div>
    {(type === 'flight' || type === 'request') && <><div className="route-preview"><div><small>FROM</small><strong>Nairobi</strong></div><ArrowRight size={18} /><div><small>TO</small><strong>Mogadishu</strong></div></div><div className="preview-row"><CalendarDays size={15} /><span>Your dates. Your plans.</span></div><div className="preview-action">{type === 'request' ? 'Share your details' : 'Find your flight'}<ArrowRight size={13} /></div></>}
    {type === 'cargo' && <><div className="parcel-preview"><Package size={43} strokeWidth={1} /><div><strong>Every parcel matters.</strong><small>Personal · Business · Documents</small></div></div><div className="preview-row"><MapPin size={14} /> Origin <ArrowRight size={13} /> Destination</div><div className="preview-action">Request cargo options<ArrowRight size={13} /></div></>}
    {type === 'travel' && <><div className="preview-row"><Route size={16} /><span>Routes & connections</span><Check size={13} /></div><div className="preview-row"><FileText size={16} /><span>Travel information</span><Check size={13} /></div><div className="preview-row"><MessageCircle size={16} /><span>A real person to help</span><Check size={13} /></div></>}
    {type === 'support' && <><div className="support-bubble">Let’s make your next step simple.</div><div className="support-bubble reply">Flights, cargo, or a little guidance?</div><div className="preview-row"><span className="support-dot" />Talk to the Kaah team</div></>}
    {type === 'options' && <><div className="preview-row"><Check size={15} /><span>Available routes</span></div><div className="preview-row"><Check size={15} /><span>Pricing & information</span></div><div className="preview-row"><Check size={15} /><span>Choose what works for you</span></div></>}
    {type === 'confirm' && <><div className="confirm-symbol"><Check size={29} /></div><strong className="confirm-title">Your next chapter.</strong><p>Confirm with our team.<br />We’ll guide your next steps.</p></>}
  </div>;
}
