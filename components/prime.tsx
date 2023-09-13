import React, { useState, useEffect } from 'react';
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import "./theme.module.scss";
// import '../styles/goftheme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { OverlayPanel } from 'primereact/overlaypanel';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Fieldset  } from 'primereact/fieldset';
import { Message } from 'primereact/message';
import { Image } from 'primereact/image';
import { Chip } from 'primereact/chip';



const GSheet = (props) => {
    const { height= 'min-h-screen', title } = props;

    const children = props.children;
    return (
        <Card className={height} title={title}>
            {children}
        </Card>
    );
}

const G2Col = (props) => {
    const children = props.children;
    return (
        <div className="grid">
            <div className="col-12 md:col-6" >{children[0]}</div>
            <div className="col-12 md:col-6">{children[1]}</div>
        </div>
    );
}

// const M2 = function TemplateDemo({prop, children}) {
const M1 = (props) => {

    const { severity= 'info' , width='100%', borderWidth='0 0 0 6px', icon='pi pi-cog', text} = props;

    const content = (
        <div  >
            {/* <i className={icon} style= {{paddingRight: '5px'}}></i> */}
            {/* <span className={icon} style= {{ fontSize: '1rem' , paddingRight: '10px'}}></span> */}

            {props.text}
        </div>
    );
    return (
            <Message
                style={{
                    // border: 'solid #696cff',
                    // borderWidth: '0 0 0 6px',
                    borderWidth: borderWidth,
                    // justifyContent: 'left',
                    display: 'block',
                    width : width
                }}
                // className="border-primary w-full justify-content-start"
                severity={severity}
                // icon= {icon}
                content={text}
                >
                </Message>
    )
}

const Callout = (props) => {
    const content = (
        <div style={{width:'100%'}} >
            {props.children}
        </div>
    );

    // const { severity= 'info' , width='100%', height='-webkit-fill-available',  borderWidth='0 0 0 6px'} = props;
const { severity= 'info' , width='100%',  borderWidth='0 0 0 6px'} = props;
    return (
                <Message
                style={{
                    borderWidth: borderWidth,
                    justifyContent: 'left',
                    width : width,
                    // height: height,
                    alignItems:'start'
                }}
                // className="border-primary w-full justify-content-start"
                severity={severity}
                // icon= { PrimeIcons.PLUS}
                content={content}
                >
                </Message>

    )
}

const Math = (props) => {
    const content = (
        <div style={{width:'100%'}} >
            {props.children}
        </div>
    );

    // const { severity= 'info' , width='100%', height='-webkit-fill-available',  borderWidth='0 0 0 6px'} = props;
const { fontSize = '1.0rem', width='100%',  borderWidth='0 0 0 6px', marginRatio = '2%',  fontWeight='600'} = props;
    return (
       <div style={{ marginLeft: marginRatio,marginRight: marginRatio,marginBottom: '10px'  }}>
                <Message
                style={{
                    borderWidth: borderWidth,
                    justifyContent: 'left',
                    width : width,
                    // height: height,
                    alignItems:'start',
                    fontSize :fontSize,
                    fontWeight:fontWeight,
                    padding: '10px'
                }}
                // className="border-primary w-full justify-content-start"
                severity={'success'}
                // icon= { PrimeIcons.PLUS}
                content={content}
                >
                </Message>
      </div>
    )
}

// 특정 영역 주석용 폰트사이즈 작게
// const SubText = ({ children }) => {
//   const [fontSize, setFontSize] = useState('1rem');
//   const contentStyle = {
//       margin: '0',
//       padding: '0',
//     };
//   useEffect(() => {setFontSize('0.8rem');}, []);

//   return (
//     <div style={{ fontSize }}>
//     <ul style={contentStyle}>
//       {children}
//     </ul>
//     </div>
//   );
// };


// comment
const Cmt = (props) => {
  const { fontSize = '0.9rem' } = props;

  const divStyle = {
    fontSize,
    border: 'none',          // 테두리 없음
    padding: '0',
    fontWeight: '300'
  };

  const contentStyle = {
  margin: '0',
  padding: '0'
};

return (
  <div {...props} style={divStyle}>
  <ul style={contentStyle}>
    {props.children}
  </ul>
  </div>
);
};

// checklist 작성용 
// const Cl = ({ children, icon = 'pi pi-question-circle', removable = true }) => {
//     return (
//       <Chip label={children} icon={icon} removable={removable} />
//     );
//   };


// const Cl = ({ children, icon = 'pi pi-question-circle', removable = true }) => {
//   const { data, error } = useSWR('/data/check.json');
//   if (error) {
//     return <div>Failed to load</div>;
//   }
//   if (!data) {
//     return <div>Loading...</div>; 
//   }
//   const selectedId = parseInt(children, 10);
//   const selectedItem = data.find(item => item.id === selectedId);
//   return (
//     <Chip label={selectedItem ? selectedItem.desc : ''} icon={icon} removable={removable} />
//   );
// };

const Cl = ({ children, icon = 'pi pi-question-circle', removable = true }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/check.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Failed to load</div>;
  }

  const selectedId = parseInt(children, 10);
  const selectedItem = data.find(item => item.id === selectedId);

  return (
    <Chip label={selectedItem ? selectedItem.desc : ''} icon={icon} removable={removable} />
  );
};




// default style 지정 이미지 : 가운데 정렬, 최대 사이즈 고정
const CenterImg = (props) => {
  const { src, width = 600, imageStyle = { display: 'block', margin: '0 auto' }, caption } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={src} width={width} style={imageStyle} />
      {caption && <p>{caption}</p>}
    </div>
  );
};

export { Button, Accordion, AccordionTab, Card, Panel, TabView, TabPanel, OverlayPanel, DataTable, Column, Fieldset, Callout, M1, G2Col, GSheet, Math, Image, Cmt, CenterImg, Chip,Cl};
