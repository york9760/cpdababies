'use client';

import {useState} from 'react';
import {ArrowUpRight, FileText} from 'lucide-react';
import {Header,Footer} from '../page';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '@/components/ui/select';

const timetableGroups=[
  {region:'香港島',en:'HONG KONG ISLAND',className:'region-island',branches:[
    {name:'太古',en:'TAIKOO',href:'https://www.cpda.com.hk/timetable_tk/timetable_TK.pdf'},
  ]},
  {region:'九龍',en:'KOWLOON',className:'region-kowloon',branches:[
    {name:'觀塘',en:'KWUN TONG',href:'https://www.cpda.com.hk/timetable_tk/timetable_KT.pdf'},
    {name:'啟德',en:'KAI TAK',href:'https://www.cpda.com.hk/timetable_tk/timetable_twins.pdf'},
    {name:'荔枝角',en:'LAI CHI KOK',href:'https://www.cpda.com.hk/timetable_lck/timetable_LCK.pdf'},
    {name:'奧運',en:'OLYMPIC',href:'https://www.cpda.com.hk/timetable_lck/timetable_OLP.pdf'},
    {name:'南昌',en:'NAM CHEONG',href:'https://www.cpda.com.hk/timetable_tk/timetable_nc.pdf'},
  ]},
  {region:'新界',en:'NEW TERRITORIES',className:'region-nt',branches:[
    {name:'荃灣',en:'TSUEN WAN',href:'https://www.cpda.com.hk/timetable_tw/timetable_TW.pdf'},
    {name:'屯門',en:'TUEN MUN',href:'https://www.cpda.com.hk/timetable_tw/timetable_TM.pdf'},
    {name:'元朗',en:'YUEN LONG',href:'https://www.cpda.com.hk/timetable_tp/timetable_yl.pdf'},
    {name:'大埔',en:'TAI PO',href:'https://www.cpda.com.hk/timetable_tp/timetable_TP.pdf'},
    {name:'沙田',en:'SHATIN',href:'https://www.cpda.com.hk/timetable_st/timetable_ST.pdf'},
    {name:'上水',en:'SHEUNG SHUI',href:'https://www.cpda.com.hk/timetable_tp/timetable_SS.pdf'},
    {name:'將軍澳',en:'TSEUNG KWAN O',href:'https://www.cpda.com.hk/timetable_kc/timetable_TKO.pdf'},
    {name:'康城',en:'LOHAS PARK',href:'https://www.cpda.com.hk/timetable_tk/timetable_lp.pdf'},
  ]},
] as const;

const branchNames=timetableGroups.flatMap(group=>group.branches.map(branch=>branch.name));
const courses=['Playgroup','Pre-School','Pre Nursery','Phonics','Story Kids','GAPSK','幼兒專注力及情緒發展課程'];

function Picker({value,options,change,label}:{value:string,options:readonly string[],change:(value:string)=>void,label:string}){
  return <label className="age-filter">{label}<Select value={value} onValueChange={next=>next&&change(next)}><SelectTrigger><SelectValue/></SelectTrigger><SelectContent>{options.map(option=><SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></label>;
}

export default function Timetable(){
  const[step,setStep]=useState(1);
  const[parent,setParent]=useState('');
  const[child,setChild]=useState('');
  const[email,setEmail]=useState('');
  const[branch,setBranch]=useState<string>(branchNames[0]);
  const[course,setCourse]=useState(courses[0]);
  const enquiry=`你好，我想了解${branch}分會的${course}課程及會員安排。`;

  return <><Header/><main className="wrap timetable-page">
    <div className="page-intro timetable-intro">
      <img className="timetable-hero-art" src="/timetable-heyhey.png" alt="小朋友與小貓一起休息" width="1200" height="830"/>
      <div><span className="eyebrow">MAKE ROOM FOR LITTLE DISCOVERIES</span><h1>為成長，留一點時間</h1><p>按地區選擇分會，查看最新課程時間表。</p></div>
    </div>

    <section className="section timetable-directory">
      <div className="section-head"><div><span className="eyebrow">BRANCH TIMETABLES</span><h2>各區分會時間表</h2><p>所有時間表均連結至 CPDA 官方 PDF；課程名額及最新安排請向分會確認。</p></div></div>
      <div className="region-list">{timetableGroups.map(group=><section className={'region-panel '+group.className} key={group.region}>
        <header><div><span className="eyebrow">{group.en}</span><h3>{group.region}</h3></div><span className="region-count">{group.branches.length} 間分會</span></header>
        <div className="timetable-grid">{group.branches.map(branch=><a className="timetable-card" href={branch.href} target="_blank" rel="noreferrer" key={branch.name}>
          <FileText aria-hidden="true"/><span><strong>{branch.name}分會</strong><small>{branch.en}</small></span><span className="timetable-link">查看時間表 <ArrowUpRight size={17}/></span>
        </a>)}</div>
      </section>)}</div>
    </section>

    <section className="columns section" id="membership"><div><span className="eyebrow">GROW TOGETHER</span><h2>與 CPDA 一起，<br/>展開成長旅程</h2><p>填寫資料，整理你的會員查詢。分會會協助你了解會籍、課程及付款安排。</p><p className="muted">資料僅用於準備電郵草稿，不會在此提交或收取款項。會籍費用及條款由分會確認。</p></div><div className="panel"><div className="step">{step} / 3 · {['親子資料','課程意向','確認查詢'][step-1]}</div>{step===1?<form onSubmit={event=>{event.preventDefault();setStep(2)}}><label className="field">家長稱呼<input required value={parent} onChange={event=>setParent(event.target.value)} autoComplete="name"/></label><label className="field">寶寶稱呼<input required value={child} onChange={event=>setChild(event.target.value)}/></label><label className="field">聯絡電郵<input required type="email" value={email} onChange={event=>setEmail(event.target.value)} autoComplete="email"/></label><button className="button" type="submit">下一步 →</button></form>:step===2?<><div className="stack"><Picker value={branch} label="希望前往的分會" options={branchNames} change={setBranch}/><Picker value={course} label="有興趣的課程" options={courses} change={setCourse}/><p className="note-box">會籍選項與費用將由分會提供，現階段毋須付款。</p></div><div className="row"><button className="button outline" onClick={()=>setStep(1)}>返回</button><button className="button" onClick={()=>setStep(3)}>預覽查詢 →</button></div></>:<><h3>{parent}，一起踏出第一步</h3><p>寶寶：{child}<br/>電郵：{email}<br/>分會：{branch}<br/>課程：{course}</p><p className="muted">按下按鈕會開啟你的電郵程式。請檢查並自行送出，分會收到後才會處理查詢。</p><div className="row"><button className="button outline" onClick={()=>setStep(2)}>修改</button><a className="button" href={'mailto:info@cpda.com.hk?subject='+encodeURIComponent('會員及課程查詢 · '+branch)+'&body='+encodeURIComponent(enquiry+'\n家長：'+parent+'\n寶寶：'+child+'\n聯絡電郵：'+email)}>開啟電郵草稿 ↗</a></div></>}</div></section>
  </main><Footer/></>;
}
