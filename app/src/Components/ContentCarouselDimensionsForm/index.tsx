import {
  Box,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const DimensionsForm = () => {
  return (
    <Box display={'flex'} className={'fade-out'} flexDirection={'column'} width={'100%'}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={-10}>
          <FormLabel>Nom de la pièce</FormLabel>
          <Input type={'text'} placeholder="Entrer le nom de la pièce" />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={-10}>
          <FormLabel>Hauteur sous plafond</FormLabel>
          <Input type={'number'} placeholder="En mètre" />
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
          <Input type={'number'} placeholder="En mètre" />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Largeur</FormLabel>
          <Input type={'number'} placeholder="En mètre" />
        </FormControl>
      </Box>
    </Box>
  )
}

export default DimensionsForm ;
