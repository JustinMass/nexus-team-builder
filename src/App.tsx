import { useState } from 'react';
import { DndContext, DragOverlay, PointerSensor, KeyboardSensor, useSensor, useSensors, pointerWithin, rectIntersection, closestCenter, type CollisionDetection, type DragEndEvent } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Users, Shield, GripVertical } from 'lucide-react';
import { players } from './data/players';
import { totalPower } from './domain/calculations';
import { type Destination } from './domain/lineup';
import { useLineup } from './hooks/useLineup';
import { LineupHeader } from './components/LineupHeader';
import { ClassLegend } from './components/ClassLegend';
import { TeamPanel } from './components/TeamPanel';
import { ReservePool } from './components/ReservePool';
import { PlayerPreview } from './components/PlayerCard';
import { ExportControls } from './components/ExportControls';
import './style.css';
const collisions:CollisionDetection=args=>{
  const hit=args.pointerCoordinates?pointerWithin(args):closestCenter(args);
  const result=hit.length?hit:rectIntersection(args);
  const player=result.find(c=>args.droppableContainers.find(container=>container.id===c.id)?.data.current?.kind==='player');
  return player?[player]:result;
};
export default function App(){
  const {state,dispatch,warning,reset}=useLineup();
  const [dragged,setDragged]=useState<string|null>(null);
  const sensors=useSensors(useSensor(PointerSensor,{activationConstraint:{distance:6}}),useSensor(KeyboardSensor,{coordinateGetter:sortableKeyboardCoordinates}));
  const onMove=(id:string,destination:Destination)=>dispatch({type:'move',id,destination});
  function onDragEnd({active,over}:DragEndEvent){setDragged(null);if(!over)return;const data=over.data.current;if(!data)return;dispatch({type:'move',id:String(active.id),destination:data.destination as Destination,target:data.kind==='player'?String(over.id):undefined})}
  const assigned=state.present.teams.flat(),activeCount=players.filter(p=>p.status==='active').length;
  return <div className="app-shell"><LineupHeader state={state} onUndo={()=>dispatch({type:'undo'})} onRedo={()=>dispatch({type:'redo'})} onReset={reset}/>
    <main><div className="overview"><div className="summary-stats"><div><Shield size={17}/><strong>4</strong><span>teams</span></div><div><Users size={17}/><strong>{assigned.length}<small>/16</small></strong><span>assigned</span></div><div><strong>{totalPower(assigned).toFixed(1)}<small>M</small></strong><span>lineup power</span></div><div className="roster-count"><strong>{activeCount}</strong><span>active players</span></div></div><ExportControls lineup={state.present} onDiscard={reset}/></div>
      <div className="board-heading"><ClassLegend/><p><GripVertical size={14}/>Drag to move · drop on a player in a full team to swap</p></div>
      {(state.error||warning)&&<div className="warning" role="status" aria-label="Lineup feedback">{state.error||warning}</div>}
      <DndContext sensors={sensors} collisionDetection={collisions} onDragStart={e=>setDragged(String(e.active.id))} onDragCancel={()=>setDragged(null)} onDragEnd={onDragEnd}>
        <div className="lineup-board"><div className="team-grid">{state.present.teams.map((ids,i)=><TeamPanel key={i} ids={ids} index={i} onMove={onMove}/>)}</div><ReservePool ids={state.present.reserves} onMove={onMove}/></div>
        <DragOverlay dropAnimation={null}>{dragged&&<PlayerPreview id={dragged}/>}</DragOverlay>
      </DndContext>
    </main><footer><span>Sword × Staff · Nexus Tournament</span><span>{state.mode==='custom'?'Personal draft · official lineup unchanged':state.mode==='shared'?'Shared configuration · edits create a local draft':'Official source · browser edits stay personal'}</span></footer></div>
}
