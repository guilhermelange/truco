import { Box, Container, Flex, Grid, GridItem, Text, useColorModeValue, useFocusEffect, VStack } from '@chakra-ui/react'
import Board from '../components/game/Board';
import Joker from '../components/game/Joker';
import Scoreboard from '../components/game/Scoreboard';
import GameStatus from '../components/game/GameStatus';
import Constants from '../styles/Constants';
import GameController from '../truco/controller/GameController';
import IGameObserver from '../truco/controller/IGameObserver';
import { useLayoutEffect, useReducer, useEffect } from 'react';
import {IoMdArrowRoundBack} from "react-icons/io"
import { useRouter } from 'next/router';

class GameManager implements IGameObserver {
  reload(): void { };
}

const manager: GameManager = new GameManager();
const controller = new GameController();
controller.addObserver(manager);
controller.startMatch();

export default function Home() {
  const router = useRouter();
  const [, forceReload] = useReducer(x => x + 1, 0);
  const formBackground = Constants.getFormBackground();

  useLayoutEffect(() => {
    manager.reload = () => {
      forceReload();
    }
  }, [])

  try {
    return (
      <Container maxW={'8xl'} h={'100vh'} pt={4} pb={4}>
        <Grid templateAreas={`"board information"`}
          gridTemplateRows={'1fr'}
          gridTemplateColumns={'4fr 1fr'}
          gap={2}
          rounded={6}
          h={'100%'}
          w={'100%'}
          position={'relative'}
        >
          <GridItem position={'relative'}
            area={'board'}
            bg={formBackground}
            rounded={6}
            py={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}>
            {/* <Text position={'absolute'} top={0} left={0} onClick={() => {router.push('/')}}><IoMdArrowRoundBack></IoMdArrowRoundBack></Text> */}
            <Board deck={controller.deck} users={controller.users} />
          </GridItem>
          <GridItem area={'information'} >
            <VStack alignItems={'start'}>
              <Scoreboard score={controller.score} />
              <Joker joker={controller.deck.joker} />
              <GameStatus></GameStatus>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    )
  } catch (error) {
    return (
      <Container maxW={'8xl'} h={'100vh'} pt={4} pb={4}>
        <Box>
          <Text cursor={'pointer'}>Erro ao carregar conteúdo. Retorne à tela inicial:
            <Text onClick={() => {router.push('/')}} display={'inline'}><IoMdArrowRoundBack></IoMdArrowRoundBack></Text>
          </Text>
        </Box>
      </Container>
    )
  }
}
