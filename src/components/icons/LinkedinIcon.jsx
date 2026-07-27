// lucide-react removed brand/logo icons for licensing reasons, so this is a
// small hand-drawn LinkedIn glyph used wherever `Linkedin` would otherwise be imported.
export default function LinkedinIcon({ className = 'w-5 h-5', strokeWidth = 1.7 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.2v6M7.5 7.6v.02M11.2 16.2v-3.6c0-1.2.9-2 2-2s1.9.8 1.9 2v3.6M11.2 10.2v6" />
    </svg>
  )
}
