import React from 'react';
import { Button, Carousel} from 'react-materialize';
import pet1 from "../img/bull21.jpg";
import pet2 from "../img/owl.png";
import pet3 from "../img/rhino1.jpg";
import pet4 from "../img/whitetiger2.jpg";
import pet5 from "../img/Mandrill.jpg";
import pet6 from "../img/Zebra.jpg";


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