
import { useEffect, useRef, useState } from "react"

import BarCode from "./components/BarCode/BarCode";
import QrCode from "./components/QrCode/QrCode";
import Container from "./components/Container/Container";

import "./App.css";
import FieldCode from "./components/FieldCode/FieldCode";

import Text from "./components/Text/Text";
import Carusel from "./components/Carusel/Carusel";

const App: React.FC = () => {
  
  const qrCodeRef = useRef<HTMLCanvasElement>(null);
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);

  const [inputState, setInputState] = useState<string>("");
 

  useEffect(() => {
  
    qrCodeRef.current?.focus();
  }, []);

 
  
  

  const changeInput = (text: string) => {
    setInputState(text);
    setIsDisabledBtn(text.length ? false : true);
  };

  const listScene = [ <QrCode isDisabledBtn = { isDisabledBtn } inputState = { inputState } />, <BarCode isDisabledBtn = { isDisabledBtn } inputState = { inputState } /> ];

  return (
    <Container>
        <main className = "app">
          <Text>
            { inputState }
          </Text>

          <Carusel h = { 300 } listScene = { listScene } />
            
         
         
          <FieldCode placeholder = "Сгенерировать код..." changeInput = { changeInput } />
          {/* <QrCode isDisabledBtn = { isDisabledBtn } inputState = { inputState } />
          <BarCode isDisabledBtn = { isDisabledBtn } inputState = { inputState } /> */}
        </main>
    </Container>

  )
}

export default App
