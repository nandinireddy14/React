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
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import WelcomeRefDemo from './components/WelcomeRefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import ErrorBoundary from './components/ErrorBoundary';
import { Hero } from './components/Hero';
import { PortalDemo } from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

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
      {/* <LifeCycleA/> */}
      {/* <ParentComp/> */}
      {/* <WelcomeRefDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <ErrorBoundary>  
              <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary> <Hero heroName='Superman'/></ErrorBoundary>
      <ErrorBoundary>  <Hero heroName='Joker'/>
      </ErrorBoundary> */}

      {/* <PortalDemo/> */}
      {/* <ClickCounter name='CGG'/>
      <HoverCounter name='Welcome CGG'/> */}
      {/* <ClickCounter2/>
      <HoverCounter2/> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}
      {/* <Counter2>
      {(count,incrementCount)=>
       ( <ClickCounter2 count={count}
        incrementCount={incrementCount}/>)
      }
      </Counter2>
      <Counter2>
      {(count,incrementCount)=>(
        <HoverCounter2 count={count}
        incrementCount={incrementCount}/>)
      }
      </Counter2> */}
      {/* 2 */}
      {/* <UserProvider value='CGG'>
      <ComponentC/>
      </UserProvider> */}
      
    </div>
    
  );
}


export default App;
