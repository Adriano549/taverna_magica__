import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ProductCard from '../../../reutilizavel/productCard';
import Logo from '../../../../img/Logo.png';

import useCheckBoxHook from '../../../../hooks/useCheckBoxHook';

const slides = [
    { image: Logo, alt: 'Logo' },
];

export const Slides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    const { produtos } = useCheckBoxHook();
    const produtosSlide = produtos.filter((item)=> item.categoria === 'armas')

    return (
        <Container>
            <Slider {...settings}>
                <img src={Logo} alt={Logo}/>
                {produtosSlide.map((produto) => (
                    <ProductCard key={produto.id} product={produto}></ProductCard>
                ))}
            </Slider>
            
        </Container>
    );
};

const Container = styled.div`
    text-align:center;
    border: solid 5px black;
    border-radius: 2%;
    button:before {
    content: none;
    }
    li {
    display: none;
    }
    div {
    width: 100%;
    height: 100%;
    }
    img {
    width: 100%;
    height: 100%;
    }
    @media (max-width: 450px){
        width: 85%;
    }
`;

