import './App.css';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import ImageTypeSelector from './components/ImageTypeSelector';
import GetTemp from './components/TempControls';
import ExposureTypeSelector from './components/SetExposureType';
import FilterTypeSelector from './components/FilterControls';
import ExposureControls from './components/ExposureControls';
import logo from './aueg_logo.png'

function App() {
  const [exposureType, setExposureType] = useState('Single')
  const [imageType, setImageType] = useState('Bias')
  const [filterType, setFilterType] = useState('Ha')
  const [temp, setTemp] = useState()
  

  return (
    <div className='App'> Manastash Ridge Observatory Controls
    <img src={logo} className='Logo' alt='Logo'/>
    <fieldset>
      <ImageTypeSelector imageType={imageType} setImageType={setImageType}/>
      <ExposureTypeSelector exposureType={exposureType} setExposureType={setExposureType}/>
      <FilterTypeSelector filterType={filterType} setFilterType={setFilterType}/>
      <ExposureControls exposureType={exposureType}/>
      <GetTemp temp={temp} setTemp={setTemp}/>
    </fieldset>
    </div>
  );
}

export default App;