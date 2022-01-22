import { Sidebar, SidebarLink, Icon, CloseIcon} from './sidebarElements';
import React from 'react';

function SideBar ({isopen, toggle}, props) {
    return (
            <Sidebar isopen={isopen}>    
                <Icon onClick={toggle}>
                <CloseIcon />
                </Icon>
                 <SidebarLink to='/cats' onClick={toggle}>SEE ALL CATS</SidebarLink>
                 <SidebarLink to='/breeds' onClick={toggle}>SEE ALL BREEDS</SidebarLink>
                 <SidebarLink to='/cats/form' onClick={toggle}>ADD YOUR CAT</SidebarLink>
                 <SidebarLink to='/breeds/form' onClick={toggle}>ADD A BREED</SidebarLink>
            </Sidebar>
    );
}
export default SideBar;