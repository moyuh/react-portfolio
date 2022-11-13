import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Home from './pages/Home'





const Navigation =   (props) => {
  
     if(props.pageView === 'Portfolio'){
        return <Portfolio/>
        
     }
     else if(props.pageView === 'About'){
        return<About/>
     }
     else if (props.pageView === 'Contact'){
        return <Contact/>
     }
     else if (props.pageView === 'Resume'){
        return<Resume/>
     }
     else if (props.pageView === 'Home'){
        return <Home/>
     }
     else{
        return <About/>
     }
    }

 

export default Navigation