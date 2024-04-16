import React, { useState, useEffect } from 'react';
import { Rate, Space, Table, Typography } from "antd";
import { setRepoData } from '../../feature/githubSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Sorter} from './utils/sorter';

function Repositories() {
    const data = useSelector(state => state.userData)
    console.log(data)
    const dispatch = useDispatch();
    const dataSource = useSelector(state => state.repoData)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${data.login}/repos`)
            const responseData = await response.json();
            console.log(responseData)
            dispatch(setRepoData(responseData))
        };
        fetchData();
    }, [data])

    const [dataForMapping, setDataForMapping] = useState([]);

    useEffect(() => {

          const mappedData = dataSource.map((item,index) => {
            return {
              key: index,
              name: item.name,
              description: item.description,
              stargazers_count: item.stargazers_count,
              forks_count: item.forks_count,
              open_issue_count: item.open_issue_count,
            }
        });
          setDataForMapping(mappedData);
    }, [dataSource])

    return <Space size={20} direction='vertical'
        style={{
            display: 'block', width: 900, padding: 10
        }}>
        <Typography.Title level={4}>Repositories</Typography.Title>
        <Table
            columns={[
                {
                    title: "Name",
                    dataIndex: "name",
                    sorter: {
                        compare: Sorter.DEFAULT,
                        multiple: 1
                      },
                },
                {
                    title: "Description",
                    dataIndex: "description",
                },
                {
                    title: "Star",
                    dataIndex: "stargazers_count",
                    render: (stargazers_count) => {
                        return <Rate value={stargazers_count} allowHalf disabled />
                    },
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.stargazers_count - b.stargazers_count,
                },
                {
                    title: "Forks",
                    dataIndex: "forks_count",
                    sorter: (a, b) => a.forks_count - b.forks_count,
                },
                {
                    title: "open_issues",
                    dataIndex: "open_issue_count",
                    sorter: (a, b) => a.Openissue_count - b.Openissue_count,
                },
                {
                    title: "Details",
                    render: () => <a>action</a>,
                    //onClick: ()=>history.push({
                    // pathname: '/Repositories',
                    // RepositoryName:''}),
                }
            ]}
            dataSource={dataForMapping}
            pagination={{
                pageSize: 7,
            }}
        ></Table>
    </Space>
}
export default Repositories;