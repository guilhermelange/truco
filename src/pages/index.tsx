import { AvatarBadge, Container, Grid, GridItem, useColorModeValue, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Board from '../components/Board';
import Joker from '../components/Joker';
import Scoreboard from '../components/Scoreboard';
import Avatar from '../components/Avatar';
import { AvatarDirection, AvatarStatus } from '../truco/model/Avatar';
import GameStatus from '../components/GameStatus';

const Home: NextPage = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Container maxW={'8xl'} h={'100vh'} pt={4} pb={4}>
      <Grid templateAreas={`"board machine"
                                    "board command"`}
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
          // p={20}
          py={2} 
          display={'flex'} 
          alignItems={'center'} 
          justifyContent={'center'}>
          <Board></Board>
        </GridItem>
        <GridItem area={'machine'} >
          <VStack alignItems={'start'}>
            <Scoreboard></Scoreboard>
            <Joker></Joker>
            <GameStatus></GameStatus>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Home
