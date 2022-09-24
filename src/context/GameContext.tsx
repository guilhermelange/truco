import { createContext,  ReactNode} from "react";
import IGameController from "../truco/controller/IGameController";

interface GameProviderProps {
    children: ReactNode;
}

interface GameContextType {
    controller: IGameController | null
    setController: (con: IGameController) => void
}

export const GameContext = createContext({} as GameContextType)

export function GameProvider({ children }: GameProviderProps) {
    let controller = null;

    function setController(con: IGameController) {
        controller = con;
    }
    
    return (
        <GameContext.Provider value={{ controller, setController }}>
            {children}
        </GameContext.Provider>
    )
}