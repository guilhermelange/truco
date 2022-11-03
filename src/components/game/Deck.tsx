import { Box } from "@chakra-ui/react";
import Deck from "../../truco/domain/model/Deck";

interface IDeckRequest {
    deck: Deck
    cardWidth: number;
    loading: boolean;
}

export default function DeckComponent({ cardWidth, deck, loading}: IDeckRequest) {
    return (
        <>
            {!loading && <Box transform={'rotate(225deg)'} position='absolute' bottom={0} left={5} id={'manilha'} cursor={'pointer'}>
                <img src={`/cards/${deck.joker.getImage()}`} height={'100%'} width={cardWidth}></img>
            </Box>}
            <Box transform={'rotate(90deg)'} position='absolute' id={'monte'} cursor={'pointer'}>
                <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
            </Box>
        </>
    )
}