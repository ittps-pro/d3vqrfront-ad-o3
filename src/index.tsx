import { Card } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, {
  StrictMode,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';

import useSWR, { preload, SWRConfig } from 'swr';

const root = createRoot(document.getElementById('app'));
const fetcher = (url) => fetch(url).then((res) => res.json());
import App from './App';
let demo = [
  {
    id: '1710610000377',
    title: 'Настройка ТВ',
    decs: 'ТВ',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000378',
    title: '活动名称1',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    count: 4,
  },
  {
    id: '1710610000379',
    title: '活动名称2',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000380',
    title: '活动名称3',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000381',
    title: '活动名称4',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000382',
    title: '活动名称5',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000383',
    title: '活动名称6',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000384',
    title: '活动名称7',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000386',
    title: '活动名称9',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000387',
    title: '活动名称10',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000388',
    title: '活动名称11',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000389',
    title: '活动名称12',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000390',
    title: '活动名称13',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000391',
    title: '活动名称14',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000392',
    title: '活动名称15',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000393',
    title: '活动名称16',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000394',
    title: '活动名称17',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000395',
    title: '活动名称18',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: '1710610000396',
    title: '活动名称19',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 1710610017385,
  },
];

// https://pdt-exporter.prod.a.o3.ru/statuses

const columns = [{}];

const data = [
  {
    id: 1,
    hostname: 'WS-Z440-A120',
    alias: 'IT',
  },
];

const Items = Object.values(data).map((i) => (
  <Card title={i.hostname}>
    <TextArea>{i.alias}</TextArea>
  </Card>
));

root.render(
  <>
    <EditableProTable
      columns={[
        { dataIndex: 'hostname', key: 'hostname', title: 'Host' },
        { dataIndex: 'alias', title: 'Name', key: 'name' },
        { dataIndex: 'data', title: 'Data', key: 'data' },
      ]}
      editable
      value={data}
    />
    {Items}
    <App />
  </>
);
