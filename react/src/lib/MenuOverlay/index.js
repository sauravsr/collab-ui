/** @component menu */

import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { EventOverlay } from '@collab-ui/react';
import MenuContext from '../MenuContext';
import { UIDReset } from 'react-uid';

class MenuOverlay extends React.Component {
  state = {
    isOpen: false,
  };

  onSelect = (e, opts) => {
    const { onSelect } = this.props;
    const { eventKey, element } = opts;
    const { keepMenuOpen } = element.props;

    onSelect && onSelect(e, {eventKey, element});
    element.constructor.displayName !== 'SubMenu'
      && !keepMenuOpen
      && this.handleClose();
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      children,
      className,
      menuTrigger,
      showArrow,
      ...props
    } = this.props;

    const { isOpen } = this.state;

    const otherProps = omit({...props}, ['onSelect']);

    const setMenuTrigger = () => React.cloneElement(menuTrigger, {
      onClick: () => this.setState({ isOpen: !isOpen }),
      ref: ref => this.anchorNode = ref,
    });

    return (
      <div
        className={
          'cui-menu-overlay-wrapper' +
          `${(className && ` ${className}`) || ''}`
        }
      >
        {setMenuTrigger()}
        <EventOverlay
          allowClickAway
          anchorNode={this.anchorNode}
          className='cui-menu-overlay'
          close={this.handleClose}
          isOpen={isOpen}
          showArrow={showArrow}
          {...otherProps}
        >
          <MenuContext.Provider value={{ parentOnSelect: this.onSelect }}>
            <UIDReset>
              {children}
            </UIDReset>
          </MenuContext.Provider>
        </EventOverlay>
      </div>
    );
  }
}

MenuOverlay.propTypes = {
  /** @prop Children nodes to render inside MenuOverlay | null */
  children: PropTypes.node,
  /** @prop Optional css class name | '' */
  className: PropTypes.string,
  /** @prop HTML element that provides control to MenuOverlay user  */
  menuTrigger: PropTypes.element.isRequired,
  /** @prop Callback function invoked when user selects MenuOverlay | null */
  onSelect: PropTypes.func,
  /** @prop Determines if the MenuOverlay should show the open/close arrow | true */
  showArrow: PropTypes.bool,
};

MenuOverlay.defaultProps = {
  children: null,
  className: '',
  onSelect: null,
  showArrow: true,
};

MenuOverlay.displayName = 'MenuOverlay';

export default MenuOverlay;

/**
* @component menu
* @section default
* @react
*

import {
  Button,
  EditableTextfield,
  Menu,
  MenuContent,
  MenuItem,
  MenuOverlay,
} from '@collab-ui/react';

export default class MenuOverlayDefault extends React.PureComponent {
  onClick(event, value) {
    alert(`${value} clicked`);
  }

  render() {
    return(
      <MenuOverlay
        menuTrigger={<Button ariaLabel="Show Menu">Show Menu</Button>}>
        <MenuContent>
          <EditableTextfield inputText="Content Area" />
        </MenuContent>
        <Menu>
          <MenuItem onClick={this.onClick} label="Language" />
          <MenuItem onClick={this.onClick} label="Profile" />
          <MenuItem onClick={this.onClick} label="Settings" />
        </Menu>
      </MenuOverlay>
    );
  }
}
**/


/**
* @component menu
* @section sub-menu
* @react
*

import {
  Button,
  Menu,
  MenuItem,
  MenuOverlay,
  SubMenu
} from '@collab-ui/react';

export default class MenuOverlaySubMenu extends React.PureComponent {
  onClick(event, value) {
    alert(`${value} clicked`);
  }

  render() {
    return(
      <MenuOverlay
        menuTrigger={
          <Button ariaLabel='Show Menu'>Show Menu</Button>
        }
      >
        <Menu>
          <SubMenu
            selectedValue="English"
            label="Language"
          >
            <MenuItem label="English" />
            <MenuItem label="Spanish" />
          </SubMenu>
        </Menu>
      </MenuOverlay>
    );
  }
}
**/


/**
* @component menu
* @section custom-menu-items
* @react
*

import {
  Button,
  Icon,
  ListItemSection,
  Menu,
  MenuContent,
  MenuItem,
  MenuOverlay,
} from '@collab-ui/react';

export default class CustomMenuItems extends React.PureComponent {
  onClick(event, value) {
    alert(`${value} clicked`);
  }

  render() {
    return(
      <MenuOverlay
        menuTrigger={
          <Button ariaLabel='Show Custom Menu'>Show Customized MenuItems</Button>
        }
        direction='top-center'
      >
        <MenuContent>Content</MenuContent>
        <Menu>
          <MenuItem>
            <ListItemSection position="left">
              <Icon name='edit_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Edit space settings
          </ListItemSection>
          </MenuItem>
          <MenuItem keepMenuOpen>
            <ListItemSection position="left">
              <Icon name='favorite_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Add to favorites
          </ListItemSection>
          </MenuItem>
          <MenuItem>
            <ListItemSection position="left">
              <Icon name='alert_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Notifications
          </ListItemSection>
          </MenuItem>
          <MenuItem>
            <ListItemSection position="left">
              <Icon name='accessories_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Add Integrations & Bots
          </ListItemSection>
          </MenuItem>
          <MenuItem>
            <ListItemSection position="left">
              <Icon name='stored-info_20' />
            </ListItemSection>
            <ListItemSection position="center">
              View space policy
          </ListItemSection>
          </MenuItem>
          <MenuItem keepMenuOpen>
            <ListItemSection position="left">
              <Icon name='archive_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Archive space
          </ListItemSection>
          </MenuItem>
          <MenuItem keepMenuOpen>
            <ListItemSection position="left">
              <Icon name='cancel_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Remove space from team
          </ListItemSection>
          </MenuItem>
          <MenuItem>
            <ListItemSection position="left">
              <Icon name='exit-room_20' />
            </ListItemSection>
            <ListItemSection position="center">
              Leave space
          </ListItemSection>
          </MenuItem>
        </Menu>
      </MenuOverlay>
    );
  }
}
**/
