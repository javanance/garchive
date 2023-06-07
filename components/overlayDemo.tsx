import React, { useRef} from 'react';
import Link from 'next/link';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OverlayDemo(prop) {

    // console.log('prop : ' + prop.id);
    const { data, error } = useSWR('/data/KICS-INDEX.json', fetcher);

    const op = useRef(null);

    //json file error  or data is null
    if (error) return <div>Failed to load</div>;

    if (!data) {
        return <> {prop.id} </>;
    }
    // no data for prop.id
    // const aaa = data.filter( s => s.id === prop.id)[0] ;

    const aaa = data.find(s => s.id === prop.id);
    console.log('aaa :' + aaa)
    if(!aaa){
        return <> {prop.id} </>;
    }



    console.log('bbb :' + aaa.name)

    const label = aaa.title + ' ('+ aaa.desc + ')';

    return (
        <>
              <a  href = {aaa.url} target='blank' >

                <Button severity="warning"  link
                    label= {label} style ={{padding : '0px 10px'}}
                    onMouseEnter={(e) => op.current.toggle(e)} onMouseLeave ={(e) => op.current.toggle(e)}
                />
            </a>
            <OverlayPanel ref={op}>
            {aaa.LEVEL3 !== undefined ? ( aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + ' > ' + aaa.LEVEL3 + ' > ' + aaa.desc)
                                                 : ( aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + ' > ' + aaa.desc)}
            </OverlayPanel>





        </>
    );
}
