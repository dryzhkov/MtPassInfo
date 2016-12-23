import * as http from "http";
import * as MtPassDataModel from "../../server/models/MtPassDataModel";

class MtPassesApi {
  
  public static getConditions(): Promise<MtPassDataModel.Condition[]> {

    return new Promise((resolve, reject) => {
      http.get("/api/passes", (response: http.IncomingMessage) => {
        let error: Error;
        if (response.statusCode !== 200) {
          error = new Error("Bad response: " + response.statusCode);
        }

        response.setEncoding("utf8");
        let rawData = "";
        let parsedData = "";
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

export {MtPassesApi};