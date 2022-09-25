import { Container, Grid, GridItem, useColorModeValue, VStack } from '@chakra-ui/react'
import Board from '../components/Board';
import Joker from '../components/Joker';
import Scoreboard from '../components/Scoreboard';
import GameStatus from '../components/GameStatus';
import Constants from '../styles/Constants';
import GameController from '../truco/controller/GameController';
import IGameObserver from '../truco/controller/IGameObserver';
import { useLayoutEffect, useReducer, useContext } from 'react';

class GameManager implements IGameObserver {
  reload(): void {};
}

const manager: GameManager = new GameManager();
const controller = new GameController();
controller.addObserver(manager);
controller.startMatch();

export default function Home() {
  const [, forceReload] = useReducer(x => x + 1, 0);
  const formBackground = Constants.getFormBackground();

  useLayoutEffect(() => {
    manager.reload = () => {
      forceReload();
    }
  }, [])

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
          <Board deck={controller.deck} users={controller.users}/>
        </GridItem>
        <GridItem area={'information'} >
          <VStack alignItems={'start'}>
            <Scoreboard score={controller.score}/>
            <Joker joker={controller.deck.joker}/>
            <GameStatus></GameStatus>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  )
}
