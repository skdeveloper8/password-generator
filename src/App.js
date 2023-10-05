import { useState, useCallback } from 'react';

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let currentPass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMzxcvbnmasdfghjklpoiuytrewq";
    if (numAllow) str += '0123456789'
    if (charAllow) str += '~!@#$%^&*()_+|"?><,./`'

    for (let i = 1; i <= passLength; i++) {
      let currentChar = Math.floor(Math.random() * str.length + 1);
      currentPass += str.charAt(currentChar);
    }
    setPass(currentPass);

  }, [passLength, numAllow, charAllow, setPass]);

  return (
    <div  className='app'>
      <h3 className='heading'>Password Generator</h3>
      <input type="text"
        value={pass}
        placeholder='password'
        readOnly />

      <button className='btn' onClick={passwordGenerator}>generate</button>
      <br />
      <div>
        <div className='length'>
          <input type="range"
            min={8}
            max={100}
            value={passLength} 
            onChange={(e) => { setPassLength(e.target.value) }}/>
          <label >Length {passLength}</label>
        </div>
        <div className='number'>
          <input type="checkbox"
            defaultChecked={numAllow}
            id='numberInput'
            onChange={() => {
              setnumAllow((prev) => !prev);
            }} />
            <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='char'> 
          <input type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={() => {
              setCharAllow((prev) => !prev);
            }} />
            <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    </div>
  );
}

export default App;
