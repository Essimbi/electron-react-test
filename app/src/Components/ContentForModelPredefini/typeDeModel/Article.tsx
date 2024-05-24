import { Button } from '@chakra-ui/react';
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
                <h5 style={{ fontSize: '90%' }}>{description}</h5>
                {/* <h5>{subtitle}</h5> */}
                <Button colorScheme='teal' size='sm' borderRadius={15}>
                    calculer
                </Button>
            </figcaption>
        </figure>
    );
};

export default Article;
