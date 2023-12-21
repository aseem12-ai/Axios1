
import Title from './components/Title'
import Example1 from './examples/1-first-request'
import Example2 from './examples/2-headers'
import Example3 from './examples/3-post-request'
import Example4 from './examples/4-global-instance'
import './axios/global'

import Example5 from './examples/5-custom-instance'
import Example6 from './examples/6-interceptors'


function App() {


  return (
    <main>
      <Title/>
      {/* <Example1/> */}
      {/* <Example2/> */}
      {/* <Example3/>/ */}
      {/* <Example4/> */}
      {/* <Example5/> */}
     
      <Example6/>
    </main>
  )
}

export default App
