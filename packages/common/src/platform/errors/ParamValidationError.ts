import {nameOf} from "@tsed/core";
import {BadRequest} from "@tsed/exceptions";
import {ParamMetadata} from "../../mvc/models/ParamMetadata";

export class ParamValidationError extends BadRequest {
  public name: string = "PARAM_VALIDATION_ERROR";
  public dataPath: string;
  public requestType: string;

  static from(metadata: ParamMetadata, origin: any = {}) {
    const name = nameOf(metadata.service)
      .toLowerCase()
      .replace(/parse|params|filter/gi, "");
    const expression = metadata.expression;
    const message = `Bad request on parameter "request.${name}${expression ? "." + expression : ""}".\n${origin.message}`.trim();

    const error = new ParamValidationError(message);
    error.dataPath = String(metadata.expression) || "";
    error.requestType = nameOf(metadata.service);
    error.origin = origin.origin || origin;

    return error;
  }
}
