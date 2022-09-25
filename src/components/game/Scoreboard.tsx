import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";

interface IScoreboardRequest {
    score: number[];
}

export default function Scoreboard({ score }: IScoreboardRequest) {
    const formBackground = Constants.getFormBackground();

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Placar</Heading>
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>Nós: </Text>
                    <Text mr={2}>{score[0]}</Text>
                </Flex>
            </Text>
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>Eles: </Text>
                    <Text mr={2}>{score[1]}</Text>
                </Flex>
            </Text>
        </VStack>
    )
}