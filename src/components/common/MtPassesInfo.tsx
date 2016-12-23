import * as React from 'react';
import {MtPassesApi} from '../../api/MtPassesApi';
import {ConditionsList} from './ConditionsList';
import * as MtPassDataModel from "../../../server/models/MtPassDataModel";

export interface MtPassInfoProps {}
export interface MtPassInfoState { conditions: MtPassDataModel.Condition[]; }

class MtPassesInfo extends React.Component<MtPassInfoProps, MtPassInfoState> {
  constructor(props: MtPassInfoProps, state: MtPassInfoState) {
    super(props, state);
    this.state = { conditions : [] };
  }

  componentWillMount() {
    MtPassesApi.getConditions().then(results => {
      this.setState({ conditions : results });
    });
  }

  render() {
    return (
      <div>
        <h2>Mountain Pass Conditions</h2>
        <ConditionsList conditions={ this.state.conditions } />
      </div>
    );
  };
}

export default MtPassesInfo;