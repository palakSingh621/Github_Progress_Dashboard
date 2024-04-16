import React, { useState ,useEffect} from 'react'; 
import { Rate, Space, Table, Typography } from "antd";
// import Contributors from '../Contributors/Contibutors';
// import { Sorter } from "./utils/sorter";
import { setRepoData } from '../../feature/githubSlice';
import { useDispatch, useSelector } from 'react-redux';


// import { getRepositories } from '../../API/api';
// import Detail from './Detail';

function Repositories(){
    // const history=useHistory();
    // const navigate=useNavigate();
    //const [loading, setLoading]=useState(false);
    // const [dataSource, setDataSource]=useState([])
    const data = useSelector(state => state.userData)
    console.log(data)
    //const dispatch = useDispatch();
    // const dataSource = useSelector(state => state.repoData)
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${data.username}/repos`)
    //         .then(response => response.json())
    //         .then(responseData => {
    //                 //console.log(typeof data);
    //                 //setData(data)
                    
    //             dispatch(setRepoData(responseData))
    //         })
    // },[data.username])

    

    const dataSource = [ 
        { key: '1', name: 'Gourav', description :"svdcugcisyeyuhekj", stargazers_count: 1 , forks_count: 4 , Openissue_count:2  }, 
        { key: '2', name: 'Kartik', description :"svdcugcisyeyuhekj", stargazers_count: 2 , forks_count: 2 , Openissue_count:2  }, 
        { key: '3', name: 'Madhu', description :"svdcugcisyeyuhekj", stargazers_count: 3 , forks_count: 1 , Openissue_count:2  }, 
        { key: '4', name: 'Karu', description :"svdcugcisyeyuhekj", stargazers_count: 4 , forks_count: 3 , Openissue_count:2  }, 
        { key: '5', name: 'Dinesh', description :"svdcugcisyeyuhekj", stargazers_count: 5 , forks_count: 5 , Openissue_count:2  }, 
    ]; 

    return <Space size={20} direction='vertical' 
    style={{ 
        display: 'block', width: 700, padding: 30 
    }}>
        <Typography.Title level={4}>Repositories</Typography.Title>
        <Table 
        //loading={loading}
        columns={[
            {
                title:"Name",
                dataIndex: "name",
                // onClick: ()=>history.push({
                //     pathname: '/Repositories',
                //     RepositoryName:'name'}),
                sorter: (a, b) => a.name_count - b.name_count,
            },
            {
                title:"Description",
                dataIndex: "description"
            },
            {
                title:"Star",
                dataIndex: "stargazers_count",
                render:(stargazers_count)=>{
                    return <Rate value={stargazers_count} allowHalf disabled/>
                },
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.stargazers_count - b.stargazers_count,
            },
            {
                title:"Forks",
                dataIndex: "forks_count",
                sorter: (a, b) => a.forks_count - b.forks_count,
            },
            {
                title:"Open-issues",
                dataIndex: "Openissue_count",
                sorter: (a, b) => a.Openissue_count - b.Openissue_count,
            },
            {
                title:"Details",
                render: ()=><a>action</a>,
                //onClick: ()=>history.push({
                   // pathname: '/Repositories',
                   // RepositoryName:''}),
            }
        ]}
         dataSource={dataSource}
        pagination={{
            pageSize: 7,
        }}
        ></Table>
    </Space>
}
export default Repositories;