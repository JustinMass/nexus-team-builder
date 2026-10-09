import { useEffect, useReducer, useState } from 'react';
import { historyReducer, initialHistory } from '../domain/lineup';
import { discardDraft, loadInitial, saveDraft, type DraftStorage } from '../domain/serialization';
const browserStorage:DraftStorage={getItem:key=>window.localStorage.getItem(key),setItem:(key,value)=>window.localStorage.setItem(key,value),removeItem:key=>window.localStorage.removeItem(key)};
export function useLineup(){
  const [initial]=useState(()=>loadInitial(window.location.hash,browserStorage));
  const [state,dispatch]=useReducer(historyReducer,initial,initial=>initialHistory(initial.lineup,initial.mode));
  const [warning,setWarning]=useState(initial.warning);
  useEffect(()=>{
    if(state.mode==='custom'){
      if(!saveDraft(browserStorage,state.present))setWarning('Browser storage is unavailable. Share or export your lineup to keep it.');
      if(window.location.hash)window.history.replaceState(null,'',window.location.pathname+window.location.search);
    }else if(state.mode==='official'){discardDraft(browserStorage)}
  },[state.present,state.mode]);
  const reset=()=>{
    const discarded=discardDraft(browserStorage);
    window.history.replaceState(null,'',window.location.pathname+window.location.search);
    setWarning(discarded?undefined:'Browser storage is unavailable. The visible lineup was reset, but the saved draft could not be removed.');
    dispatch({type:'reset'});
  };
  return {state,dispatch,warning,reset};
}
