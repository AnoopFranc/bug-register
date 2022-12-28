import * as express from "express";
import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  request,
  response,
} from "inversify-express-utils";
import { TYPES } from "../core/type.core";
import { IAuthService } from "../interface/service";

@controller("/auth")
export class AuthController implements interfaces.Controller {
  constructor(@inject(TYPES.AuthService) private authService: IAuthService) {}
  @httpGet("/helloworld")
  public async index(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      const post = this.authService.helloWorld();
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  @httpPost("/gmail")
  public async signInByGmail(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      const credential = req.body.credential;
      const response = await this.authService.signInByGmail(credential);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
