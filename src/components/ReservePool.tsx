import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { totalPower } from '../domain/calculations';
import { playerById } from '../data/players';
import type { Destination } from '../domain/lineup';
import { PlayerCard } from './PlayerCard';
export function ReservePool({ids,onMove}:{ids:string[];onMove:(id:string,destination:Destination)=>void}){
  const {setNodeRef,isOver}=useDroppable({id:'reserves',data:{kind:'group',destination:'reserves'}});
  const inactive=ids.filter(id=>playerById[id].status==='inactive').length;
  return <section ref={setNodeRef} className={`reserve-panel ${isOver?'group-over':''}`} aria-label="Reserve Pool"><header><div><h2>Reserve Pool <span>{ids.length}</span></h2><p>{totalPower(ids).toFixed(1)}M total{inactive>0&&` · ${inactive} inactive`}</p></div></header><SortableContext items={ids} strategy={verticalListSortingStrategy}><div className="reserve-players">{ids.map(id=><PlayerCard key={id} id={id} destination="reserves" onMove={onMove}/>)}{ids.length===0&&<div className="empty-slot">Drop players here to reserve them.</div>}</div></SortableContext></section>
}
