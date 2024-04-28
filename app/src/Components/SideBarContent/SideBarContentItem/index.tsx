import { Box } from '@chakra-ui/react';
import { styled } from '@mui/styles';
import { SideBarContentItemType } from '../../../configs/types';
import { useSettingsContext } from '../../../Hooks/useSettings';
import {
  BarChartIcon,
  FolderCopyIcon,
  HelpIcon,
  HomeIcon,
  InfoIcon,
} from '../../../img/Icons/iconItems';
import './index.css';
import { useStepContext } from '../../../Hooks/useStep';
import { useTranslation } from "react-i18next";

export const SideBarContentItem = ({
  label,
  icon,
  step,
}: SideBarContentItemType) => {
  const { settings } = useSettingsContext();
  const { activeStep, setActiveStep } = useStepContext();
  const { t } = useTranslation();
  const AnimatedBox = styled(Box)({
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: settings.globalColors.pureWhite.main,
      borderRadius: 5,
    },
  });

  const renderIcon = () => {
    switch (icon) {
      case 'home':
        return <HomeIcon />;
      case 'FolderCopyIcon':
        return <FolderCopyIcon />;
      case 'BarChartIcon':
        return <BarChartIcon />;
      case 'InfoIcon':
        return <InfoIcon />;
      case 'help':
        return <HelpIcon />;
      default:
        return null;
    }
  };

  const isActive = () =>
    (step === 0 &&
      (activeStep === 'STEP-0' ||
        activeStep === 'STEP-1' ||
        activeStep === 'STEP-2')) ||
    (step === 1 && activeStep === 'STEP-3') ||
    (step === 2 && activeStep === 'STEP-4') ||
    (step === 3 && activeStep === 'STEP-5') ||
    (step === 4 && activeStep === 'STEP-6');
    
  return (
    <AnimatedBox borderRadius={5}>
      <Box
        onClick={() => {
          if (step === 1) {
            setActiveStep('STEP-3');
          } else if (step === 2) {
            setActiveStep('STEP-4');
          } else if (step === 0) {
            setActiveStep('STEP-0');
          } else if (step === 3) {
            setActiveStep('STEP-5');
          } else {
            setActiveStep('STEP-6');
          }
        }}
        className="item"
        sx={{
          backgroundColor: isActive()
            ? settings.globalColors.pureWhite.main
            : null,
        }}
        width={'100%'}
        color={
          isActive()
            ? settings.globalColors.primary.main
            : settings.globalColors.pureWhite.main
        }
        mb={3}
        border={'1px solid white'}
        display={'flex'}
        borderRadius={5}
        flexDirection={'row'}
        alignItems={'center'}
        height={10}
        cursor={'pointer'}
        paddingLeft={5}
      >
        {renderIcon()}&nbsp;
        {t(`${label}`)}
      </Box>
    </AnimatedBox>
  );
};
