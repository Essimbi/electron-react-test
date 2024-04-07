import { Box } from '@chakra-ui/react';
import { data } from '../../Helper/data';
import { SideBarContentItem } from './SideBarContentItem';

export const SideBarContent = () => {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Box
        border={'1px solid white'}
        height={'15%'}
        mt={10}
        mb={20}
        width={'75%'}
      ></Box>
      <Box width={'90%'} height={'auto'}>
        {data.map(({ label, icon }) => (
          <SideBarContentItem key={label} label={label} icon={icon} />
        ))}
      </Box>
    </Box>
  );
};
