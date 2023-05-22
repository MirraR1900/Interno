import { Blogs, Breands, Call, Comments, Description, Footer, Header, Intro, Join, Numbers, Recents } from './components';
import './styles/App.scss'




function App() {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <div className='content'>
            <Intro />
            <Description />
            <Call />
            <Comments />
            <Breands />
            <Recents />
            <Numbers />
            <Blogs />
            <Join />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
