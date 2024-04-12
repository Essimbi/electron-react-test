import {
  Box,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
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
        <FormControl width={'45%'} mt={-10}>
          <FormLabel>Matériaux du plafond</FormLabel>
          <Select>
            <option value="Toles en aluminium">Toles en aluminium</option>
            <option value="Tuiles en micro béton">Tuiles en micro béton</option>
            <option value="Pailles">Pailles</option>
            <option value="Toitures en terrace">Toitures en terrace</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={-10}>
          <FormLabel>Revêtement intérieur du mur</FormLabel>
          <Select>
            <option value="Peinture blanche">Peinture blanche</option>
            <option value="Peinture claire">Peinture claire</option>
            <option value="Peinture foncée">Peinture foncée</option>
            <option value="Peinture mate">Peinture mate</option>
            <option value="Peinture en aluminium">Peinture en aluminium</option>
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
        <FormControl width={'45%'} mt={10}>
          <FormLabel>Revêtement du sol </FormLabel>
          <Select>
            <option value="Mortier">Mortier</option>
            <option value="Carreaux">Carreaux</option>
            <option value="Parquets en bois">Parquets en bois</option>
            <option value="Lamelles en roches">Lamelles en roches</option>
            <option value="Marbres">Marbres</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Revêtement extérieur du mur</FormLabel>
          <Select>
            <option value="Peinture blanche">Peinture blanche</option>
            <option value="Peinture claire">Peinture claire</option>
            <option value="Peinture foncée">Peinture foncée</option>
            <option value="Peinture mate">Peinture mate</option>
            <option value="Peinture en aluminium">Peinture en aluminium</option>
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
      </Box>
    </Box>
  );
};
