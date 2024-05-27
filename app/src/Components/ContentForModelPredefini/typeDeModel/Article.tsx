import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { CardImg } from '../../../Layouts/modelpredefinisImg/modelImg';
import './style.css';

interface ArticleProps {
    data: CardImg;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
    const { image, title, description, subtitle } = data;
    return (
        <figure className="snip1584">
            <img src={image} alt={title} />
            <figcaption>
                <Text className='h5' fontSize={{base: '40%',md: '60%',xl: '85%',}}  width={{base: '100%',md: '90%',xl: '85%',}}>{description}</Text>
                {/* <h5>{subtitle}</h5> */}
                <Button colorScheme='teal' size='sm' borderRadius={15}>
                    calculer
                </Button>
            </figcaption>
        </figure>
    );
};

export default Article;
