import * as React from "react";
import * as MtPassDataModel from "../../../server/models/MtPassDataModel";

export interface ConditionsListRowProps { condition: MtPassDataModel.Condition }

const ConditionsListRow = (props: ConditionsListRowProps) => {
  const condition = props.condition;
  let restrictions: string = 
    condition.RestrictionOne && condition.RestrictionTwo ? 
    `${condition.RestrictionOne.TravelDirection}: ${condition.RestrictionOne.RestrictionText} ~ ${condition.RestrictionTwo.TravelDirection}: ${condition.RestrictionTwo.RestrictionText}` :
    "";
  
  let formattedDate = "";
  
  if (condition.DateUpdated) {
    const dateRegex = /(\d+(\-\d+)*)/i;
    const dateMatch = condition.DateUpdated.match(dateRegex);
    if (dateMatch) {
      const rawEpoch = parseFloat(dateMatch[0]);
      formattedDate = new Date(rawEpoch).toLocaleString();
    }
  }
  
  return (
    <tr>
      <td>{condition.MountainPassName}</td>
      <td>{condition.TemperatureInFahrenheit}</td>
      <td>{condition.RoadCondition}</td>
      <td>{condition.WeatherCondition}</td>
      <td>{restrictions}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};

export {ConditionsListRow};