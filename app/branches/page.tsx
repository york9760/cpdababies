'use client';

import {useState} from 'react';
import {ArrowUpRight,Clock3,Mail,MapPin,MessageCircle,Phone} from 'lucide-react';
import {Header,Footer} from '../page';
import {branches,type BranchRegion} from './data';

const regions:BranchRegion[]=['香港島','九龍','新界'];
const clean=(value:string)=>value.replace(/\s/g,'');

function HongKongMap({selected,onSelect}:{selected:number;onSelect:(index:number)=>void}){
  const branch=branches[selected];
  return <div className="hk-map-scroll" aria-label="香港分會位置圖"><div className="hk-map-stage"><div className="hk-map-canvas">
    <svg className="hk-crayon-map" viewBox="0 0 1000 620" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">香港特別行政區分會地圖</title><desc id="map-desc">以蠟筆畫風呈現香港島、九龍及新界，圖上標示十四間 CPDA Babies 分會。</desc>
      <defs>
        <filter id="crayon-edge" x="-8%" y="-8%" width="116%" height="116%"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="8" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="7"/></filter>
        <pattern id="water-lines" width="44" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(-7)"><path d="M0 14 Q11 5 22 14 T44 14" fill="none" stroke="#8ac7df" strokeWidth="3" strokeLinecap="round" opacity=".35"/></pattern>
      </defs>
      <rect width="1000" height="620" rx="34" fill="#e5f5fb"/><rect width="1000" height="620" rx="34" fill="url(#water-lines)"/>
      <g filter="url(#crayon-edge)" stroke="#547b6b" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path className="map-land nt" d="M72 84 L159 49 251 73 329 45 428 75 515 54 613 105 664 177 631 235 560 248 523 297 456 280 407 321 334 296 276 329 207 297 142 310 87 257 48 174Z"/>
        <path className="map-land kowloon" d="M279 338 L350 323 430 334 500 318 540 348 513 410 450 425 393 408 337 423 291 397Z"/>
        <path className="map-land island" d="M269 487 Q348 451 438 466 T592 452 Q626 469 606 497 T516 527 Q427 550 336 534 T269 487Z"/>
        <path className="map-land lantau" d="M56 402 Q119 357 205 379 L260 433 218 500 128 513 63 470Z"/>
        <path className="map-islet" d="M601 360 l28 -16 24 23 -31 22z"/><path className="map-islet" d="M184 338 l18 -9 14 17 -22 14z"/>
      </g>
      <g className="crayon-scribbles" fill="none" strokeLinecap="round"><path d="M100 118 Q190 89 277 112 T462 101 T615 142"/><path d="M113 181 Q201 151 292 174 T479 164 T612 195"/><path d="M305 363 Q374 347 444 362 T518 358"/><path d="M303 489 Q394 476 489 491 T581 479"/></g>
      <text x="330" y="188" className="map-region-label">新界</text><text x="369" y="386" className="map-region-label">九龍</text><text x="403" y="509" className="map-region-label">香港島</text>
    </svg>
    {branches.map((item,index)=><button className={'branch-map-pin '+(index===selected?'active':'')} style={{left:`${item.x}%`,top:`${item.y}%`}} key={item.en} type="button" aria-label={`${item.name}分會：${item.address}`} aria-pressed={index===selected} onMouseEnter={()=>onSelect(index)} onFocus={()=>onSelect(index)} onClick={()=>onSelect(index)}><MapPin aria-hidden="true"/><span>{item.name}</span></button>)}
    </div>
    <aside className="map-popup" aria-live="polite">
      <span className="eyebrow">{branch.region} · {branch.en}</span><h2>{branch.name}分會</h2>
      <p className="map-popup-address"><MapPin aria-hidden="true"/>{branch.address}</p><p><Clock3 aria-hidden="true"/>{branch.hours}</p>
      <div className="map-contact-list"><a href={`tel:+852${clean(branch.phone)}`}><Phone aria-hidden="true"/> {branch.phone}</a><a href={`https://wa.me/852${clean(branch.wa)}`} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true"/> {branch.wa}</a><a href={`mailto:${branch.email}`}><Mail aria-hidden="true"/> {branch.email}</a></div>
      <a className="map-directions" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`} target="_blank" rel="noreferrer">規劃路線 <ArrowUpRight size={17}/></a>
    </aside>
  </div></div>;
}

export default function Branches(){
  const[selected,setSelected]=useState(0);
  return <><Header/><main className="wrap branches-page">
    <div className="page-intro branches-intro"><img className="branches-hero-art" src="/branches-cat.png" alt="揮手的小貓插畫" width="1233" height="1400"/><div><span className="eyebrow">A LITTLE CLOSER TO YOU</span><h1>成長的好地方，就在你身邊</h1><p>在地圖探索全港 14 間分會，計劃與寶寶的下一次探索。</p></div></div>
    <section className="section branch-map-section"><div className="section-head"><div><span className="eyebrow">FIND YOUR NEAREST CENTRE</span><h2>香港分會地圖</h2><p>滑鼠移至地點，或點按標記查看地址、聯絡方法及開放時間。</p></div><span className="region-count">14 間分會</span></div>
      <HongKongMap selected={selected} onSelect={setSelected}/>
      <div className="branch-map-key">{regions.map(region=><div key={region}><strong>{region}</strong><div>{branches.map((branch,index)=>branch.region===region&&<button type="button" className={index===selected?'active':''} onClick={()=>setSelected(index)} key={branch.en}>{branch.name}</button>)}</div></div>)}</div>
      <p className="branch-source">分會資料以 CPDA 官方網站為準。<a className="text-link" href="https://www.cpda.com.hk/contact-us.html" target="_blank" rel="noreferrer">查看官方聯絡資料 <ArrowUpRight size={14}/></a></p>
    </section>
  </main><Footer/></>;
}
