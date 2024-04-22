import { Box, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useStepContext } from '../../Hooks/useStep';

const _this = 'STEP-1';
const _subThis = 'STEP-1-0';

const DimensionsForm = () => {
  const { setActiveStep, steps, setStep } = useStepContext();
  return (
    <Box
      display={'flex'}
      className={'fade-out'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Text fontSize="lg" ml={10} mt={-20}>
        Dimensions de la pièce
      </Text>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={10}>
          <FormLabel>Nom de la pièce</FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['nom_piece']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['nom_piece'] = e.target.value;
              setStep({ ...ancian });
            }}
            type={'text'}
            placeholder="Entrer le nom de la pièce"
          />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Hauteur sous plafond</FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['hauteur_sous_plafond']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['hauteur_sous_plafond'] =
                e.target.value;
              setStep({ ...ancian });
            }}
            type={'number'}
            placeholder="En mètre"
          />
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
          <FormLabel>Longueur </FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['longueur']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['longueur'] = e.target.value;
              setStep({ ...ancian });
            }}
            type={'number'}
            placeholder="En mètre"
          />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Largeur</FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['largeur']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['largeur'] = e.target.value;
              setStep({ ...ancian });
            }}
            type={'number'}
            placeholder="En mètre"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default DimensionsForm;
