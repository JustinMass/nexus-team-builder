import { officialLineup } from '../data/officialLineup';
import { players } from '../data/players';
import { validateLineup, type ReadonlyLineup } from './validation';
export interface Lineup {teams:string[][];reserves:string[]}
export type Destination='team-0'|'team-1'|'team-2'|'team-3'|'reserves';
export type Mode='official'|'custom'|'shared';
export const destinations:Destination[]=['team-0','team-1','team-2','team-3','reserves'];
export const cloneLineup=(l:ReadonlyLineup):Lineup=>({teams:l.teams.map(t=>[...t]),reserves:[...l.reserves]});
export const cloneOfficial=()=>cloneLineup(officialLineup);
export const group=(l:Lineup,d:Destination)=>d==='reserves'?l.reserves:l.teams[Number(d.slice(-1))];
export const location=(l:Lineup,id:string)=>destinations.find(d=>group(l,d).includes(id));
export function generateTopActive():Lineup {
  const chosen=[...players].filter(p=>p.status==='active').sort((a,b)=>b.power-a.power||a.rank-b.rank).slice(0,16).map(p=>p.id);
  return {teams:Array.from({length:4},(_,i)=>chosen.slice(i*4,i*4+4)),reserves:[...players].sort((a,b)=>a.rank-b.rank).filter(p=>!chosen.includes(p.id)).map(p=>p.id)};
}
export function movePlayer(current:Lineup,id:string,destination:Destination,target?:string):{lineup:Lineup;error?:string} {
  const source=location(current,id);
  if(!source||!destinations.includes(destination))return {lineup:current,error:'Unknown player or team.'};
  if(target===id)return {lineup:current};
  const next=cloneLineup(current),from=group(next,source),to=group(next,destination),sourceIndex=from.indexOf(id);
  const targetIndex=target?to.indexOf(target):-1;
  if(target && targetIndex<0)return {lineup:current,error:'The drop target is no longer available.'};
  if(source===destination){
    if(targetIndex<0)return {lineup:current};
    from.splice(sourceIndex,1);from.splice(targetIndex,0,id);
  }else if(destination!=='reserves'&&to.length>=4){
    if(targetIndex<0)return {lineup:current,error:'This team is full. Drop onto a player to swap, or move someone to reserves first.'};
    from[sourceIndex]=to[targetIndex];to[targetIndex]=id;
  }else{
    from.splice(sourceIndex,1);to.splice(targetIndex<0?to.length:targetIndex,0,id);
  }
  return validateLineup(next)?{lineup:next}:{lineup:current,error:'Invalid move. Your lineup was preserved.'};
}
export interface History {present:Lineup;past:{lineup:Lineup;mode:Mode}[];future:{lineup:Lineup;mode:Mode}[];mode:Mode;error?:string}
export type Action={type:'move';id:string;destination:Destination;target?:string}|{type:'undo'|'redo'|'reset'|'clearError'};
export const initialHistory=(lineup=cloneOfficial(),mode:Mode='official'):History=>({present:cloneLineup(lineup),past:[],future:[],mode});
export function historyReducer(h:History,a:Action):History {
  if(a.type==='reset')return initialHistory();
  if(a.type==='clearError')return {...h,error:undefined};
  if(a.type==='undo'){const previous=h.past.at(-1);return previous?{present:previous.lineup,mode:previous.mode,past:h.past.slice(0,-1),future:[{lineup:h.present,mode:h.mode},...h.future]}:h}
  if(a.type==='redo'){const next=h.future[0];return next?{present:next.lineup,mode:next.mode,past:[...h.past,{lineup:h.present,mode:h.mode}],future:h.future.slice(1)}:h}
  if(a.type!=='move')return h;
  const r=movePlayer(h.present,a.id,a.destination,a.target);
  if(r.error)return {...h,error:r.error};
  if(JSON.stringify(r.lineup)===JSON.stringify(h.present))return {...h,error:undefined};
  return {present:r.lineup,past:[...h.past.slice(-49),{lineup:h.present,mode:h.mode}],future:[],mode:'custom'};
}
