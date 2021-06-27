import React from "react";

import Slider from "react-slick";
import bgImg from "../../assets/data.png";


import {
    Container,
    Content,
    Div,
    Image,
    Title,
    SubTitle,
    Text
} from "./styles";

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
    };


    const images = [
        {
            id: "1",
            name: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
            url: bgImg
        },
        {
            id: "2",
            name: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
            url: bgImg
        },
        {
            id: "3",
            name: 'Marcenas mattis egestas',
            description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
            url: bgImg
        },

    ];


    return (

        <Container>
            <Content>
                <Slider {...settings}>
                    {images.map((image) => {
                        return (
                            <Div key={image.id}>
                                <Image src={image.url} alt={image.alt} />
                                <Text >
                                    <Title >{image.name}</Title>
                                    <SubTitle>{image.description}</SubTitle>
                                </Text>

                            </Div>
                        )

                    })}
                </Slider>
            </Content>

        </Container >



    );
};


export default Carousel;