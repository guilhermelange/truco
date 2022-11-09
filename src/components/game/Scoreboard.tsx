import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";
import User from "../../truco/domain/model/User";

interface IScoreboardRequest {
    score: number[];
    users: User[];
}

export default function Scoreboard({ score, users }: IScoreboardRequest) {
    const formBackground = Constants.getFormBackground();

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Placar</Heading>
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>{users[1]?.name ?? 'Eles'}: </Text>
                    <Text mr={2}>{score[1]}</Text>
                </Flex>
            </Text>
            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>{users[0]?.name ?? 'Nós'}: </Text>
                    <Text mr={2}>{score[0]}</Text>
                </Flex>
            </Text>
        </VStack>
    )
}