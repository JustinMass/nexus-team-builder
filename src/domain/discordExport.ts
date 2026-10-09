import { classes, classById } from '../config/season';
import { playerById } from '../data/players';
import { composition, totalPower } from './calculations';
import type { Lineup } from './lineup';
const playerLine=(id:string)=>{const p=playerById[id],c=classById[p.class];return `${c.discordEmoji} **${p.name}** — ${p.power.toFixed(1)}M — ${c.name}${p.status==='inactive'?' — INACTIVE':''}`};
export function discordExport(lineup:Lineup){
  return ['# :crossed_swords: Nexus Tournament Teams','', '**Class Key:**', classes.map(c=>`${c.discordEmoji} ${c.name}`).join(' | '),'', ...lineup.teams.flatMap((ids,i)=>[`## Team ${i+1} — ${totalPower(ids).toFixed(1)}M Total`,'',...ids.map(playerLine),'',`**Composition:** ${composition(ids)}`,'']),`## :luggage: Reserve Pool — ${totalPower(lineup.reserves).toFixed(1)}M Total`,'',...lineup.reserves.map(playerLine)].join('\n');
}
