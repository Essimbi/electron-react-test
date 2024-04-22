import { Box, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { initialStepType } from '../../contexts/StepContext';

const _this = 'STEP-1';
const _subThis = 'STEP-1-0';

export const DonneesPiecesForm = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();

  return (
    <Box
      display={'flex'}
      className={'fade-out'}
      flexDirection={'column'}
      width={'100%'}
    >
      {JSON.stringify(steps)}
      <Text fontSize="lg" ml={10} mt={-20}>
        Matériaux de la pièce
      </Text>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={10}>
          <FormLabel>Matériaux du plafond</FormLabel>
          <Select
            value={steps[_this].payload[_subThis]['materiaux_plafond']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['materiaux_plafond'] =
                e.target.value;
              setStep({ ...ancian });
            }}
          >
            <option value="Toiture en tuiles romane 1 & 2">Toitures en tuiles romane 1 & 2</option>
            <option value="Toiture en tôles d'aluminium">Toiture en tôles d'aluminium</option>
            <option value="Toiture en dalle de beton">Toiture en dalle de béton</option>
            <option value="Toiture en paille">Toitures en paille</option>
            <option value="Dalle en Hourdis">Dalle en Hourdis</option>
            <option value="Couche d'air intra-plafond">Couche d'air intra-plafond</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Revêtement intérieur du mur</FormLabel>
          <Select
            value={steps[_this].payload[_subThis]['revetement_interieur_mur']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['revetement_interieur_mur'] =
                e.target.value;
              setStep({ ...ancian });
            }}
          >
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
          <Select
            value={steps[_this].payload[_subThis]['revetement_sol']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['revetement_sol'] =
                e.target.value;
              setStep({ ...ancian });
            }}
          >
            <option value="Dalle de beton + carreaux">Dalle de béton + carreaux</option>
            <option value="Sol cimente simple">Sol cimenté simple</option>
            <option value="Sol en terre simple">Sol en terre simple</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Revêtement extérieur du mur</FormLabel>
          <Select
            value={steps[_this].payload[_subThis]['revetement_exterieur_mur']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['revetement_exterieur_mur'] =
                e.target.value;
              setStep({ ...ancian });
            }}
          >
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
      ></Box>
    </Box>
  );
};
