import { Box } from "@chakra-ui/react";
import Deck from "../truco/model/Deck";

interface IDeckRequest {
    deck: Deck
    cardWidth: number;
}

export default function DeckComponent({ cardWidth, deck }: IDeckRequest) {
    return (
        <>
            <Box transform={'rotate(45deg)'} position='absolute' bottom={0} left={5} id={'manilha'}>
                <img src={`/cards/${deck.joker.getImage()}`} height={'100%'} width={cardWidth}></img>
            </Box>
            <Box transform={'rotate(90deg)'} position='absolute' id={'monte'}>
                <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
            </Box>
        </>
    )
}