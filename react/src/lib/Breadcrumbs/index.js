/** @component breadcrumbs */

import React from 'react';
import PropTypes from 'prop-types';

class Breadcrumbs extends React.PureComponent {
  static displayName = 'Breadcrumbs';

  static propTypes = {
    /** @prop Children nodes to render inside Breadcrumbs | null */
    children: PropTypes.node,
    /** @prop Optional css class string | '' */
    className: PropTypes.string
  };

  static defaultProps = {
    children: null,
    className: ''
  };

  render() {
    const { className, children } = this.props;

    const items  = React.Children.map(children, (child, idx) => {
      if (children.length - 1 === idx || !children.length) {
        return React.cloneElement(child, { className: 'current' });
      }

      return child;
    });

    return <ul className={'cui-breadcrumbs' + ` ${className}`}>{items}</ul>;
  }
}

export default Breadcrumbs;

/**
* @component breadcrumbs
* @section default
* @react

import { Breadcrumbs, ListItem } from '@collab-ui/react';

export default function DefaultBreadCrumbs() {
    return (
      <div className='row'>
        <div className='columns small-12'>
          <Breadcrumbs>
            <li href='javascript:void(0)'>
              Default
            </li>
          </Breadcrumbs>
        </div>
        <div className='columns small-12'>
          <Breadcrumbs>
            <li href='javascript:void(0)'>
              Default
            </li>
            <li href='javascript:void(0)'>
              Default2
            </li>
          </Breadcrumbs>
        </div>
        <div className='columns small-12'>
          <Breadcrumbs>
            <li href='javascript:void(0)'>
              Default
            </li>
            <li href='javascript:void(0)'>
              Default2
            </li>
            <li href='javascript:void(0)'>
              Default3
            </li>
          </Breadcrumbs>
        </div>
      </div>
    );
  }

**/
