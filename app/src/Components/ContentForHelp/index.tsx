import {
  Box,
  Card,
  Container,
  Flex,
  Square,
  Text,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import ChooseLang from '../ChooseLang';
import { useTranslation } from "react-i18next";

export const Help = () => {
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
                { t('help.title') }
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
                     { t('help.guide') }
                  </Text>
                  <Text pt="2" fontSize="sm">
                  { t('help.text_guide') } :
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                     { t('help.etape_1') } :
                  </Text>
                  <Text pt="2" fontSize="sm">
                    1.  { t('help.text_1') }
                  </Text>
                </Box>
                {/* <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                    étape 2:
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Reactjs et electronjs
                  </Text>
                </Box> */}
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                     { t('help.etape_2') } :
                  </Text>
                  <Text pt="2" fontSize="sm">
                    2.  { t('help.text_2') }
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    textTransform="uppercase"
                    style={{ fontWeight: 'bold' }}
                  >
                     { t('help.etape_3') } :
                  </Text>
                  <Text pt="2" fontSize="sm">
                    3.  { t('help.text_3') }
                  </Text>
                </Box>
                <Box>
                  <Text size="xs"  style={{ fontWeight: 'bold' }} textTransform="uppercase">
                  { t('help.etape_4') } :
                  </Text>
                  <Text pt="2" fontSize="sm">
                    4.  { t('help.text_4') }
                  </Text>
                </Box>
                <Box>
                  <Text size="xs"  style={{ fontWeight: 'bold' }}textTransform="uppercase">
                  { t('help.etape_5') } :
                  </Text>
                  <Text pt="2" fontSize="sm" >
                    5.  { t('help.text_5') }
                  </Text>
                </Box>
                <Box>
                  <Text size="xs"  style={{ fontWeight: 'bold' }}textTransform="uppercase">
                  { t('help.etape_6') } :
                  </Text>
                  <Text pt="2" fontSize="sm" >
                    6.  { t('help.text_6') }
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
