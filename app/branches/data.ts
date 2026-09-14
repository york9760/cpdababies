export type BranchRegion='香港島'|'九龍'|'新界';

export type Branch={
  name:string; en:string; region:BranchRegion; address:string; phone:string;
  wa:string; email:string; hours:string; x:number; y:number;
};

export const branches:Branch[]=[
  {name:'太古',en:'TAIKOO',region:'香港島',address:'太古康怡廣場辦公大樓10樓1006室',phone:'3106 0960',wa:'5541 2045',email:'info-tk@cpda.com.hk',hours:'星期一至日 09:30–18:30（公眾假期休息）',x:39.7,y:61},
  {name:'觀塘',en:'KWUN TONG',region:'九龍',address:'九龍觀塘協和街33號裕民坊商場2樓202鋪',phone:'3106 0960',wa:'6675 7527',email:'info-kt@cpda.com.hk',hours:'星期一至日 09:30–18:30（公眾假期休息）',x:42.5,y:50.5},
  {name:'啟德',en:'KAI TAK',region:'九龍',address:'九龍啟德沐翠街12號 The Twins 2座1805室',phone:'3106 0960',wa:'9290 2061',email:'info@cpda.com.hk',hours:'星期三至日 09:30–18:30（星期一、二及公眾假期休息）',x:38.5,y:48.5},
  {name:'荔枝角',en:'LAI CHI KOK',region:'九龍',address:'長沙灣道833號長沙灣廣場1座8樓808A室',phone:'3106 4455',wa:'6479 0521',email:'info-lck@cpda.com.hk',hours:'星期一至日 09:30–18:30（公眾假期休息）',x:31.8,y:47},
  {name:'奧運',en:'OLYMPIC',region:'九龍',address:'大角咀道38號新九龍廣場地下052號舖',phone:'3689 3852',wa:'5283 8960',email:'info-olp@cpda.com.hk',hours:'星期一至日 09:30–18:00（公眾假期休息）',x:34,y:56},
  {name:'南昌',en:'NAM CHEONG',region:'九龍',address:'南昌深旺道28號 V Walk 商場2樓',phone:'3106 0960',wa:'6369 6821',email:'info@cpda.com.hk',hours:'星期一至日 09:30–18:00（公眾假期休息）',x:32.5,y:52.2},
  {name:'荃灣',en:'TSUEN WAN',region:'新界',address:'荃灣楊屋道88號 Plaza 88 25樓D室',phone:'3106 0960',wa:'3543 5128',email:'info-tw@cpda.com.hk',hours:'星期一至日 10:00–18:30（公眾假期休息）',x:29.5,y:43.5},
  {name:'屯門',en:'TUEN MUN',region:'新界',address:'屯門杯渡路99號 99 Commons 6樓620室',phone:'3106 0960',wa:'3105 1018',email:'info-tm@cpda.com.hk',hours:'星期一、二、四、六及日 09:30–18:30（星期三、五及公眾假期休息）',x:17.5,y:41.5},
  {name:'元朗',en:'YUEN LONG',region:'新界',address:'元朗青山公路99–109號元朗貿易中心14樓1室',phone:'3160 8577',wa:'6592 4417',email:'info-yl@cpda.com.hk',hours:'星期一至日 09:30–18:00（公眾假期休息）',x:22.4,y:33.7},
  {name:'大埔',en:'TAI PO',region:'新界',address:'大埔商業中心8樓B室（廣福道賽馬會樓上）',phone:'3692 5111',wa:'6416 0978',email:'info-tp@cpda.com.hk',hours:'星期一、三至日 09:30–17:30（星期二及公眾假期休息）',x:35.3,y:32.8},
  {name:'沙田',en:'SHATIN',region:'新界',address:'沙田沙田鄉事會路138號新城市中央廣場1座13樓07室',phone:'3106 0960',wa:'5220 5103',email:'info-st@cpda.com.hk',hours:'星期一至日 09:30–18:30（公眾假期休息）',x:37.2,y:41.5},
  {name:'上水',en:'SHEUNG SHUI',region:'新界',address:'上水龍琛路48號上水匯10樓1006室',phone:'3160 8576',wa:'3160 8576',email:'info-ss@cpda.com.hk',hours:'星期一至日 09:30–18:00（公眾假期休息；參觀敬請預約）',x:31.5,y:25.2},
  {name:'將軍澳',en:'TSEUNG KWAN O',region:'新界',address:'將軍澳唐俊街21號翩滙坊地庫10號',phone:'2325 8228',wa:'5700 7282',email:'info-tko@cpda.com.hk',hours:'星期一至日 10:00–18:00（星期四及公眾假期休息）',x:46,y:52.5},
  {name:'康城',en:'LOHAS PARK',region:'新界',address:'將軍澳康城路1號 The LOHAS 康城427號鋪',phone:'3106 0960',wa:'6369 6811',email:'info@cpda.com.hk',hours:'星期一至日 09:30–18:30（公眾假期休息）',x:47.5,y:58},
];
