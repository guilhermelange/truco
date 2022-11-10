import { Box, Grid, GridItem, Icon, Spinner, Text } from "@chakra-ui/react";
import { useRef, useState, useEffect } from 'react';
import Avatar from "../../components/game/Avatar";
import UserCards from "./UserCards";
import DeckComponent from "./Deck";
import { IoMdArrowRoundBack } from "react-icons/io";
import Deck from "../../truco/domain/model/Deck";
import User, { UserDirection } from "../../truco/domain/model/User";
import { useRouter } from "next/router";

interface IBoardRequest {
    deck: Deck;
    users: User[];
    loading: boolean;
    stop: any;
    status: string[];
}

export default function Board({ deck, users, loading, stop, status }: IBoardRequest) {
    const ref = useRef<HTMLDivElement>(null);
    const reff = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [heightGrid, setHeightGrid] = useState(0);
    const cardWidth = heightGrid / 3.1;
    const router = useRouter();

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
        if (reff.current) {
            setHeightGrid(reff.current.clientHeight)
        }
    }, [])

    return (
        <>
            <Grid
                h={'100%'}
                w={(height) ? height : '60%'}
                ref={ref}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={0}
                bg={'radial-gradient(circle, rgba(70,196,21,1) 10%, rgba(13,112,34,1) 100%)'}
                rounded={500}
                border={'10px solid'}
                borderColor={'whiteAlpha.500'}
            // transform="rotate(90deg)"
            // transition={'transform .8s ease-in-out'}
            >
                <Text position={'absolute'} top={4} left={4} onClick={() => { stop(); router.push('/') }} cursor={'pointer'}
                    display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    {!loading && <Icon as={IoMdArrowRoundBack} w={6} h={6}></Icon>}
                    {loading && <><Spinner /> <Text ml={3}>Carregando partida!</Text></>}
                </Text>
                <GridItem >
                </GridItem>
                <GridItem position={'relative'}>
                    {/* <Avatar user={users[2]} />
                    <UserCards user={users[2]} cardWidth={cardWidth} rotate="rotate(180deg)"></UserCards> */}
                    <Avatar user={users[1]} direction={UserDirection.TOP} />
                    {status[1] &&
                        <Box position={'absolute'}
                            top={4}
                            left={'80%'}
                            transform='translate(-50%, -50%)'
                            fontWeight={'bold'}
                            fontSize={"2xl"}>
                            {status[1]}
                        </Box>}

                    {!loading && <UserCards deck={deck} user={users[1]} cardWidth={cardWidth} rotate="rotate(180deg)" show={true}></UserCards>}
                </GridItem>
                <GridItem >
                </GridItem>
                <GridItem position={'relative'}>
                    {/* <Avatar user={users[3]} />
                    <UserCards user={users[3]} cardWidth={cardWidth} rotate="rotate(90deg)"></UserCards> */}
                </GridItem>
                <GridItem
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                >
                    <DeckComponent deck={deck} cardWidth={cardWidth} loading={loading}></DeckComponent>

                    {/* Cartas viradas / monte */}
                    {deck.discard && deck.discard.map(item =>
                        <Box key={item.getMask()} transform={`rotate(${item.rotate}deg)`} position='absolute'>
                            <img src={`/cards/${item.getImage()}`} height={'100%'} width={cardWidth}></img>
                        </Box>
                    )}
                    {/* <Box transform={'rotate(80deg)'} position='absolute'>
                        <img src={'/cards/2_moles.png'} height={'100%'} width={cardWidth + 20}></img>
                    </Box>
                    <Box transform={'rotate(105deg)'} position='absolute'>
                        <img src={'/cards/3_paus.png'} height={'100%'} width={cardWidth + 20}></img>
                    </Box> */}

                </GridItem>
                <GridItem position={'relative'}>
                    {/* <Avatar user={users[1]} />
                    <UserCards user={users[1]} cardWidth={cardWidth} rotate="rotate(270deg)"></UserCards> */}
                </GridItem>
                <GridItem >
                </GridItem>
                <GridItem ref={reff} position='relative'>
                    <Avatar user={users[0]} direction={UserDirection.BOTTOM} />
                    {status[0] &&
                        <Box position={'absolute'}
                            bottom={2}
                            left={'80%'}
                            transform='translate(-50%, -0%)'
                            fontWeight={'bold'}
                            fontSize={"2xl"}>
                            {status[0]}
                        </Box>}

                    {!loading && <UserCards deck={deck} user={users[0]} cardWidth={cardWidth} show={true}></UserCards>}
                </GridItem>
                <GridItem >
                </GridItem>
            </Grid>
        </>
    )

}