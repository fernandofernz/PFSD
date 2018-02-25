import React from 'react';
import {Card, CardTitle} from 'react-materialize';

const PetCard = () => (

    <Card header={<CardTitle reveal image={"https://images-na.ssl-images-amazon.com/images/G/01/img17/pet-products/vertical-store/1025139_us_pets_sns_upd_vd-hero_1920x693._CB521773290_.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
</Card>
);

export default PetCard;