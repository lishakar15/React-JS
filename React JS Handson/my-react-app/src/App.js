import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import MyState from './MyState';
import Todo from './Todo'
import PropsParent from './PropsParent';
import FocusInput from './FocusInput';

function App() {
    return(
      <div>
      <Header />
      <Content />
      <MyState />
      <Todo />
      <PropsParent />
      <Footer />
      <FocusInput />
      </div>
      
    );
}

export default App;
