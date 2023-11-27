import { useState } from "react";

function App() {

  const MOCK_DATA = ["mp3", "mp4", "avi", "mkv", "exe", "mpeg", "jpg"];
  const [formats, setFormats]= useState<string[]>([])

  const debounce = (callback:Function, delay: number) => {
    let timeoutId: number;

    return (...args: any) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        callback(...args)
      }, delay);
    }
  }

  const onInput = debounce((event: InputEvent) => {
    let value = (event.target as HTMLInputElement).value
    
    console.log(value);
    let result = MOCK_DATA.filter(item => item.includes(value))
    setFormats(result)

  }, 600)
  return (
    <>
      <div>APP</div>
      <input type="text" onInput={onInput}/>
      <ul>
        {formats.map((format, idx) => <li key={idx}>{format}</li>)}
      </ul>
    </>
  );
}

export default App;
