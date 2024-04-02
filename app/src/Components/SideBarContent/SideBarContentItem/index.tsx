import { Box } from '@chakra-ui/react';
import { SideBarContentItemType } from '../../../configs/types';
import { useSettingsContext } from '../../../Hooks/useSettings';
import { styled } from '@mui/styles';
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
        {label}
      </Box>
    </AnimatedBox>
  );
};
