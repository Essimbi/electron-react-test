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
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
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
              { t('about.title') }
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
                   { t('about.version') }
                  </Text>
                  <Text pt="2" fontSize="sm">
                  { t('about.objectif') }
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    { t('about.type') }
                  </Text>
                  <Text pt="2" fontSize="sm">
                  { t('about.type_text') }
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    { t('about.construction') }
                  </Text>
                  <Text pt="2" fontSize="sm">
                  { t('about.construction_text') }
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    { t('about.systeme') }
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
                    F. Wanga, C. T. Hapi &  <br /> L. J. D. Essimbi
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
