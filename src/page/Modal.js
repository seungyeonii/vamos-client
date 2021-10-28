import React, {useState} from 'react';
import styled from "styled-components";
import Profile from "../user/profile/Profile";

const ModalBackground = styled.div`
  width : 100%;
  height : 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border : 1px solid orange;
`;

const ModalBlock = styled.div`
  width : 30%;
  height: 30%;
  background: white;
  border : 1px solid red;

`;



const Modal = ({visible}) => {
    const [state, setState] = useState(visible);

    return (
        <>
            {state &&
            <ModalBackground>
                <ModalBlock>
                    abcd
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button type={"button"} onClick={() => setState(!state)}>d</button>
                </ModalBlock>
            </ModalBackground>

            }

            </>

    );
};

export default Modal;