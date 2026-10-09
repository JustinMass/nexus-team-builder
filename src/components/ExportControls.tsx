import { useState } from 'react';
import { Copy, Link2, Check, X, Download } from 'lucide-react';
import type { Lineup } from '../domain/lineup';
import { discordExport } from '../domain/discordExport';
import { encodeShare, serializeDraft } from '../domain/serialization';
export function ExportControls({lineup,onDiscard}:{lineup:Lineup;onDiscard:()=>void}){
  const [notice,setNotice]=useState(''),[manual,setManual]=useState<{title:string;text:string}|null>(null);
  async function copy(title:string,text:string){
    try{await navigator.clipboard.writeText(text);setNotice(`${title} copied.`)}catch{setManual({title,text});setNotice('Clipboard access is unavailable. Select and copy the text below.')}
  }
  function share(){const hash=encodeShare(lineup),url=new URL(window.location.href);url.hash=hash;void copy('Share link',url.toString())}
  return <><div className="export-controls"><button className="primary" onClick={()=>void copy('Discord format',discordExport(lineup))}><Copy size={16}/>Copy Discord Format</button><button onClick={share}><Link2 size={16}/>Share Configuration</button></div>{notice&&<div className="copy-notice" role="status"><Check size={15}/>{notice}<button aria-label="Dismiss copy notice" onClick={()=>setNotice('')}><X size={14}/></button></div>}{manual&&<div className="manual-export"><div><strong>{manual.title}</strong><button onClick={()=>setManual(null)} aria-label="Close manual copy"><X size={16}/></button></div><textarea aria-label="Copy text manually" value={manual.text} readOnly onFocus={e=>e.currentTarget.select()}/></div>}<details className="maintainer-tools"><summary>Maintainer tools</summary><p>Export this draft to update the official lineup in GitHub.</p><div><button onClick={()=>void copy('Draft JSON',JSON.stringify(JSON.parse(serializeDraft(lineup)),null,2))}><Download size={15}/>Export Draft JSON</button><button onClick={onDiscard}>Discard Saved Draft</button></div></details></>
}
