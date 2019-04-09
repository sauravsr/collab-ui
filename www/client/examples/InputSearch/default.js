import React from 'react';
import { SearchInput } from '@collab-ui/react';
export default class DefaultSearchInput extends React.PureComponent {
  render() {
    return (
      <SearchInput
        name='defaultSearchInput'
        htmlId='defaultSearchInput'
        inputSize='small-5'
      />
    );
  }
}