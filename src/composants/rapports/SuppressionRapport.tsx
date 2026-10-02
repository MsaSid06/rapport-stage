import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { supprimerRapport } from '../../services/rapports/serviceRapports'
import DialogueConfirmation from '../interface/DialogueConfirmation'
export default function SuppressionRapport({ id }: { id: number }) { const [ouvert, setOuvert] = useState(false); const [erreur, setErreur] = useState(''); const naviguer = useNavigate(); async function confirmer() { try { await supprimerRapport(id); naviguer('/rapports') } catch (e) { setErreur(e instanceof Error ? e.message : 'Suppression impossible.'); setOuvert(false) } } return <><button className="btn btn-secondary" onClick={() => setOuvert(true)}><Trash2 size={16}/>Supprimer</button>{erreur && <p className="error-text text-sm">{erreur}</p>}{ouvert && <DialogueConfirmation titre="Supprimer ce rapport ?" message="Cette action est définitive." confirmer={() => void confirmer()} annuler={() => setOuvert(false)}/>}</> }
