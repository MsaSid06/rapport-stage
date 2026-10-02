import type { InputHTMLAttributes } from 'react'
type Props = InputHTMLAttributes<HTMLInputElement> & { label: string }
export default function Champ({ label, id, ...props }: Props) { const identifiant = id ?? props.name; return <div><label className="field-label" htmlFor={identifiant}>{label}</label><input id={identifiant} className="input" {...props}/></div> }
