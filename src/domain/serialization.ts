import { cloneOfficial, cloneLineup, type Lineup, type Mode } from './lineup';
import { validateLineup } from './validation';
export const storageKey='nexus-team-builder:draft:v1';
export interface DraftStorage {getItem:(key:string)=>string|null;setItem:(key:string,value:string)=>void;removeItem:(key:string)=>void}
export const serializeDraft=(lineup:Lineup)=>JSON.stringify({v:1,teams:lineup.teams,reserves:lineup.reserves});
function parse(text:string):Lineup|undefined {
  if(text.length>10000)return;
  try {const value=JSON.parse(text);if(value.v===1&&validateLineup(value))return cloneLineup(value)}catch{/* Untrusted browser state is optional. */}
}
export function saveDraft(storage:DraftStorage,lineup:Lineup){try{storage.setItem(storageKey,serializeDraft(lineup));return true}catch{return false}}
export function discardDraft(storage:DraftStorage){try{storage.removeItem(storageKey);return true}catch{return false}}
export function loadDraft(storage:DraftStorage):{lineup?:Lineup;warning?:string}{
  try{const text=storage.getItem(storageKey);if(!text)return {};const lineup=parse(text);return lineup?{lineup}:{warning:'The saved draft is invalid. The official lineup has been restored.'}}catch{return {warning:'Browser storage is unavailable. Changes can still be shared or exported.'}}
}
export const encodeShare=(lineup:Lineup)=>'#lineup='+btoa(serializeDraft(lineup)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
export function decodeShare(hash:string):Lineup|undefined {
  if(!hash.startsWith('#lineup=')||hash.length>10008)return;
  try{return parse(atob(hash.slice(8).replace(/-/g,'+').replace(/_/g,'/')))}catch{return undefined}
}
export function loadInitial(hash:string,storage:DraftStorage):{lineup:Lineup;mode:Mode;warning?:string}{
  if(hash){const shared=decodeShare(hash);if(shared)return {lineup:shared,mode:'shared'}}
  const saved=loadDraft(storage);
  return {lineup:saved.lineup??cloneOfficial(),mode:saved.lineup?'custom':'official',warning:hash?'The shared link is invalid. Your saved draft or the current official lineup has been loaded.':saved.warning};
}
