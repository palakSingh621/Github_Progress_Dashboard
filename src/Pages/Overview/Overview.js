import React from 'react'; 
import { Row, Col, Avatar, Card, Space, Typography, Statistic, Flex } from "antd";
import Meta from 'antd/es/card/Meta';
import { BookOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import Search from 'antd/es/transfer/search';
import { Header } from 'antd/es/layout/layout';

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


function Overview(){
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return <div>
        <Header>
        <Search placeholder="Type UserName" allowClear onSearch={onSearch} style={{width: 200,display: Flex}}/>
        </Header>

        <Space direction ="horizontal">
            <Row gutter={16}>
            <Col span={8}>
                <Card hoverable style={{width: 220,}}>
                    <Avatar shape="circle" 
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                    }}
                    src="https://www.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-600nw-1836020740.jpg"/>
                    <Meta title="Name" description="Username"/>
                    <Typography.Text>Bio</Typography.Text>
                </Card>
            </Col>

            <Col span={8}>
            <Card hoverable style={{width: 220,}}>
                <Avatar icon= {<UsergroupAddOutlined 
                style={{
                    color: "green",
                    backgroundColor:"rgba(0,225,0,0.5)",
                    fontSize: 24,
                    borderRadius: 10,
                    padding: 100
                }}/>}
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
                        <Statistic title="Followers" value={6} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Following" value={5} />
                    </Col>
                </Row>
            </Card>
            </Col>

            <Col span={8}>
            <Card hoverable style={{width: 220,}}>
            <Avatar
            icon= <BookOutlined
            style={{
                color:"Blue",
                backgroundColor: "rgba(0,255,255,0.25)",
                fontSize: 24,
                borderRadius: 10,
                padding: 100
            }}/>
                size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                }}/>
                <Statistic title="Repositories" value={17}/>
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