export type PlayerClass = 'templar' | 'ravager' | 'magister' | 'prophet';
export interface ClassConfig { id: PlayerClass; name: string; previousName: string; color: string; discordEmoji: string }
export const season = Object.freeze({name:'Current season',tier:'T5'});
export const classes: readonly ClassConfig[] = Object.freeze([
  Object.freeze({id:'templar',name:'Templar',previousName:'Guardian',color:'#FD8805',discordEmoji:':orange_circle:'}),
  Object.freeze({id:'ravager',name:'Ravager',previousName:'Conqueror',color:'#FF6162',discordEmoji:':red_circle:'}),
  Object.freeze({id:'magister',name:'Magister',previousName:'Destroyer',color:'#658BFA',discordEmoji:':blue_circle:'}),
  Object.freeze({id:'prophet',name:'Prophet',previousName:'Dominator',color:'#44D1AB',discordEmoji:':green_circle:'}),
]);
export const classById = Object.fromEntries(classes.map(c=>[c.id,c])) as Record<PlayerClass,ClassConfig>;
