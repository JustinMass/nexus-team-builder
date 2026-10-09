import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { classCounts, totalPower, averagePower } from '../domain/calculations';
import type { Destination } from '../domain/lineup';
import { PlayerCard } from './PlayerCard';
interface Props {ids:string[];index:number;onMove:(id:string,destination:Destination)=>void}
export function TeamPanel({ids,index,onMove}:Props){
  const destination=`team-${index}` as Destination;
  const {setNodeRef,isOver}=useDroppable({id:destination,data:{kind:'group',destination}});
  return <section ref={setNodeRef} className={`team-panel ${isOver?'group-over':''}`} aria-label={`Team ${index+1}`}>
    <header className="team-header"><div className="team-title"><span className="team-number">{(index+1).toString().padStart(2,'0')}</span><h2>Team {index+1}</h2><span className={`count ${ids.length<4?'incomplete':''}`}>{ids.length} / 4</span></div><div className="team-total"><strong>{totalPower(ids).toFixed(1)}</strong><span>M</span></div></header>
    <div className="team-meta"><span>Average <b>{averagePower(ids).toFixed(1)}M</b></span><div className="composition" aria-label="Class composition">{classCounts(ids).filter(c=>c.count).map(c=><span key={c.config.id} title={`${c.count} ${c.config.name}${c.count===1?'':'s'}`} style={{color:c.config.color}}><i style={{background:c.config.color}}/>{c.count}</span>)}{ids.length===0&&<span>Empty team</span>}</div></div>
    <SortableContext items={ids} strategy={verticalListSortingStrategy}><div className="team-players">{ids.map(id=><PlayerCard key={id} id={id} destination={destination} onMove={onMove}/>)}{ids.length<4&&<div className="empty-slot">{4-ids.length} open {ids.length===3?'slot':'slots'} · drop a player here</div>}</div></SortableContext>
  </section>
}
