import { Swords, Undo2, Redo2, RotateCcw } from 'lucide-react';
import { officialDate, officialVersion } from '../data/officialLineup';
import type { History } from '../domain/lineup';
export function LineupHeader({state,onUndo,onRedo,onReset}:{state:History;onUndo:()=>void;onRedo:()=>void;onReset:()=>void}){
  return <><header className="page-header"><div className="brand"><div className="brand-mark"><Swords size={25} strokeWidth={1.7}/></div><div><p className="eyebrow">SWORD × STAFF / NEXUS TOURNAMENT</p><h1>Nexus Team Builder</h1></div></div></header>
  <div className="state-bar"><div><span className={`state-label ${state.mode}`}><i/>{state.mode==='official'?'OFFICIAL LINEUP':state.mode==='shared'?'CUSTOM SHARED LINEUP':'CUSTOM DRAFT'}</span><span className="official-date">{state.mode==='official'?'Updated':'Based on Official'} {officialDate} <span className="version">v{officialVersion}</span></span></div><div className="history-controls"><button onClick={onUndo} disabled={!state.past.length} aria-label="Undo" title="Undo"><Undo2 size={16}/><span>Undo</span></button><button onClick={onRedo} disabled={!state.future.length} aria-label="Redo" title="Redo"><Redo2 size={16}/><span>Redo</span></button><span className="separator"/><button onClick={onReset}><RotateCcw size={15}/>{state.mode==='shared'?'Reset to Current Official':'Reset to Official'}</button></div></div></>
}
