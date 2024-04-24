import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useStepContext } from '../../Hooks/useStep';
import { useDataGraphContext } from '../../Hooks/useDataGraph' ;
import { useState } from 'react';

const _this = 'STEP-1';
const _subThis = 'STEP-1-0';

export type openStateType = {
  type_ouverture: String | any;
  materiau: String | any;
  hauteur: number | any;
  largeur: number | any;
};

const OuverturesForm = () => {
  const { setActiveStep, steps, setStep } = useStepContext();
  const [openTabLength, setOpenTablength] = useState<number>();
  var { dataGraph } = useDataGraphContext() ;
  const [openState, setOpenState] = useState<openStateType>({
    type_ouverture: '',
    materiau: '',
    hauteur: 0,
    largeur: 0,
  });
  return (
    <Box
      display={'flex'}
      className={'fade-out'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Text fontSize="lg" ml={10} mt={20}>
        Ouvertures de la pièce
      </Text>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={5}>
          <FormLabel>Type d'ouverture</FormLabel>
          <Select
            value={openState['type_ouverture']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, type_ouverture: e.target.value };
              });
            }}
            size={'sm'}
          >
            <option value="Porte" defaultChecked>Porte</option>
            <option value="Fenetre">Fenêtre</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={5}>
          <FormLabel>Matériau</FormLabel>
          <Select
            value={openState['materiau']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, materiau: e.target.value };
              });
            }}
            size={'sm'}
          >
            <option value="Verre">Verre (simple vitrage) </option>
            <option value="Verre doule vitrage">Verre (double vitrage) </option>
            <option value="Bois">Bois</option>
            <option value="Aluminium">Aluminium</option>
          </Select>
        </FormControl>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={5}>
          <FormLabel>Hauteur </FormLabel>
          <Input
            value={openState['hauteur']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, hauteur: e.target.value };
              });
            }}
            type={'number'}
            placeholder="En mètre"
            size={'sm'}
          />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={5}>
          <FormLabel>Largeur</FormLabel>
          <Input
            value={openState['largeur']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, largeur: e.target.value };
              });
            }}
            type={'number'}
            placeholder="En mètre"
            size={'sm'}
          />
        </FormControl>
      </Box>
      <Box
        mt={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button
          colorScheme="teal"
          variant="outline"
          size={'sm'}
          ml={'auto'}
          mr={10}
          onClick={() => {
            let concernedTab = [];
            Object.keys(steps[_this].payload[_subThis]).forEach((v) => {
              if (v.indexOf('ouverture-') !== -1) {
                console.log('here -', v);
                concernedTab.push(v);
              }
            });
            let length = concernedTab.length + 1;
            setStep({
              ...steps,
              [_this]: {
                ...steps[_this],
                payload: {
                  ...steps[_this].payload,
                  [_subThis]: {
                    ...steps[_this].payload[_subThis],
                    ['ouverture-' + length]: openState,
                  },
                },
              },
            });
            setOpenState({
              type_ouverture: '',
              materiau: '',
              hauteur: 0,
              largeur: 0,
            });
          }}
        >
          Ajouter
        </Button>
      </Box>
      {JSON.stringify(steps[_this].payload)}
      {JSON.stringify(dataGraph)}
      <Box
        mt={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TableContainer width={'90%'}>
          <Table variant="simple" size={'sm'}>
            <TableCaption>Les ouvertures de la pièce</TableCaption>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Matériau</Th>
                <Th>Hauteur</Th>
                <Th>Largeur</Th>
              </Tr>
              {Object.keys(steps[_this].payload[_subThis]).map(
                (key) =>
                  key.indexOf('ouverture-') !== -1 && (
                    <Tr key={key}>
                      <Td>
                        {steps[_this].payload[_subThis][key].type_ouverture}
                      </Td>
                      <Td>{steps[_this].payload[_subThis][key].materiau}</Td>
                      <Td>{steps[_this].payload[_subThis][key].hauteur}</Td>
                      <Td>{steps[_this].payload[_subThis][key].largeur}</Td>
                    </Tr>
                  )
              )}
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default OuverturesForm;
