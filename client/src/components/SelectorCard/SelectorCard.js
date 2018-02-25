import React from 'react';
import {Button, Card, CardTitle, Row, Col} from 'react-materialize';
import pet1 from "../img1/hamster1.jpg";
import pet2 from "../img1/dog1.jpg";
import pet3 from "../img1/dog.4k.jpg";

const SelectorCard = () => (


<Row>
	<Col s={4} className='grid-example'>
    <Card header={
        <CardTitle reveal image={pet1} waves='light'/>
    }
title="Adopt a Pet"
reveal={
    [
<p>Here is some more information about this product that is only revealed once clicked on.</p>,
<Button floating large className='grey' waves='light'
style={{bottom: '-50px', right: '-80px'}}>
<i class="material-icons">pets</i>
</Button>
    ]
}>


<Button floating large className='blue' waves='red'
style={{bottom: '-50px', right: '-80px'}}>
<i class="material-icons">pets</i>
</Button>


</Card>
</Col>

	<Col s={4} className='grid-example'>
    <Card header={
            <CardTitle reveal image={pet2} waves='light'/>
    }
title="Post Pet"
reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>

<p> 
<Button floating large className='grey' waves='light'
style={{top: '15px', right: '50px'}}>
<i class="material-icons">pets</i>
</Button>
</p>

</Card>
</Col>
	<Col s={4} className='grid-example'>
    <Card header={
            <CardTitle reveal image={pet3} waves='light'/>
    }
title="Stories"
reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>

<p> 
<Button floating large className='grey' waves='light'
style={{top: '15px', right: '50px'}}>
<i class="material-icons">pets</i>
</Button>
</p>

</Card>
</Col>

</Row>






);

export default SelectorCard;