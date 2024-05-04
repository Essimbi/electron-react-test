import {
  Box,
  Card,
  Container,
  Text,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import ChooseLang from '../ChooseLang';

export const About = () => {
  return (
    <Box padding={5}>
      <Card
        height={{
          base: '610px', // 0-48em
          md: '605px', // 48em-80em,
          xl: '685px', // 80em+
        }}
        width={{
          base: '100%', // 0-30em
          md: '100%', // 30em-48em
          xl: '100%', // 48em-62em
        }}
        style={{ overflowX: 'scroll', overflowY: 'scroll' }}
      >
        <ChooseLang />
        <Container maxW="2xl" centerContent>
          <Card>
            <CardHeader>
              <Text fontSize="3xl" style={{ fontWeight: 'bold' }}>
                A propos de HTSLM
              </Text>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    Version de l’application HTSLM 2.0
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Objectif de l’application : Détermination de la température
                    intérieure dans une pièce d’un bâtiment construit au
                    Cameroun à base de matériaux locaux produits par la Mission
                    de Promotion des Matériaux Locaux du Cameroun (MIPROMALO)
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    Type de logiciel:
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Offline & propriétaire, Licence octroyée par la MIPROMALO
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    Informations sur la construction:
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Reactjs et electronjs
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    Système d’exploitation supporté :
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Windows
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    Auteurs :
                  </Text>
                  <Text pt="2" fontSize="sm">
                    L. P. N. Tchawa (tchawalynda@yahoo.fr), <br /> L. M. Mandeng
                    (mandengl@yahoo.fr),
                    <br /> J. D. T. Tchameu, <br />
                    R. T. Menkem, F. K. Kom, J. L. Ntamag, J. Pondi, <br /> J .
                    F. Wanga & C. T. Hapi
                  </Text>
                </Box>
                <Box>
                  <Text size="xs" textTransform="uppercase"></Text>
                  <Text pt="2" fontSize="sm" style={{ fontWeight: 'bold' }}>
                    ©-2024 / www.mipromalo.cm (+237 691142552 / +237 677603462 /
                    +237 222223720)
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </Card>
    </Box>
  );
};
