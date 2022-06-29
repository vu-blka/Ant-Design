import React from "react";
import { Menu } from 'antd';

function AppHeader() {
    return (
       <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fas fa-bolt"></i>
                    <a href="https://www.facebook.com">Tech</a>
                </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                    >
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="features">Features</Menu.Item>
                        <Menu.Item key="howitworks">How it works</Menu.Item>
                        <Menu.Item key="faq">FAQ</Menu.Item>
                        <Menu.Item key="pricing">Pricing</Menu.Item>
                        <Menu.Item key="contact">Contact</Menu.Item>
                    </Menu>
                </div>
        </div>
    )
}

export default AppHeader;