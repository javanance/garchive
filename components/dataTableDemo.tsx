
import React, { Children, useState } from 'react';
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import useSWR from 'swr';

const fetcher = (...param) => fetch(...param).then((res) => res.json());


export default function DataTableDemo() {
  const [visible, setVisible] = useState(false);

  const fetchUrl = "https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/mv/KR3";
  const { data, error } = useSWR(fetchUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const bonds = data.items.slice(1,10);

  return (
      <div className="surface-0 flex justify-content-center">
          <DataTable value={bonds} tableStyle={{ minWidth: '50rem' }}>
              <Column field="id" header="Category"></Column>
              <Column field="mv_nm" header="Code"></Column>
              <Column field="asset_class" header="Name"></Column>
              <Column field="issue_date" header="Quantity"></Column>
          </DataTable>
      </div>
  )
}
