import type { TextareaHTMLAttributes } from 'react'
type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }
export default function ZoneTexte({ label, id, ...props }: Props) { const identifiant = id ?? props.name; return <div><label className="field-label" htmlFor={identifiant}>{label}</label><textarea id={identifiant} className="input min-h-32 resize-y" {...props}/></div> }
