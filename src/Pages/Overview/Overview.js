import React, { useState } from 'react';
import { Row, Col, Avatar, Card, Space, Typography, Statistic } from "antd";
import Meta from 'antd/es/card/Meta';
import { BookOutlined, UsergroupAddOutlined,SearchOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData} from '../../../src/feature/githubSlice.js'


// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
//   import { Line } from 'react-chartjs-2';
//   import { faker } from 'faker';

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );


function Overview() {
    
    const [val , setVal] = useState("");
    //const [data ,setData] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(state => state.userData)
    
    //console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${val}`)
            .then(response => response.json())
            .then(data => {
                    //console.log(typeof data);
                    //setData(data)
                dispatch(setUserData(data))

            })
            // fetch(`https://api.github.com/users/${val}/repos`)
            //         .then(response => response.json())
            //         .then(responseData => {
                            
                            
                            
            //             dispatch(setRepoData(responseData))
            //         })
    }

    return <div>

        <Header>
            <form onSubmit={handleSubmit}>
                 <input
                    type="text"
                    placeholder="Type /UserName"
                    className={styles.textbox}
        
                    onChange={(e)=>{setVal(e.target.value)}}
                     />
                    <button style={{height:30, width: 50}} type='submit'><SearchOutlined/></button>
            </form>


            
        </Header>

        <Space direction="horizontal">
            <Row gutter={16}>
                <Col span={8}>
                    <Card hoverable style={{ width: 220, }}>
                        <Avatar shape="circle"
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                            src={data.avatar_url} />
                        <Meta title={data.name} description="Username" />{data.login}<br></br>
                        <Typography.Text>Bio</Typography.Text><br></br>{data.bio}
                    </Card>
                </Col>

                <Col span={8}>
                    <Card hoverable style={{ width: 220, }}>
                        <Avatar icon={<UsergroupAddOutlined
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,225,0,0.5)",
                                fontSize: 24,
                                borderRadius: 10,
                                padding: 100
                            }} />}
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                        />
                        <Row gutter={16}>
                            <Col span={12}>
                                <Statistic title="Followers" value={data.followers} />
                            </Col>
                            <Col span={12}>
                                <Statistic title="Following" value={data.following} />
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card hoverable style={{ width: 220, }}>
                        <Avatar
                            icon=<BookOutlined
                                style={{
                                    color: "Blue",
                                    backgroundColor: "rgba(0,255,255,0.25)",
                                    fontSize: 24,
                                    borderRadius: 10,
                                    padding: 100
                                }} />
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }} />
                        <Statistic title="Repositories" value={data.public_repos} />
                    </Card>
                </Col>
            </Row>
        </Space>

        {/* <Space>
        <CommitChart/>
        </Space> */}

    </div>
}


// function CommitChart(){

//     const options = {
//         responsive: true,
//           title: {
//             display: true,
//             text: 'Commit History',
//           },
//         }

//     const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct","Nov","Dec"];

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'Yearly',
//                 data: labels.map(() =>faker.datatype.number({ min: 0, max: 1000 })),
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1
//             }
//         ],
//     };

//     return (
//     <Card style={{ width: 500, height: 250 }}>
//         <Line options={options} data={data} />;
//     </Card>);
// }

export default Overview;
