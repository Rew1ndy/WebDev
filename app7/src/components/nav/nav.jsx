import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, Layout, Switch } from 'antd';
import './nav-styles.css'; 

const { Header, Content, Footer } = Layout;

const Navigation = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme = (checked) => {
        setDarkTheme(checked);
        document.body.className = checked ? 'dark-theme' : 'light-theme';
    };

    return (
        <Layout className={darkTheme ? 'dark-theme' : 'light-theme'}>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/">User</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin">Admin</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/error">Error</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Switch
                            checkedChildren="Темна"
                            unCheckedChildren="Світла"
                            checked={darkTheme}
                            onChange={toggleTheme}
                            className="theme-switch"
                        />
                    </Menu.Item>
                </Menu>
            </Header>
            <Outlet />
        </Layout>
    );
};

export { Navigation };
