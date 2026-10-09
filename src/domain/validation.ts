import { classes } from '../config/season';
import { players, playerById, type Player } from '../data/players';
import { officialLineup } from '../data/officialLineup';
export interface ReadonlyLineup {readonly teams:readonly (readonly string[])[]; readonly reserves:readonly string[]}
export function validatePlayers(data:readonly Player[]) {
  const ids=new Set<string>(); const ranks=new Set<number>();
  for(const p of data){
    if(!p.id || ids.has(p.id) || !p.name || !Number.isInteger(p.rank) || p.rank<1 || ranks.has(p.rank) || !Number.isFinite(p.power) || p.power<0 || !classes.some(c=>c.id===p.class) || !['active','inactive'].includes(p.status)) throw new Error('Invalid or duplicate player data');
    ids.add(p.id);ranks.add(p.rank);
  }
}
export function validateLineup(value:unknown):value is ReadonlyLineup {
  if(!value || typeof value!=='object')return false;
  const l=value as ReadonlyLineup;
  if(!Array.isArray(l.teams)||l.teams.length!==4||!Array.isArray(l.reserves)||l.teams.some(t=>!Array.isArray(t)||t.length>4))return false;
  const ids=[...l.teams.flat(),...l.reserves];
  return ids.length===players.length && new Set(ids).size===ids.length && ids.every(id=>typeof id==='string'&&Object.hasOwn(playerById,id));
}
export function validateCanonical(){
  validatePlayers(players);
  if(!validateLineup(officialLineup))throw new Error('Invalid official lineup');
  if(officialLineup.teams.flat().some(id=>playerById[id].status==='inactive'))throw new Error('Inactive player in initial official lineup');
}
