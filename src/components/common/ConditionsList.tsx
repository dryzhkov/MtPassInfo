import * as React from "react";
import * as MtPassDataModel from "../../../server/models/MtPassDataModel";
import {ConditionsListRow} from "./ConditionsListRow";

export interface ConditionsListProps { conditions: MtPassDataModel.Condition[] }

const ConditionsList = (props: ConditionsListProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Temp in F</th>
          <th>Road Condition</th>
          <th>Weather Conditions</th>
          <th>Restrictions</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {props.conditions.map(curCondition =>
          <ConditionsListRow key={curCondition.MountainPassId} condition={curCondition} />
        )}
      </tbody>
    </table>
  );
};

export {ConditionsList};
