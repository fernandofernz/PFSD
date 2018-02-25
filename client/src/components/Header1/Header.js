import React from 'react';
import {Parallax} from 'react-materialize';
//import PetCard from '../PetCard/PetCard';
import SelectorCard from '../SelectorCard/SelectorCard';
import ImageCarousel from '../ImageCarousel/ImageCarousel';



const Header = () => (
	<div>
	<Parallax imageSrc="https://lh6.ggpht.com/iLVkYpE28-TpXw95WNSTNdFkmjvq2VvwxkEK4W-Q7uCXCf2f2uLxWSmEMHq4mmmDe5Q=h900"/>
	<div className="section white">
		<div className="row container">
			<h2 className="header">Parallax</h2>
			<ImageCarousel/>
			<SelectorCard/>
			
			<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
		</div>
	</div>
	<Parallax id='parallax2' imageSrc="https://www.hd-wallpapersdownload.com/script/bulk-upload/cute-lion-pictures-wallpaper.jpg"/>
</div>
);

export default Header;