import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";

interface IGameStatusRequest {
    matchScore: number;
    information: string;
}

export default function GameStatus({matchScore, information}: IGameStatusRequest) {
    const formBackground = Constants.getFormBackground();

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Truco!!!</Heading>
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>Pontos da Partida: </Text>
                    <Text mr={2}>{matchScore}</Text>
                </Flex>
            </Text>

            {information && 
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>{information}</Text>
                </Flex>
            </Text>}
            
            {/* <Button variant='solid' w={'full'}>Aumentar (Truco!)</Button>
            <Button leftIcon={<Icon h={5} w={5} as={BiCheckCircle}></Icon>} variant='solid' w={'full'}>Aceitar</Button>
            <Button leftIcon={<Icon as={ImCancelCircle}></Icon>} variant='solid' w={'full'}>Correr</Button> */}
        </VStack>
    )
}