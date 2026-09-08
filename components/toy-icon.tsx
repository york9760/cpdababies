export function ToyIcon({kind='lion',className=''}:{kind?:'lion'|'train'|'bear'|'rainbow',className?:string}){return <span aria-hidden="true" className={'toy-icon toy-'+kind+' '+className}/>}
