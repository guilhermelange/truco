import { Box } from "@chakra-ui/react";
import User from "../../truco/domain/model/User";

interface IUserCardsRequest {
    user: User,
    cardWidth: number,
    rotate?: string
    show?: boolean
}

export default function UserCards({ user, cardWidth, rotate, show = false}: IUserCardsRequest) {
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
                cursor={'pointer'}>
                    <img src={(show) ? `/cards/${cards[0].getImage()}`: '/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                </Box>
            }

            {cards[1] &&
                <Box transform={'rotate(0deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}
                cursor={'pointer'}>
                    <img src={(show) ? `/cards/${cards[1].getImage()}`: '/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                </Box>
            }

            {cards[2] &&
                <Box transform={'rotate(5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}
                    cursor={'pointer'}>
                    <img src={(show) ? `/cards/${cards[2].getImage()}`: '/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                </Box>
            }
        </Box>
    )
}