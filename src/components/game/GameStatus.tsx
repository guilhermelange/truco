import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";
import Card from "../../truco/domain/model/Card";

interface IGameStatusRequest {
    matchScore: number;
    canStart: boolean;
    stop: any;
    start: any;
    matchId: string;
    joker: Card;
}

export default function GameStatus({ matchScore, canStart, stop, start, matchId, joker }: IGameStatusRequest) {
    const formBackground = Constants.getFormBackground();

    let jokerNum = 0;
    if (joker) {
        if (joker.number == 12) {
            jokerNum = 1
        } else if (joker.number == 7) {
            jokerNum = 10
        } else {
            jokerNum = joker.number + 1
        }
    }

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Truco!!!</Heading>

            {matchId &&
                <Text w={'100%'} mt={0}>
                    <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                        <Text>Partida: </Text>
                        <Text mr={2}>{matchId}</Text>
                    </Flex>
                </Text>}
            
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>Pontos da Partida: </Text>
                    <Text mr={2}>{matchScore}</Text>
                </Flex>
            </Text>

            {joker.number &&
                <Text w={'100%'} mt={0}>
                    <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                        <Text>Manilha: </Text>
                        <Text mr={2}>{jokerNum}</Text>
                    </Flex>
                </Text>}

            {canStart &&
                <Button variant='solid' w={'full'} onClick={start}>Novo Game</Button>}
            {!canStart &&
                <Button variant='solid' w={'full'} onClick={stop}>Parar Game</Button>}

            {/* {information &&
                <Text w={'100%'} mt={0}>
                    <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                        <Text>{information}</Text>
                    </Flex>
                </Text>} */}

            {/* <Button variant='solid' w={'full'}>Aumentar (Truco!)</Button>
            <Button leftIcon={<Icon h={5} w={5} as={BiCheckCircle}></Icon>} variant='solid' w={'full'}>Aceitar</Button> */}
        </VStack>
    )
}