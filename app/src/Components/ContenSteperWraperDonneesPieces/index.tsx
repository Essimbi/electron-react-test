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
    </Box>
  );
};
