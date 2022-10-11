import { Carousel } from "./featuedpost.style";

const FeatuedPost = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <Carousel className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.sastodeal.com/media/weltpixel/owlcarouselslider/images/m/i/microsoftteams-image_-_2022-09-12t233730.722.png" className="w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://icms-image.slatic.net/images/ims-web/59b0afcb-c1fa-498a-9e95-d964376f4f6a.jpg" className="w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61DUO0NqyyL._SX3000_.jpg" className="w-100" alt="..."/>
                </div>
            </Carousel>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default FeatuedPost;