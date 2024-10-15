import React from "react";
import { Card, Button, Descriptions, Avatar } from "antd";

const User = (params) => {


    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '400px', textAlign: 'center' }}>
            <Avatar size={64} src="https://www.example.com/avatar.jpg" />
            <h2 style={{ marginTop: '10px' }}>John Doe</h2>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Email">john@example.com</Descriptions.Item>
                <Descriptions.Item label="Role">User</Descriptions.Item>
                <Descriptions.Item label="Joined">2022-01-01</Descriptions.Item>
            </Descriptions>
            <Button type="primary" style={{ marginTop: '20px' }}>
                Edit Profile
            </Button>
            </Card>
        </div>
    )
}

export { User };