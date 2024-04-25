import { Box } from '@chakra-ui/react';
import { data } from '../../Helper/data';
import Logo from '../../img/logo.png';
import { SideBarContentItem } from './SideBarContentItem';
import { useStepContext } from '../../Hooks/useStep';

export const SideBarContent = () => {
  const { activeStep } = useStepContext();
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Box height={'20%'} mt={10} mb={20} width={'75%'}>
        {' '}
        <img height={'auto'} alt="" width={'auto'} src={Logo} />
      </Box>
      <Box width={'90%'} height={'auto'}>
        {data.map(({ label, icon }, i) => {
          return (
            <SideBarContentItem
              step={i}
              key={label}
              label={label}
              icon={icon}
            />
          );
        })}
      </Box>
    </Box>
  );
};
