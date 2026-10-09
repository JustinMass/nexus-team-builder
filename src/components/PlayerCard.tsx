import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { classById } from '../config/season';
import { playerById } from '../data/players';
import { destinations, type Destination } from '../domain/lineup';
export interface PlayerCardProps {id:string;destination:Destination;onMove:(id:string,destination:Destination)=>void}
export function PlayerCard({id,destination,onMove}:PlayerCardProps){
  const p=playerById[id],c=classById[p.class];
  const {attributes,listeners,setNodeRef,transform,transition,isDragging,isOver}=useSortable({id, data:{kind:'player',destination}});
  return <article ref={setNodeRef} data-testid={`player-${id}`} className={`player-card ${isDragging?'dragging':''} ${isOver?'drop-target':''}`} style={{borderLeftColor:c.color,transform:CSS.Transform.toString(transform),transition}}>
    <button className="drag-handle" aria-label={`Drag ${p.name}`} {...attributes} {...listeners}><GripVertical size={16}/></button>
    <span className="rank" title="Server rank">{p.rank.toString().padStart(2,'0')}</span>
    <div className="player-identity"><strong title={p.name}>{p.name}</strong><div><span className="class-name" style={{color:c.color}}>{c.name}</span>{p.status==='inactive'&&<span className="inactive">Inactive</span>}</div></div>
    <span className="player-power">{p.power.toFixed(1)}<small>M</small></span>
    <select value={destination} aria-label={`Move ${p.name}`} onChange={e=>onMove(id,e.target.value as Destination)}>{destinations.map(d=><option key={d} value={d}>{d==='reserves'?'Reserve':`Team ${Number(d.slice(-1))+1}`}</option>)}</select>
  </article>
}
export function PlayerPreview({id}:{id:string}){
  const p=playerById[id],c=classById[p.class];
  return <div className="player-card overlay" style={{borderLeftColor:c.color}} aria-hidden="true"><GripVertical size={16}/><span className="rank">{p.rank}</span><div className="player-identity"><strong>{p.name}</strong><div><span className="class-name" style={{color:c.color}}>{c.name}</span>{p.status==='inactive'&&<span className="inactive">Inactive</span>}</div></div><span className="player-power">{p.power.toFixed(1)}<small>M</small></span><span/></div>
}
