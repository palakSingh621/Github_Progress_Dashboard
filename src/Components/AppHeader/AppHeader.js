import React from 'react';
import { Badge, Image,Space,Typography } from "antd";
import { BellFilled } from "@ant-design/icons"

function Header(){
    return <div className="AppHeader">
        <Image width={40} src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"></Image>
        <Typography.Title>GitHub Analytics Dashboard</Typography.Title>
        <Space>
            <Badge count={20}>
            <BellFilled style={{ fontSize: 24 }}/>
            </Badge>
        </Space>
    </div>
}
export default Header;