import * as React from "react";
import {Spin, Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useState} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/currencies-reducer";


type DataType = {
    key: React.Key,
    cname: string,
    ccode: string,
    quote: number
};

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
    const {table, isFetching} = useTypedSelector(state => state.currencies);
    const dispatch = useDispatch();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            let newDataSource: DataType[] = [...table];
            selectedRows.forEach((i) => newDataSource = newDataSource.filter((j) => j.key !== i.key));
            dispatch(actions.setTable([...selectedRows, ...newDataSource]));
        }
    };

    return (
        <div>
            {isFetching
                ? <Spin size="large" style={{position: 'absolute', top: '50%', left: 0, right: 0, margin: 'auto'}}/>
                : <Table
                    dataSource={table}
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    pagination={(window.matchMedia("(max-width: 767px)").matches)
                        ? {pageSize: 7, position: ['topRight']}
                        : {pageSize: 9, position: ['topRight']}}
                    columns={columns}/>}

        </div>
    );
}

export default CurrenciesList;