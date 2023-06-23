
import React, { Children, useState } from 'react';
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import useSWR from 'swr';

const fetcher = (...param) => fetch(...param).then((res) => res.json());


// 원본
// export function DataTableDemo() {
//   const [visible, setVisible] = useState(false);
//
//   const fetchUrl = "https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/mv/KR3";
//   const { data, error } = useSWR(fetchUrl, fetcher);
//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;
//
//   const bonds = data.items.slice(1,10);
//
//   return (
//       <div className="surface-0 flex justify-content-center">
//           <DataTable value={bonds} tableStyle={{ minWidth: '50rem' }}>
//               <Column field="id" header="Category"></Column>
//               <Column field="mv_nm" header="Code"></Column>
//               <Column field="asset_class" header="Name"></Column>
//               <Column field="issue_date" header="Quantity"></Column>
//           </DataTable>
//       </div>
//   )
// }



// t1
// export function DataTableDemo() {
//   // 데이터 가져오기
//   const { data, error } = useSWR('/data/kics_table.json', fetcher);
//   if (error) return <div>Failed to load data</div>;
//   if (!data) return <div>Loading data...</div>;
//
//   // 해당하는 데이터 가져오기
//   const t1Data = data.t1;
//
//   return (
//     <>
//       <center><h4>&lt;표1&gt; 건전성감독기준 재무상태표 작성방법 </h4></center>
//       <div className="surface-0 flex justify-content-center">
//         <DataTable value={t1Data} rowGroupMode="rowspan" groupRowsBy="산출대상1" size="small" >
//           <Column field="산출대상1" header="산출대상" />
//           <Column field="산출대상2" header="" />
//           <Column field="작성방법" header="작성방법" />
//         </DataTable>
//       </div>
//     </>
//   );
// }




//t2 동적으로 가져오기 => 그래도 컬럼을 정의해야 함.
// export function DataTableDemo() {
//   // 데이터 가져오기
//   const { data, error } = useSWR('/data/kics_table.json', fetcher);
//   if (error) return <div>Failed to load data</div>;
//   if (!data) return <div>Loading data...</div>;
//
//   // 해당하는 데이터 가져오기
//   const t2Data = data.t2;
//
//   // 컬럼 정보 정의
//   const columns = [
//     { field: '구분', header: '구분' },
//     { field: '보험계약대출 평가 산출단위', header: '보험계약대출 평가 산출단위' },
//
//   ];
//
//   return (
//     <>
//       <center><h4>&lt;표2&gt; 보험계약대출 평가 산출단위</h4></center>
//       <div className="surface-0 flex justify-content-center">
//         <DataTable value={t2Data} size="small" >
//             {columns.map((col, i) => (
//                 <Column key={col.field} field={col.field} header={col.header} />
//             ))}
//         </DataTable>
//       </div>
//     </>
//   );
// }


//t3 동적으로 가져오기 & json 컬럼값 null인 경우 
// export function DataTableDemo() {
//   // 데이터 가져오기
//   const { data, error } = useSWR('/data/kics_table.json', fetcher);
//   if (error) return <div>Failed to load data</div>;
//   if (!data) return <div>Loading data...</div>;
//
//   // 해당하는 데이터 가져오기
//   const t3Data = data.t3;
//
//   // 컬럼 정보 정의
//   const columns = [
//     { field: '구분', header: '구분' },
//     { field: '생명‧장기손해', header: '생명‧장기손해' },
//     { field: '일반손해', header: '일반손해' },
//     { field: '시장', header: '시장' },
//     { field: '신용', header: '신용' },
//
//   ];
//
//   return (
//     <>
//       <center><h4>&lt;표3&gt; 기본요구자본의 개별위험액 간 상관계수</h4></center>
//       <div className="surface-0 flex justify-content-center">
//         <DataTable value={t3Data} size="small" >
//             {columns.map((col, i) => (
//                 <Column key={col.field} field={col.field} header={col.header} />
//             ))}
//         </DataTable>
//       </div>
//     </>
//   );
// }



//t4 동적으로 가져오기 & row grouping
export function DataTableDemo() {
  // 데이터 가져오기
  const { data, error } = useSWR('/data/kics_table.json', fetcher);
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading data...</div>;

  // 해당하는 데이터 가져오기
  const t4Data = data.t4;

  // 컬럼 정보 정의
  const columns = [
    { field: '구분1', header: '' },
    { field: '구분2', header: '구분' },
    { field: '산출방법', header: '산출방법' },
    { field: '요구자본 종류', header: '요구자본 종류' },
  ];

  return (
    <>
      <center><h4>&lt;표4&gt; 종속회사 및 관계회사의 요구자본 산출방법</h4></center>
      <div className="surface-0 flex justify-content-center">
        <DataTable value={t4Data} size="small" rowGroupMode="rowspan" groupRowsBy="구분1" >
            {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
            ))}
        </DataTable>
      </div>
    </>
  );
}
