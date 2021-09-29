import React from "react";
import ProgressBar from "./ProgressBar";

const defaultData = {
  topImg: "/pointer.jpg",
  barImg: "/bar.jpg",
  minValue: 0,
  maxValue: 100,
  stopValue: 30,
  processingTime: 1,
  repeatable: false,
  repeatTimes: 0,
};

function App() {
  // set value
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   let interval = setInterval(
  //     () => setValue(defaultData.stopValue),
  //     defaultData.processingTime * 1000
  //   );
  //   return () => {
  //     clearInterval(interval);
  //     setValue(0);
  //   };
  // }, []);
  return (
    <div className='App'>
      <ProgressBar {...defaultData} />
    </div>
  );
}

export default App;
