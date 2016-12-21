import * as React from 'react';
import {MtPassesApi} from '../../api/MtPassesApi';

export interface MtPassInfoProps { id: string; }
export interface MtPassInfoState { conditions: string; }

class MtPassInfo extends React.Component<MtPassInfoProps, MtPassInfoState> {
  constructor(props: MtPassInfoProps, state: MtPassInfoState) {
    super(props, state);

    this.state = { conditions : 'Test' };
  }

  componentWillMount() {
    const mtPassId = this.props.id;
    
    MtPassesApi.getConditions().then(results => {
      this.setState({ conditions : JSON.stringify(results) });
    });
  }

  render() {
    return (
      <div>
        <h2>Mountain Pass Conditions</h2>
        {this.state.conditions}
      </div>
    );
  };
}

export default MtPassInfo;