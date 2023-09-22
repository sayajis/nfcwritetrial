import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';

function App() {
  const user = "";
  const [output, setOutput] = useState("");
  const [url, setURL] = useState(`http://qviq.io`);

  useEffect(() => {
    console.log(url);
    
    if ("NDEFReader" in window) {
      setOutput("NFC writing supported in this browser.");
    } else {
      setOutput("NFC writing not supported in this browser.");
    }
  }, [url]);

  const option1 = async () => {
    console.log(url);
    const ndef = new window.NDEFReader();
    ndef
      .write({
        records: [{ recordType: "url", data: url }],
      })
      .then(() => {
        console.log("Message written.");
      })
      .catch((error) => {
        console.log(`Write failed :-( try again: ${error}.`);
      });
  };
  
  return (
    <div className="App">
      <h2>{output}</h2>
      <button type="button" onClick={()=>{option1()}}>Option1</button>
      {/* <button type="button">Option2</button>
      <button type="button">Option3</button> */}
    </div>
  );
}

export default App;
