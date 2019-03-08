import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

export default class MobileMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu fixed='bottom' borderless widths={5}>
                <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                    <NavLink to="/add">
                        <Icon name='add' size='big' />
                    </NavLink>
                </Menu.Item>
                <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
                    <NavLink to="/">
                        <Icon name='home' size='big' />
                    </NavLink>
                </Menu.Item>
                <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                    <NavLink to="/calendar">
                        <Icon name='calendar' size='big' />
                    </NavLink>
                </Menu.Item>
            </Menu>
        )
    }
}