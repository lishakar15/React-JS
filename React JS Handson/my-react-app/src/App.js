import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import MyState from './MyState';
import Todo from './Todo'
import PropsParent from './PropsParent';

function App() {
    return(
      <div>
      <Header />
      <Content />
      <MyState />
      <Todo />
      <PropsParent />
      <Footer />
      </div>
      
    );
}

export default App;
