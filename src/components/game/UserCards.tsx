import { Box } from "@chakra-ui/react";
import Deck from "../../truco/domain/model/Deck";
import User from "../../truco/domain/model/User";

interface IUserCardsRequest {
    user: User;
    cardWidth: number;
    rotate?: string;
    show?: boolean;
    deck: Deck;
}

export default function UserCards({ user, cardWidth, rotate, show = false, deck}: IUserCardsRequest) {
    if (!user) {
        return (
            <div></div>
        )
    }
    
    const cards = user.cards;

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'full'}
            transform={(rotate) ? rotate : ''}>
            {cards[0] &&
                <Box transform={'rotate(-5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}
                cursor={'pointer'}
                boxShadow={deck.isJoker(cards[0]) ? '0px 0px 4px 4px #c3a713' : ''}
                >
                    <img src={(show) ? `/cards/${cards[0].getImage()}`: '/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                </Box>
            }

            {cards[1] &&
                <Box transform={'rotate(0deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}
                cursor={'pointer'}
                boxShadow={deck.isJoker(cards[1]) ? '0px 0px 4px 4px #c3a713' : ''}>
                    <img src={(show) ? `/cards/${cards[1].getImage()}`: '/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                </Box>
            }

            {cards[2] &&
                <Box transform={'rotate(5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}
                    cursor={'pointer'}
                    boxShadow={deck.isJoker(cards[2]) ? '0px 0px 4px 4px #c3a713' : ''}>
                    <img src={(show) ? `/cards/${cards[2].getImage()}`: '/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                </Box>
            }
        </Box>
    )
}