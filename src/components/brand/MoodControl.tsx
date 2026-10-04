import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MarketplaceIcon, type IconName } from "@/components/icons/MarketplaceIcons";
const moods = [{id:"energetic",label:"Energetic",icon:"important"},{id:"calm",label:"Calm",icon:"books"},{id:"soft",label:"Soft",icon:"handwritten"},{id:"wild",label:"Wild",icon:"star"}] as const;
export function MoodControl() {
 const [mood,setMood]=useState("energetic");
 useEffect(()=>{const saved=localStorage.getItem("sgsits-mood");const next=moods.some(m=>m.id===saved)?saved:"energetic";if(next){setMood(next);document.documentElement.dataset.mood=next;document.documentElement.classList.toggle("dark",next==="wild"||next==="energetic");}},[]);
 const change=(id:string)=>{setMood(id);document.documentElement.dataset.mood=id;document.documentElement.classList.toggle("dark",id==="wild"||id==="energetic");localStorage.setItem("sgsits-mood",id);localStorage.setItem("sgsits-theme",id==="wild"||id==="energetic"?"dark":"light");};
 return <div className="mood-picker"><p className="eyebrow">Set the mood</p><div className="mood-options">{moods.map(m=><Button key={m.id} variant="ghost" aria-pressed={mood===m.id} onClick={()=>change(m.id)} className="mood-option"><MarketplaceIcon name={m.icon as IconName} className="size-4"/><span>{m.label}</span></Button>)}</div></div>;
}
