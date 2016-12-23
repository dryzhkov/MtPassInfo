import * as React from 'react';
import {MtPassesApi} from '../../api/MtPassesApi';
import {ConditionsList} from './ConditionsList';
import * as MtPassDataModel from "../../../server/models/MtPassDataModel";

export interface MtPassInfoProps { mtPassFilter?: number[]; }
export interface MtPassInfoState { conditions: MtPassDataModel.Condition[]; }

class MtPassesInfo extends React.Component<MtPassInfoProps, MtPassInfoState> {
  constructor(props: MtPassInfoProps, state: MtPassInfoState) {
    super(props, state);
    this.state = { conditions : [] };
  }

  componentWillMount() {
    MtPassesApi.getConditions().then(results => {
      if (this.props.mtPassFilter) {
        results = results.filter(condition => { 
          return this.props.mtPassFilter.indexOf(condition.MountainPassId) > -1; 
        });
      }
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