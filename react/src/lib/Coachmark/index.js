/** @component coachmark */

 import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { EventOverlay, Button } from '@collab-ui/react';

class Coachmark extends React.Component {
  static displayName = 'Coachmark';

  state = {
    isOpen: this.props.isOpen
  };

  componentDidMount() {
    this.props.isOpen &&
    this.delayedShow();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      return this.props.isOpen
      ? this.delayedShow()
      : this.delayedHide();
    }
  }

  componentWillUnmount() {
    this.hideTimerId && clearTimeout(this.hideTimerId);
    this.showTimerId && clearTimeout(this.showTimerId);
  }

  delayedHide = e => {
    const { onClick } = this.props;

    if (this.showTimerId) {
      clearTimeout(this.showTimerId);
      this.showTimerId = null;
    }

    const delay = this.props.hideDelay
      ? this.props.hideDelay
      : this.props.delay;

    this.hideTimerId = setTimeout(() => {
      this.hideTimerId = null;
      this.setState(() => {
        onClick && onClick(e);
        return { isOpen: false };
      });
    }, delay);

  };

  delayedShow = () => {
    if (this.hideTimerId) {
      clearTimeout(this.hideTimerId);
      this.hideTimerId = null;
    }

    const delay = this.props.showDelay
      ? this.props.showDelay
      : this.props.delay;

    this.showTimerId = setTimeout(() => {
      this.showTimerId = null;
      this.setState({ isOpen: true });
    }, delay);

  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      allowClickAway,
      buttonProps,
      className,
      children,
      closeOnClick,
      contentNode,
      direction,
      header,
      maxWidth,
      onClick,
      subheader,
      ...props
    } = this.props;

    const otherProps = omit({...props}, ['delay', 'hideDelay', 'isOpen', 'showDelay']);

    const anchorWithRef =
      children && React.cloneElement(children, {
        ref: ele => this.anchorRef = ele,
        ...otherProps
      });

    const content = (
      <div className='cui-coachmark__container'>
        {
          contentNode
            ? contentNode
            : [
                header && <div className='cui-coachmark__header' key='content-0'>{header}</div>,
                subheader && <div className='cui-coachmark__subheader' key='content-1'>{subheader}</div>,
                onClick && <Button onClick={this.delayedHide} {...buttonProps} key='content-2' />
              ]
            }
      </div>
    );

    return (
      <React.Fragment>
        {anchorWithRef}
        <EventOverlay
          ref={ref => this.overlay = ref}
          allowClickAway={allowClickAway}
          anchorNode={this.anchorRef}
          isOpen={this.state.isOpen}
          className={
            'cui-coachmark' +
            `${(className && ` ${className}`) || ''}`
          }
          showArrow
          direction={direction}
          close={this.handleClose}
          closeOnClick={closeOnClick}
          {...maxWidth && {maxWidth: maxWidth}}
        >
          {content}
        </EventOverlay>
      </React.Fragment>
    );
  }
}

Coachmark.defaultProps = {
  allowClickAway: false,
  buttonProps: {},
  children: null,
  className: '',
  closeOnClick: false,
  contentNode: null,
  delay: 0,
  direction: 'top-center',
  header: '',
  hideDelay: 0,
  isOpen: false,
  maxWidth: null,
  onClick: null,
  showDelay: 0,
  subheader: '',
};

Coachmark.propTypes = {
  /** @prop Allows user to click outside of element | false */
  allowClickAway: PropTypes.bool,
  /** @prop Button props within Coachmark | {} */
  buttonProps: PropTypes.object,
  /** @prop Optional css class string | '' */
  className: PropTypes.string,
  /** @prop Children nodes to render inside Coachmark | null */
  children: PropTypes.node.isRequired,
  /** @prop Allows Coachmark to be closed by a click from the user | false */
  closeOnClick: PropTypes.bool,
  /** @prop Node with content that populates the Coachmark | null */
  contentNode: PropTypes.node,
  /** @prop Sets the time the timer is delayed | 0 */
  delay: PropTypes.number,
  /** @prop Sets the direction the Coachmark opens up | 'top-center' */
  direction: PropTypes.oneOf([
    'top-center',
    'top-left',
    'top-right',
    'left-center',
    'left-top',
    'left-bottom',
    'bottom-center',
    'bottom-left',
    'bottom-right',
    'right-center',
    'right-top',
    'right-bottom'
  ]),
  /** @prop Sets the header node of Coachmark | '' */
  header: PropTypes.node,
  /** @prop Sets the time delay to hide the Coachmark | 0 */
  hideDelay: PropTypes.number,
  /** @prop Sets the initial visibility of Coachmark | false */
  isOpen: PropTypes.bool,
  /** @prop Sets the maximum width of Coachmark | null */
  maxWidth: PropTypes.number,
  /** @prop Handler to be called when the user clicks the Coachmark | null */
  onClick: PropTypes.func,
  /** @prop Shows visibility of the delay value | 0 */
  showDelay: PropTypes.number,
  /** @prop Sets the subheader node of the Coachmark | '' */
  subheader: PropTypes.node,
};

export default Coachmark;

/**
* @name Coachmark Default
*
* @category communication
* @component coachmark
* @section default
*
* @js

import {
  Avatar,
  Button,
  Coachmark,
  SpaceListItem,
} from '@collab-ui/react';

 export default class CoachmarkDefault extends React.Component {

  state = {
    openFirst: true,
    openNext: false,
    openLast: false
  }

  render() {
    const {openFirst, openNext, openLast} = this.state;

    return (
      <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
        <Coachmark
          buttonProps={{ children: 'Got It', ariaLabel: 'Open Coachmark 1' }}
          direction='bottom-center'
          header={`Header prop(node)`}
          isOpen={openFirst}
          maxWidth={272}
          onClick={() => this.setState({openFirst: false, openNext: true})}
          subheader={`Subheader prop(node)`}
        >
          <Button
            ariaLabel='test'
            onClick={() => this.setState({
              openFirst: true,
              openNext: false,
              openLast: false
            })}
          >
            Coachmark Anchor
          </Button>
        </Coachmark>
        <Coachmark
          buttonProps={{ children: 'Click for next Coachmark', ariaLabel: 'Open Coachmark 2' }}
          direction='top-center'
          header={`Header prop(node)`}
          isOpen={openNext}
          onClick={() => this.setState({openLast: true, openNext: false})}
        >
          <Button
            ariaLabel='test'
            onClick={() => this.setState({
              openFirst: false,
              openNext: true,
              openLast: false
            })}
          >
            2nd Coachmark Anchor
          </Button>
        </Coachmark>
        <Coachmark
          buttonProps={{ ariaLabel: 'Open Coachmark 3' }}
          contentNode={<div>contentNode prop(node)</div>}
          direction='bottom-center'
          isOpen={openLast}
        >
          <Button
            ariaLabel='test'
            onClick={() => this.setState({
              openFirst: false,
              openNext: false,
              openLast: true
            })}
          >
            3rd Coachmark Anchor
          </Button>
        </Coachmark>
      </div>
    );
  }
}
**/
