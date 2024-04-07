import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';

export const InformForm = () => {
  const { settings  } = useSettingsContext();
  const { setActiveStep } = useStepContext();
  return (
    <Box display={'flex'} flexDirection={'column'} className={'fade-out'} width={'100%'}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={25}>
          <FormLabel>Matériau du toit</FormLabel>
          <Select>
            <option value="Dalle">Dalle</option>
            <option value="Contre plaquet">Contre plaquet</option>
            <option value="Faux plafond en platre">
              Faux plafond en platre
            </option>
            <option value="Bambou">Bambou</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={25}>
          <FormLabel>Matériaux du mur</FormLabel>
          <Select>
            <option value="Parpaing standard">Parpaing standard</option>
            <option value="Parpaing ordinaire">Parpaing ordinaire</option>
            <option value="Parpaing haute performance">
              Parpaing haute performance
            </option>
            <option value="Briques BTC bloc de pleins">
              Briques BTC bloc de pleins
            </option>
            <option value="Briques BTC bloc autocolants">
              Briques BTC bloc autocolants
            </option>
            <option value="Roches taillées">Roches taillées</option>
            <option value="Bois">Bois</option>
            <option value="Béton armé">Béton armé</option>
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
        <FormControl width={'45%'} mt={25}>
          <FormLabel>Matériaux du sol </FormLabel>
          <Select>
            <option value="Mortier">Mortier</option>
            <option value="Carreaux">Carreaux</option>
            <option value="Parquets en bois">Parquets en bois</option>
            <option value="Lamelles en roches">Lamelles en roches</option>
            <option value="Marbres">Marbres</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={25}>
          <FormLabel>Nombres de pièces</FormLabel>
          <Input type={'number'} placeholder="Entrer le nombre de pièces" />
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
        onClick={() => setActiveStep("STEP-1")}
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
          Suivant
        </Button>
      </Box>
    </Box>
  );
};
