import React from 'react';
import { Nav, Nav_list, List_item, Avatar, Img } from './Style'
import user from '../../images/user.jpg'

function Navbar() {
  return (
    <Nav>
        <Nav_list>
            <List_item>TRIPS</List_item>
            <List_item>RECENTLY VIEWED</List_item>
            <List_item>BOOKINGS</List_item>
            <List_item>
                <Avatar>
                {<Img src={user}/>}
                </Avatar>
            </List_item>
        </Nav_list>
    </Nav>
    );
}

export default Navbar;
