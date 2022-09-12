import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useRef, useState, useEffect } from 'react';
import Avatar from "../components/Avatar";
import User, { UserDirection, UserStatus } from "../truco/model/User";
import Deck from "../truco/model/Deck";
import UserCards from "./UserCards";
import DeckComponent from "./Deck";

interface IBoardRequest {
    deck: Deck
    users: User[]
}

export default function Board({deck, users}: IBoardRequest) {
    const ref = useRef<HTMLDivElement>(null);
    const reff = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [heightGrid, setHeightGrid] = useState(0);
    const cardWidth = heightGrid / 3.1;

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
                w={(height)}
                ref={ref}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={0}
                bg={'radial-gradient(circle, rgba(70,196,21,1) 10%, rgba(13,112,34,1) 100%)'}
                rounded={10}
                border={'10px solid'}
                borderColor={'whiteAlpha.500'}
            >
                <GridItem >
                </GridItem>
                <GridItem position={'relative'}>
                    <Avatar user={users[2]} />
                    <UserCards user={users[2]} cardWidth={cardWidth} rotate="rotate(180deg)"></UserCards>
                </GridItem>
                <GridItem >
                </GridItem>
                <GridItem position={'relative'}>
                    <Avatar user={users[3]} />
                    <UserCards user={users[3]} cardWidth={cardWidth} rotate="rotate(90deg)"></UserCards>
                </GridItem>
                <GridItem
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                >
                    <DeckComponent deck={deck} cardWidth={cardWidth}></DeckComponent>

                    {/* Cartas viradas / monte */}
                    {/* <Box transform={'rotate(80deg)'} position='absolute'>
                        <img src={'/cards/2_moles.png'} height={'100%'} width={cardWidth + 20}></img>
                    </Box>
                    <Box transform={'rotate(105deg)'} position='absolute'>
                        <img src={'/cards/3_paus.png'} height={'100%'} width={cardWidth + 20}></img>
                    </Box> */}
                    
                </GridItem>
                <GridItem position={'relative'}>
                    <Avatar user={users[1]} />
                    <UserCards user={users[1]} cardWidth={cardWidth} rotate="rotate(270deg)"></UserCards>
                </GridItem>
                <GridItem >
                </GridItem>
                <GridItem ref={reff} position='relative'>
                    <Avatar user={users[0]} />
                    <UserCards user={users[0]} cardWidth={cardWidth} show={true}></UserCards>
                </GridItem>
                <GridItem >
                </GridItem>
            </Grid>
        </>
    )

}