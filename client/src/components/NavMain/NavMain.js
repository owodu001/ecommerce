import React from "react";
import { Menu, Button, Header, Grommet } from 'grommet';
import { Home } from 'grommet-icons';
import { Cart } from 'grommet-icons';


function NavMain() {

    return (
        <Grommet plain>
            <Header background="brand">
                <Button icon={<Home />} hoverIndicator />
                <Menu label="account" items={[{ label: 'logout' }]} />
                <Button icon={<Cart />} hoverIndicator />
            </Header>
        </Grommet>
    );
}

export default NavMain;