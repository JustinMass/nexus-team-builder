import { classes, season } from '../config/season';
export function ClassLegend(){return <div className="legend"><span className="legend-title">{season.tier} CLASSES</span>{classes.map(c=><span key={c.id} style={{color:c.color}}><i style={{background:c.color}}/>{c.name}</span>)}</div>}
