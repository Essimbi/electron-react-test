import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';

export const DonneesPiecesForm = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep } = useStepContext();

  return (
    <Box display={'flex'} className={'fade-out'} flexDirection={'column'} width={'100%'}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={15}>
          <FormLabel>Matériau du plafond</FormLabel>
          <Select>
            <option value="Toles en aluminium">Toles en aluminium</option>
            <option value="Tuiles en micro béton">Tuiles en micro béton</option>
            <option value="Pailles">Pailles</option>
            <option value="Toitures en terrace">Toitures en terrace</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={15}>
          <FormLabel>Type de pièce</FormLabel>
          <Input type={'number'} placeholder="Entrer le Type de pièce" />
        </FormControl>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={25}>
          <FormLabel>Revêtement du sol</FormLabel>
          <Input type={'text'} placeholder="Revêtement intérieur du mur" />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={25}>
          <FormLabel>Hauteur sous plafond</FormLabel>
          <Input type={'number'} placeholder="Entrer la Hauteur sous plafond" />
        </FormControl>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={25}>
          <FormLabel>Longueur </FormLabel>
          <Input type={'number'} placeholder="Entrer la longueur" />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={25}>
          <FormLabel>Largeur</FormLabel>
          <Input type={'number'} placeholder="Entrer la largeur" />
        </FormControl>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
        mt={25}
      >
        {/* <TableContainer width={'94%'}>
          <Table>
            <Thead>
              <Tr>
                <Th fontFamily={'roboto'}>Sol</Th>
                <Th fontFamily={'roboto'}>Nombre de pièces</Th>
                <Th fontFamily={'roboto'}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Input type={'text'} size={'sm'} />
                </Td>
                <Td>
                  <Input type={'number'} size={'sm'} />
                </Td>
                <Td>
                  <Button size="sm">
                    <DeleteIcon />
                  </Button>
                  <Button size="sm" ml={2}>
                    <EditIcon />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer> */}
      </Box>

      <Box mt={6}>
        <Container style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            onClick={() => setActiveStep('STEP-0')}
            _hover={{
              backgroundColor: settings.globalColors.pureWhite.main,
              opacity: 0.5,
            }}
            color={settings.globalColors.primary.main}
            backgroundColor={'white'}
            border={'1px solid teal'}
            width={'80%'}
            height={'10'}
            rounded={'40'}
            fontWeight={400}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            Précédent
          </Button>
          <Button
            onClick={() => setActiveStep('STEP-2')}
            _hover={{
              backgroundColor: settings.globalColors.primary.main,
              opacity: 0.5,
            }}
            color={settings.globalColors.pureWhite.main}
            backgroundColor={settings.globalColors.primary.main}
            background="linear-gradient(to right, #09AFAF, #09AFAF)"
            width={'80%'}
            height={'10'}
            rounded={'40'}
            ml={4}
            fontWeight={400}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            Suivant
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
