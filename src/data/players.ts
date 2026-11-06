import type { PlayerClass } from '../config/season';
export type Player = {readonly id:string; readonly name:string; readonly class:PlayerClass} & (
  | {readonly rank:number; readonly power:number; readonly status:'active'}
  | {readonly rank:number; readonly power:number; readonly status:'inactive'}
  | {readonly rank:null; readonly power:null; readonly status:'inactive'}
);
export const players: readonly Player[] = Object.freeze([
  {id:'papij',rank:1,name:'PapiJ',power:119.0,class:'magister',status:'active'},
  {id:'mookie',rank:2,name:'Mookie',power:105.0,class:'magister',status:'active'},
  {id:'mrbuttlips',rank:3,name:'MrButtLips',power:92.9,class:'templar',status:'active'},
  {id:'flowzirrah',rank:4,name:'Flowzirrah',power:86.1,class:'templar',status:'active'},
  {id:'midnightaria',rank:5,name:'MidnightAria',power:83.6,class:'prophet',status:'active'},
  {id:'sypher',rank:6,name:'Sypher',power:83.4,class:'magister',status:'active'},
  {id:'creggers',rank:7,name:'Creggers',power:77.9,class:'prophet',status:'active'},
  {id:'ameliakitty',rank:8,name:'AmeliaKitty',power:76.1,class:'templar',status:'active'},
  {id:'marisze',rank:9,name:'Marisze',power:75.9,class:'ravager',status:'active'},
  {id:'kitkat',rank:10,name:'KitKat',power:75.5,class:'prophet',status:'active'},
  {id:'kereschar',rank:11,name:'KeresChar',power:74.7,class:'magister',status:'active'},
  {id:'maciel',rank:12,name:'Maciel',power:72.5,class:'prophet',status:'active'},
  {id:'jfg',rank:13,name:'JFG',power:72.4,class:'magister',status:'active'},
  {id:'seukumiyadora',rank:14,name:'SeukuMiyadora',power:70.1,class:'ravager',status:'active'},
  {id:'serfenox',rank:15,name:'Serfenox',power:70.0,class:'magister',status:'active'},
  {id:'critify',rank:16,name:'critify',power:68.6,class:'prophet',status:'active'},
  {id:'lobuz',rank:17,name:'Lobuz',power:68.4,class:'templar',status:'active'},
  {id:'mdnght',rank:18,name:'Mdnght',power:68.3,class:'prophet',status:'active'},
  {id:'kingrunner',rank:19,name:'KingRunner',power:65.3,class:'ravager',status:'active'},
  {id:'dargon',rank:20,name:'Dargon',power:65.0,class:'magister',status:'active'},
  {id:'kevon',rank:21,name:'Kevon',power:64.9,class:'templar',status:'active'},
  {id:'anc1ent',rank:22,name:'Anc1ent',power:64.9,class:'templar',status:'active'},
  {id:'ksha',rank:23,name:'KsHa',power:64.6,class:'ravager',status:'active'},
  {id:'aceek',rank:24,name:'aceek',power:64.3,class:'magister',status:'active'},
  {id:'redgoat',rank:25,name:'RedGoat',power:64.2,class:'ravager',status:'active'},
  {id:'silence',rank:26,name:'Silence',power:62.6,class:'magister',status:'active'},
  {id:'kankudai',rank:27,name:'Kankudai',power:62.2,class:'prophet',status:'active'},
  {id:'ubiator',rank:28,name:'убиатор',power:62.1,class:'ravager',status:'active'},
  {id:'bigboss',rank:29,name:'BigBoss',power:60.6,class:'templar',status:'active'},
  {id:'tombomb',rank:30,name:'Tombomb',power:60.4,class:'templar',status:'active'},
  {id:'solanaceae',rank:31,name:'Solanaceae',power:59.5,class:'magister',status:'active'},
  {id:'caliman',rank:32,name:'Caliman',power:59.1,class:'magister',status:'active'},
  {id:'demonchi',rank:33,name:'Demonchi',power:58.9,class:'ravager',status:'active'},
  {id:'kevinweb',rank:34,name:'Kevinweb',power:58.5,class:'templar',status:'active'},
  {id:'azalyx',rank:35,name:'Azalyx',power:58.4,class:'templar',status:'active'},
  {id:'gwenivera',rank:36,name:'Gwenivera',power:58.4,class:'templar',status:'active'},
  {id:'logi',rank:37,name:'Logi',power:58.4,class:'prophet',status:'active'},
  {id:'bilbo',rank:38,name:'Bilbo',power:57.9,class:'prophet',status:'active'},
].map(p=>Object.freeze(p)) as Player[]);
export const playerById=Object.freeze(Object.fromEntries(players.map(p=>[p.id,p]))) as Readonly<Record<string,Player>>;
