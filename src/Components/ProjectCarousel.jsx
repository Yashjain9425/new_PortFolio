import { Carousel } from "react-bootstrap";
import { useState } from "react";

export default function ProjectCarousel({ images }) {
    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = (index) => {
        setLoadedImages(prev => ({
            ...prev,
            [index]: true
        }));
    };

    const handleImageError = (index) => {
        setLoadedImages(prev => ({
            ...prev,
            [index]: false
        }));
    };

    return (
        <Carousel fade interval={null}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className={`img-wrap ${!loadedImages[index] ? 'loading' : ''}`}>
                        <img
                            src={image}
                            alt={`Project ${index + 1}`}
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                            style={{
                                opacity: loadedImages[index] ? 1 : 0.8,
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                        />
                        {!loadedImages[index] && (
                            <div className="image-placeholder">
                                Loading...
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}