import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { DonneesPiecesForm } from '../../Components/ContenSteperWraperDonneesPieces';
import DimensionsForm from '../../Components/ContentCarouselDimensionsForm';
import OuverturesForm from '../../Components/ContentCarouselOuverturesForm';
import { CategoryValueType } from '../../configs/types';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { useTranslation } from "react-i18next";

export const DonneesPiecesCategoryWrapper = () => {
  const { settings } = useSettingsContext();
  const [selectedIndex, setSelectedIndex] = useState<CategoryValueType>(1);

  const { setActiveStep } = useStepContext();
  const { t } = useTranslation();

  const renderCategory = (): any => {
    let result: any;
    /**
     *  each component here must have the className={'fade-out'}
     */
    switch (selectedIndex) {
      case 1:
        result = <DonneesPiecesForm />;
        break;
      case 2:
        result = <DimensionsForm />;
        break;
      case 3:
        result = <OuverturesForm />;
        break;
      // case 4:
      //   result = 'sub step 4';
      //   break;
      default:
        break;
    }
    return result;
  };

  return (
    <Box width={'100%'} height={'100%'}>
      <Box
        height={'70%'}
        width={'100%'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        overflowY={'scroll'}
      >
        {renderCategory()}
      </Box>
      <Box
        height={'5%'}
        width={'100%'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          width={'10%'}
          height={'100%'}
          display={'flex'}
          alignItems={'center'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          position={'relative'}
        >
          <Box
            onClick={() => setSelectedIndex(1)}
            cursor={'pointer'}
            height={selectedIndex === 1 ? 2.5 : 2}
            width={selectedIndex === 1 ? 2.5 : 2}
            style={{
              transition: 'width 0.2s, height 0.2s',
            }}
            borderRadius={'100%'}
            background={
              selectedIndex === 1
                ? 'linear-gradient(to right, #09AFAF, #09AFAF)'
                : settings.globalColors.lowGray.main
            }
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
          ></Box>
          <Box
            style={{
              transition: 'width 0.2s, height 0.2s',
            }}
            onClick={() => setSelectedIndex(2)}
            cursor={'pointer'}
            height={selectedIndex === 2 ? 2.5 : 2}
            width={selectedIndex === 2 ? 2.5 : 2}
            borderRadius={'100%'}
            background={
              selectedIndex === 2
                ? 'linear-gradient(to right, #09AFAF, #09AFAF)'
                : settings.globalColors.lowGray.main
            }
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
          ></Box>
          <Box
            style={{
              transition: 'width 0.2s, height 0.2s',
            }}
            onClick={() => setSelectedIndex(3)}
            cursor={'pointer'}
            height={selectedIndex === 3 ? 2.5 : 2}
            width={selectedIndex === 3 ? 2.5 : 2}
            borderRadius={'100%'}
            background={
              selectedIndex === 3
                ? 'linear-gradient(to right, #09AFAF, #09AFAF)'
                : settings.globalColors.lowGray.main
            }
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
          ></Box>
          {/* <Box
            style={{
              transition: 'width 0.2s, height 0.2s',
            }}
            onClick={() => setSelectedIndex(4)}
            cursor={'pointer'}
            height={selectedIndex === 4 ? 2.5 : 2}
            width={selectedIndex === 4 ? 2.5 : 2}
            borderRadius={'100%'}
            background={
              selectedIndex === 4
                ? 'linear-gradient(to right, #09AFAF, #09AFAF)'
                : settings.globalColors.lowGray.main
            }
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
          ></Box> */}
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'25%'}
        width={'100%'}
      >
        <Box
          width={'100%'}
          mt={6}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Button
            onClick={() => null}
            _hover={{
              backgroundColor: settings.globalColors.pureWhite.main,
              opacity: 0.5,
            }}
            color={settings.globalColors.primary.main}
            backgroundColor={'white'}
            border={'1px solid teal'}
            width={'30%'}
            height={'10'}
            rounded={'40'}
            fontWeight={400}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            {t('btn-precedent')}
          </Button>
          <Button
            onClick={() => setActiveStep('STEP-2')}
            _hover={{
              backgroundColor: settings.globalColors.primary.main,
              opacity: 0.5,
            }}
            color={settings.globalColors.pureWhite.main}
            backgroundColor={settings.globalColors.primary.main}
            background={
              selectedIndex === 3
                ? 'linear-gradient(to right, #09AFAF, #09AFAF)'
                : 'linear-gradient(to right, #afc4c4, #afc4c4)'
            }
            width={'30%'}
            height={'10'}
            rounded={'40'}
            ml={4}
            fontWeight={400}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            {t('btn-suivant')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
