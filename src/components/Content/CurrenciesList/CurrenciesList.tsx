import * as React from "react";
import {Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {useState} from "react";


type DataType = {
    key: React.Key,
    cname: string,
    ccode: string,
    quote: number

}

const initialDataSource: DataType[] = [
    {
        key: '1',
        cname: 'United States Dollar',
        ccode: 'USD',
        quote: 1.00000,
    },
    {
        key: '2',
        cname: 'Euro',
        ccode: 'EUR',
        quote: 0.93225,
    },
    {
        key: '3',
        cname: 'Ukrainian Hryvnia',
        ccode: 'UAH',
        quote: 36.75162,
    },
    {
        key: '4',
        cname: 'New Belarusian Ruble',
        ccode: 'BYN',
        quote: 2.52423,
    },
    {
        key: '5',
        cname: 'United States Dollar',
        ccode: 'USD',
        quote: 1.00000,
    },
    {
        key: '6',
        cname: 'Euro',
        ccode: 'EUR',
        quote: 0.93225,
    },
    {
        key: '7',
        cname: 'Ukrainian Hryvnia',
        ccode: 'UAH',
        quote: 36.75162,
    },
    {
        key: '8',
        cname: 'New Belarusian Ruble',
        ccode: 'BYN',
        quote: 2.52423,
    },        {
        key: '9',
        cname: 'United States Dollar',
        ccode: 'USD',
        quote: 1.00000,
    },
    {
        key: '10',
        cname: 'Euro',
        ccode: 'EUR',
        quote: 0.93225,
    },
    {
        key: '11',
        cname: 'Ukrainian Hryvnia',
        ccode: 'UAH',
        quote: 36.75162,
    },
    {
        key: '12',
        cname: 'New Belarusian Ruble',
        ccode: 'BYN',
        quote: 2.52423,
    },
];

const columns: ColumnsType<DataType> = [
    {
        title: 'Currency Name',
        dataIndex: 'cname',
        key: 'cname',
    },
    {
        title: 'Currency Code',
        dataIndex: 'ccode',
        key: 'ccode',
    },
    {
        title: 'Quoted price',
        dataIndex: 'quote',
        key: 'quote',
    },
];

type Props = {}

const CurrenciesList: React.FC<Props> = (props) => {
    const [dataSource, setDataSource] = useState<DataType[]>(initialDataSource);

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            let newDataSource: DataType[] = [...initialDataSource];
            selectedRows.forEach((i) => newDataSource = newDataSource.filter((j) => j.key !== i.key));
            setDataSource([...selectedRows, ...newDataSource]);
        }
    };

    return (
        <div>
            <Table
                dataSource={dataSource}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                pagination={(window.matchMedia("(max-width: 767px)").matches)
                    ? {pageSize: 7, position: ['topRight']}
                    : {pageSize: 9, position: ['topRight']}}
                columns={columns}/>;
        </div>
    );
}

export default CurrenciesList;