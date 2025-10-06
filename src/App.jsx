
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChat from './Components/ResultsChart/ResultsChat'
import axios from 'axios'
import Markschart from './Components/MarksChart/Markschart'


const pricingPromise = fetch('pricingData.json').then(res => res.json())
const marksPromise = axios.get('marksData.json');


function App() {


  return (
    <>
  <header>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
  </header>


    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>


      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Markschart marksPromise={marksPromise}></Markschart>
      </Suspense>


      <ResultsChat></ResultsChat>
    </main>

    </>
  )
}

export default App
