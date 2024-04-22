import { Box } from '@chakra-ui/react';
import { styled } from '@mui/styles';
import { SideBarContentItemType } from '../../../configs/types';
import { useSettingsContext } from '../../../Hooks/useSettings';
import { BarChartIcon, FolderCopyIcon, HelpIcon, HomeIcon, InfoIcon } from '../../../img/Icons/iconItems';
import './index.css';
export const SideBarContentItem = ({ label, icon }: SideBarContentItemType) => {
  const { settings } = useSettingsContext();
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
  return (
    <AnimatedBox borderRadius={5}>
      <Box
        className="item"
        sx={{}}
        width={'100%'}
        color={settings.globalColors.pureWhite.main}
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
        {label}
      </Box>
    </AnimatedBox>
  );
};
