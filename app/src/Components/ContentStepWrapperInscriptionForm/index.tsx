import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { useTranslation } from "react-i18next";

const _this = 'STEP-0';
export const InformForm = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();
  const { t } = useTranslation();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      className={'fade-out'}
      width={'100%'}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={10}>
          <FormLabel>{t('steper-1.materiaux-toit')}</FormLabel>
          <Select
            value={steps[_this].payload['materiaux_toit']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    materiaux_toit: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Toiture en tuiles romane 1 & 2" defaultChecked>{t('steper-1.section-materiaux-toit.val-1')}</option>
            <option value="Toiture en tôles d'aluminium">{t('steper-1.section-materiaux-toit.val-2')}</option>
            <option value="Toiture en dalle de beton">{t('steper-1.section-materiaux-toit.val-3')}</option>
            <option value="Toiture en paille">{t('steper-1.section-materiaux-toit.val-4')}</option>
            <option value="Dalle en Hourdis">{t('steper-1.section-materiaux-toit.val-5')}</option>
            <option value="Couche d'air intra-plafond">{t('steper-1.section-materiaux-toit.val-6')}</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>{t('steper-1.materiaux-mur')}</FormLabel>
          <Select
            value={steps[_this].payload['materiaux_mur']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    materiaux_mur: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Parpaing standard" defaultChecked>{t('steper-1.section-materiaux-mur.val-1')}</option>
            <option value="Briques de terre cuites avec vide">{t('steper-1.section-materiaux-mur.val-2')}</option>
            <option value="Briques de terre cuites pleines">{t('steper-1.section-materiaux-mur.val-3')}</option>
            <option value="Briques de terre compressées">{t('steper-1.section-materiaux-mur.val-4')}</option>
            <option value="Briques de terre stabilisées">{t('steper-1.section-materiaux-mur.val-5')}</option>
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
          <FormLabel>{t('steper-1.materiaux-sol')} </FormLabel>
          <Select
            value={steps[_this].payload['materiaux_sol']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    materiaux_sol: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Dalle de beton + carreaux" defaultChecked>{t('steper-1.section-materiaux-sol.val-1')}</option>
            <option value="Sol cimente simple">{t('steper-1.section-materiaux-sol.val-2')}</option>
            <option value="Sol en terre simple">{t('steper-1.section-materiaux-sol.val-3')}</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>{t('steper-1.nombre-piece')}</FormLabel>
          <Input
            type={'number'}
            value={steps[_this].payload['nombre_pieces']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    nombre_pieces: e.target.value,
                  },
                },
              })
            }
            placeholder={t('steper-1.placeholder')}
          />
        </FormControl>
      </Box>

      <Box
        mt={20}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={() => {
            setActiveStep('STEP-1');
            setStep({
              ...steps,
              'STEP-1': {
                ...steps['STEP-1'],
                activeSubstep: "STEP-1-0",
                payload: (() => {
                  let result: any = {};
                  for (
                    let index = 0;
                    index < parseInt(steps[_this].payload.nombre_pieces);
                    index++
                  ) {
                    result['STEP-1-' + index] = {};
                  }
                  return result;
                })(),
              },
            });
          }}
          _hover={{
            backgroundColor: settings.globalColors.primary.main,
            opacity: 0.5,
          }}
          backgroundColor={settings.globalColors.primary.main}
          size="lg"
          color={settings.globalColors.pureWhite.main}
          width={'50%'}
          height={'10'}
          rounded={'40'}
          fontWeight={400}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          background="linear-gradient(to right, #09AFAF, #09AFAF)"
        >
          {t('btn-suivant')}
        </Button>
      </Box>
      {/* {JSON.stringify(steps)} */}
    </Box>
  );
};
