import * as http from "http";
import * as MtPassDataModel from "../models/MtPassDataModel";
import {Promise} from 'es6-promise';

class WSDOTService {
  // API Info: http://wsdot.com/traffic/api/
  private static API_KEY: string = "11f0dd06-de88-4015-8ccd-83cd5738453a";
  
  public static getMountainPassConditions(): Promise<MtPassDataModel.Condition[]> {
    const requestUrl: string = `http://wsdot.com/Traffic/api/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode=${WSDOTService.API_KEY}`;

    return new Promise((resolve, reject) => {
      http.get(requestUrl, (response: http.IncomingMessage) => {
        let error: Error;
        if (response.statusCode !== 200) {
          error = new Error("Bad response: " + response.statusCode);
        }

        response.setEncoding("utf8");
        let rawData = "";
        let parsedData: MtPassDataModel.Condition[] = [];
        response.on("data", (chunk) => rawData += chunk);
        response.on("end", () => {
          try {
            parsedData = JSON.parse(rawData);
          } catch (e) {
            error = new Error("Unable to parse response");
          }

          if (!error) {
            resolve(parsedData);
          } else {
            reject(error);
          }
        });
      });
    });
  }
}

export {WSDOTService};