import React from 'react';
import { Button, Carousel} from 'react-materialize';
import pet1 from "../img1/bull21.jpg";
import pet2 from "../img1/owl.png";
import pet3 from "../img1/rhino1.jpg";
import pet4 from "../img1/whitetiger2.jpg";
import pet5 from "../img1/Mandrill.jpg";
import pet6 from "../img1/Zebra.jpg";


const ImageCarousel = () => (
    

<Carousel
// 	fixedItem={
   
//   }

	options={{ fullWidth: true }}
	images={[
		pet1,
		pet2,
		pet3,
		pet4,
        pet5,
        pet6
	]}
/>



 
);

export default ImageCarousel;