import type { ButtonHTMLAttributes, ReactNode } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variante?: 'primaire' | 'secondaire'; children: ReactNode }
export default function Bouton({ variante = 'primaire', className = '', children, ...props }: Props) { return <button className={`btn ${variante === 'primaire' ? 'btn-primary' : 'btn-secondary'} ${className}`} {...props}>{children}</button> }
