import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

import Fade from './Fade';
import './styles.scss'


const TransitionAnimation = () => {

    const [inProp, setInProp] = useState(false)

    return(
        <div className='container'>
            <Button className='button' onClick={() => setInProp((prevInProp)=>!prevInProp)}>
                {inProp ? 'Hide': 'Show'}
            </Button>
            <div className='content'>
                <Fade in={inProp}/>
            </div>
        </div>
    );
      
}

export default TransitionAnimation