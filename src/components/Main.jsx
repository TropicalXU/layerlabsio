import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { projects } from '../constants';
import { Home, Footer, Info, Services, Websites, StandardPackage, AdvancedPackage, BusinessPackage, Contact, ProjectDetail, PrivacyPolicy, TermsAndConditions} from '../components/index';
import CookieConsent from 'react-cookie-consent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: projects,
    }
  }

  render() {

    //home page - adding in props
    const HomePage = () => {
      return (
        <Home
          project1={this.state.projects.filter((project) => project.featured)[0]}
          project2={this.state.projects.filter((project) => project.featured)[1]}
          project3={this.state.projects.filter((project) => project.featured)[2]}
        />
      );
    }

    const WorkId = ({match}) => {
      return (
          <ProjectDetail
            project={this.state.projects.filter((project) => project.id === parseInt(match.params.id))[0]}
          />
      );
    }

    return (
      <div>
          <Switch>
              <Route exact path='/' component={ HomePage } />
              <Route exact path='/services' component={() => <Services />} />
              <Route exact path='/websites' component={() => <Websites />} />
              <Route exact path='/standard-package' component={() => <StandardPackage />} />
              <Route exact path='/advanced-package' component={() => <AdvancedPackage />} />
              <Route exact path='/business-package' component={() => <BusinessPackage />} />
              <Route exact path='/info' component={() => <Info />} />
              <Route exact path='/personal-profile' component={() => <PersonalProfile />} />
              <Route exact path='/project-detail/:id' component={ WorkId } />
              <Route exact path='/contact' component={() => <Contact />} />
              <Route exact path='/terms-and-conditions' component={() => <TermsAndConditions />} />
              <Route exact path='/privacy-policy' component={() => <PrivacyPolicy />} />
          </Switch>
          <div className='container cookie-consent'>
            <CookieConsent
              enableDeclineButton   
              location="bottom"
              buttonText="Accept All"
              declineButtonStyle={{background: 'black', color: 'white', borderRadius: 25, fontWeight: 400, fontSize:14, fontFamily: 'Kanit', border: 1, borderColor: 'darkgrey', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6}}
              cookieName="myAwesomeCookieName2"
              style={{ background: "#fff", color: '#000' }}
              buttonStyle={{background: '#24a0ed ',color:'white', borderRadius: 25, paddingLeft: 15, paddingRight: 15, fontWeight: 400, fontSize: 14, fontFamily: 'Kanit'}}
              expires={150}
            >
              <div className='flex flex-row items-center'><span className='fa fa-info text-black align-self-center fa-lg mr-3'></span><p className='font-style py-6'>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read more <Link to='/privacyPolicy'>Privacy Policy</Link></p>
              </div>
            </CookieConsent>
          </div>
          <Footer />
      </div>
    );
  }
  
}

export default Main;