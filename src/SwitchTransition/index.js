import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import './styles.scss';

const modes = ["out-in", "in-out"];

const SwitchTransitionAnimation = () => {

  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);
  return (
    <>
      <div className="label">Mode:</div>
      <div className="modes">
        {modes.map(m => (
          <Form.Check
            key={m}
            custom
            inline
            label={m}
            id={`mode=msContentScript${m}`}
            type="radio"
            name="mode"
            checked={mode === m}
            value={m}
            onChange={event => {
              setMode(event.target.value);
            }}
          />
        ))}
      </div>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            timeout={500}
/*             addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }} */
            classNames="fade"
          >
            <div className="button-container">
              <Button onClick={() => setState(state => !state)}>
                {state ? "My posts" : "All posts"}
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

export default SwitchTransitionAnimation