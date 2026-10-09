import { classes } from '../config/season';
import { playerById } from '../data/players';
export const totalPower=(ids:readonly string[])=>Math.round(ids.reduce((n,id)=>n+playerById[id].power,0)*10)/10;
export const averagePower=(ids:readonly string[])=>ids.length?totalPower(ids)/ids.length:0;
export const classCounts=(ids:readonly string[])=>classes.map(c=>({config:c,count:ids.filter(id=>playerById[id].class===c.id).length}));
export const composition=(ids:readonly string[])=>classCounts(ids).filter(c=>c.count).map(c=>`${c.count} ${c.config.name}${c.count===1?'':'s'}`).join(' / ') || 'No players';
