import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useSettingsContext } from '../../Hooks/useSettings';

export const DonneesPiecesForm = () => {
  const { settings } = useSettingsContext();
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={15}>
          <FormLabel>Matériaux du toit</FormLabel>
          <Select>
            <option value="Toles en aluminium">Toles en aluminium</option>
            <option value="Tuiles en micro béton">Tuiles en micro béton</option>
            <option value="Pailles">Pailles</option>
            <option value="Toitures en terrace">Toitures en terrace</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={15}>
          <FormLabel>Nom de la pièce</FormLabel>
          <Input type={'number'} placeholder="Entrer le nom de la pièce" />
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
          <FormLabel>Matériaux du sol </FormLabel>
          <Input type={'text'} placeholder="Menionner l'ouverture" />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={25}>
          <FormLabel>Hauteur</FormLabel>
          <Input type={'number'} placeholder="Entrer la hauteur" />
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
        <TableContainer width={'94%'}>
          <Table>
            <Thead>
              <Tr>
                <Th fontFamily={"roboto"}>Sol</Th>
                <Th fontFamily={"roboto"}>Nombre de pièces</Th>
                <Th fontFamily={"roboto"}>Actions</Th>
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
        </TableContainer>
      </Box>

      <Box mt={6}>
        <Container style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
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
