import React from 'react'; 
import { Typography, Space, Table } from "antd";

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

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );

function Contributors(){
    return (<div>
        <Typography.Title level={4}> RepositoryName</Typography.Title>
        <Space>
            <h3>Annul Commits</h3>
           {/* <CommitChart/> */}
        </Space>
        <Space>
            <h3>Contributors</h3>
            <Contributors/>
        </Space>
    </div>);
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

    function Contributors(){
       return <Table 
        columns={[
            {
                title: "Thumbnail",
                dataIndex:"thumnail",
                // render(link)=>{
                //     retrun <Avatar src={link} />;
                // },
            },
            {
                tile:"Username",
                dataIndex:"Username",
            },
            {
                title: "Commits",
                dataIndex:"Commits",
            }
        ]}
        pagination={{
            pagesize:5,
        }}
        ></Table>
    }

export default Contributors;