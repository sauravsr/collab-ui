import React from 'react';
import {
  Button,
  AlertCall,
  AlertCallContainer
} from '@collab-ui/react';
import {
  uniqueId,
  reject
} from 'lodash';
export default class AlertCallDeviceList extends React.PureComponent {
  state = {
    alertList: [],
    caller: {title: 'Jefe Guadelupe', alt: '+ 1 972-555-1212'},
    devices: [
      {name: 'SJC21-Babelfish', value: '1010101', type: 'device'},
      {name: 'Use my computer', value: '2020202'}
    ]
  }
  handleOnReject = key => {
    console.log(`onRejectCall ${key}`);
    this.setState(state => {
      return { alertList: reject(state.alertList, {key}) };
    });
  }
  handleOnAnswerVoice = key => {
    console.log(`onAnswerVoice ${key}`);
    this.setState(state => {
      return { alertList: reject(state.alertList, {key}) };
    });
  }
  handleOnAnswerVideo = key => {
    console.log(`onAnswerVideo ${key}`);
    this.setState(state => {
      return { alertList: reject(state.alertList, {key}) };
    });
  }
  renderCallerWithDevices = () => {
    const key = uniqueId('call_alert_');
    return (
      <AlertCall
        key={key}
        title='Incoming Call'
        caller={this.state.caller}
        devices={this.state.devices}
        onReject={() => this.handleOnReject(key)}
        onAnswerVoice={() => this.handleOnAnswerVoice(key)}
        onAnswerVideo={() => this.handleOnAnswerVideo(key)}
        onDeviceSelect={() => console.log("onDeviceSelect")}
        show
      />
    );
  };
  render() {
    return (
      <div>
        <div className='row'>
          <br />
          <Button
            ariaLabel='Click to Open'
            onClick={() => {
              this.setState(state => ({
                alertList: [...state.alertList, this.renderCallerWithDevices()]
              }));
            }}
            children='Caller with Device List'
            color='primary'
          />
        </div>
        <AlertCallContainer
          alertList={this.state.alertList}
        />
      </div>
    );
  }
}