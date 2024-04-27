import { Box, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useStepContext } from '../../Hooks/useStep';
import { useTranslation } from "react-i18next";

const _this = 'STEP-1';
const _subThis = 'STEP-1-0';

const DimensionsForm = () => {
  const { setActiveStep, steps, setStep } = useStepContext();
  const { t } = useTranslation();
  return (
    <Box
      display={'flex'}
      className={'fade-out'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Text fontSize="lg" ml={10} mt={-20}>
        {t('steper-2-1.titre')}
      </Text>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={10}>
          <FormLabel>{t('steper-2-1.nom')}</FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['nom_piece']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['nom_piece'] = e.target.value;
              setStep({ ...ancian });
            }}
            type={'text'}
            placeholder={t('steper-2-1.placeholder-nom')}
          />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>{t('steper-2-1.hateur')}</FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['hauteur_sous_plafond']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['hauteur_sous_plafond'] =
                e.target.value;
              setStep({ ...ancian });
            }}
            type={'number'}
            placeholder={t('steper-2-1.placeholder-metre')}
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
          <FormLabel>{t('steper-2-1.longueur')} </FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['longueur']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['longueur'] = e.target.value;
              setStep({ ...ancian });
            }}
            type={'number'}
            placeholder={t('steper-2-1.placeholder-metre')}
          />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>{t('steper-2-1.largeur')}</FormLabel>
          <Input
            value={steps[_this].payload[_subThis]['largeur']}
            onChange={(e) => {
              let ancian = steps;
              ancian[_this].payload[_subThis]['largeur'] = e.target.value;
              setStep({ ...ancian });
            }}
            type={'number'}
            placeholder={t('steper-2-1.placeholder-metre')}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default DimensionsForm;
