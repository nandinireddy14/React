// import logo from './logo.svg';
import './App.css';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'

import { Inline } from './components/Inline';
import { Forms } from './components/Forms';
import { FormDetail } from './components/FormDetail';
import { FragmentDemo } from './components/Fragment';
import { Table } from './components/Table';
import { FragmentList } from './components/FragmentList';
import LifeCycleA from './components/LifeCycleA';

// import { StyleSheets } from './components/StyleSheets';
// import { NamedList2 } from './components/NamedList2';
// import { ParentComponent } from './components/ParentComponent';
// import { ClickHandler } from './components/ClickHandler';
// import { UserGreetings } from './components/UserGreetings';
// import Counter from './components/Counter';
// import { FunctionMessage } from './components/FunctionMessage';
// import { Message } from './components/Message';
// import {Greet} from './components/Greet';
// import {Welcome} from './components/Welcome';
// import { Hello } from './components/Hello';
function App() {
  return (
    <div className='App'>
       {/* <h1>Welcome to CGG</h1>
       <Greet name="React" designation="SSD">
        <p>This is a children prop</p>
      </Greet>
       <Greet name="Angular" designation="SD">
        <button>Active</button>
        </Greet>
       <Greet name="Vue" designation="TL"/> */}
      {/* <Welcome name="React" designation="SSD">
      <p>This is a children prop</p>
      </Welcome>
      <Welcome name="Angular" designation="SD">
      <button>Active</button>
      </Welcome>
      <Welcome name="Vue" designation="TL"/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <FunctionMessage/> */}

      {/* <Counter/> */}

      {/* <ClickHandler/> */}
      {/* <UserGreetings/> */}
      {/* <ParentComponent/> */}

      {/* <NamedList2/> */}

      {/* <StyleSheets primary={false}/> */}

      {/* <Inline/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Forms/> */}

      {/* <FormDetail/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <FragmentList/> */}
      <LifeCycleA/>
    </div>
    
  );
}


export default App;
