import React from 'react';
import { BookOutlined, ReadOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu(){
    const navigate=useNavigate();
    return (<div className="SideMenu">
        <Menu mode="inline"
        onClick={(item)=>{
            //item.key
            navigate(item.key);
        }}
        items={[
            {
                label:"Overview",
                icon:<ReadOutlined />,
                key:"/",
            },
            {
                label:"Repositories",
                icon:<BookOutlined/>,
                key:"/Repositories",
            },
            {
                label:"Contributors",
                icon:<UsergroupAddOutlined />,
                key:"/Contibutors",
            }

        ]}></Menu>
    </div>);
}
export default SideMenu;