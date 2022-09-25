import { Algorithm } from "../../model/User";
import IFormObserver from "./IFormObserver";

export interface IUserStartMatch {
    name: string,
    algorithm: string
}

export default interface IFormController {
    startMatch(data: IUserStartMatch[]): void;

    addObserver(obs: IFormObserver) : void;

    removeObserver(obs: IFormObserver) : void;
}