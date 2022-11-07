import { Box, Container, Grid, GridItem, Skeleton, Text, VStack } from '@chakra-ui/react'
import Board from '../components/game/Board';
import Joker from '../components/game/Joker';
import Scoreboard from '../components/game/Scoreboard';
import GameStatus from '../components/game/GameStatus';
import Constants from '../styles/Constants';
import { IoMdArrowRoundBack } from "react-icons/io"
import { useRouter } from 'next/router';
import useViewModel from '../truco/presentation/game/GameViewModel'
import Information from '../components/game/Information';

// let loaded = false;
export default function Home() {
  const router = useRouter();
  const formBackground = Constants.getFormBackground();

  const {
    startMatch,
    stopMatch,
    deck,
    score,
    users,
    loading,
    matchScore,
    information,
    canStart,
    matchId,
    truco
  } = useViewModel();


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
            <Board deck={deck.current} users={users.current} loading={loading} stop={stopMatch} truco={truco.current}/>
          </GridItem>
          <GridItem area={'information'} >
            <VStack alignItems={'start'}>
              <Scoreboard score={score.current} users={users.current} />
              <Joker joker={deck.current.joker} loading={loading} />
              <GameStatus
                matchScore={matchScore.current}
                canStart={canStart.current}
                stop={stopMatch}
                start={startMatch}
                matchId={matchId.current}></GameStatus>
                <Information information={information.current}></Information>
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
            <Text onClick={() => { router.push('/') }} display={'inline'}><IoMdArrowRoundBack></IoMdArrowRoundBack></Text>
          </Text>
        </Box>
      </Container>
    )
  }
}
