import React, {useState} from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.scss';


const CssTransitionAnimation = () => {

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
      <Container className="container">
        {showButton && (
          <Button
            onClick={() => setShowMessage(true)}
          >
            Show Message
          </Button>
        )}
        <CSSTransition
          in={showMessage}
          appear={true}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Alert
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>
              Animated alert message
            </Alert.Heading>
            <p>
              This alert message is being transitioned in and
              out of the DOM.
            </p>
            <Button onClick={() => setShowMessage(false)}>
              Close
            </Button>
          </Alert>
        </CSSTransition>
      </Container>
    ) 
}

export default CssTransitionAnimation