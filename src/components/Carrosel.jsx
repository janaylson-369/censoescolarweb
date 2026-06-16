import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

export const Carrosel = ( props ) => {
    
    let itensCarrossel = props.itensCarrossel;
    
return (
    <Carousel>
    {itensCarrossel.map(({ legenda, imgSrc, titulo, descricao }, ) => {
        return (
        <Carousel.Item key={titulo}>
            <Image className="carousel-img" text={legenda} src={imgSrc} />
            <Carousel.Caption>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            </Carousel.Caption>
        </Carousel.Item>
        );
    })}
    </Carousel>
);
};
