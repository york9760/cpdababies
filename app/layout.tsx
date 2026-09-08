import type {Metadata} from 'next';
import './globals.css';
import {ScrollMotion} from '@/components/scroll-motion';
export const metadata:Metadata={title:'CPDA Babies｜陪伴每一個成長步伐',description:'嬰幼兒心理發展協會：探索適齡 Playgroup、學前課程及分會資訊。'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}<ScrollMotion/></body></html>}
