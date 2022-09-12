import IGameObserver from "./IGameObserver";

export default interface IGameController {
    startMatch(): void;

    addObserver(obs: IGameObserver) : void;

    removeObserver(obs: IGameObserver) : void;
}