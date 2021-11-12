import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Greet from './Pages/About/Greet';
import BusinessPartner from './Pages/About/BusinessPartner';
import BusinessPerformance from './Pages/About/BusinessPerformance';
import AddBusinessPerformance from './components/BusinessPerformance/AddBusinessPerformance';
import UpdateBusinessPerformance from './components/BusinessPerformance/UpdateBusinessPerformance';
import DelBusinessPerformance from './components/BusinessPerformance/DelBusinessPerformance';
import SafetyManagement from './Pages/About/SafetyManagement';
import HazardousdDsign from './Pages/About/HazardousdDsign';
import Vision from './Pages/About/Vision';
import WayToCome from './Pages/About/WayToCome';
import SeonggeoFactory from './Pages/About/SeonggeoFactory';
import ChungjuFactory from './Pages/About/ChungjuFactory';
import OrganizeChart from './Pages/About/OrganizeChart';
import License from './Pages/BusinessDomain/License';
import Contact from './Pages/FacilityStatus/MailContact';
import ManagementAgency from "./Pages/BusinessDomain/ManagementAgency";
import Integration from "./Pages/BusinessDomain/Integration";
import Inspection from "./Pages/BusinessDomain/Inspection";
import Corporation from "./Pages/BusinessDomain/Corporation";
import AutomotiveParts from "./Pages/BusinessDomain/AutomotiveParts";
import Notice from "./Pages/Community/Notice";
import NoticeInfo from "./Pages/Community/NoticeInfo";
import ScrollTop from './components/PageTop';
import DelNotice from './Pages/Community/DelNotice';
import AddNotice from './Pages/Community/AddNotice';
import UpdateNotice from './Pages/Community/UpdateNotice';

// import Fee2 from './pages/Fee/Fee2';

const App = () => {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/greet" component={Greet}  />
        <Route path="/business-performance" component={BusinessPerformance}  />
        <Route path="/add-business-performance" component={AddBusinessPerformance}  />
        <Route path="/update-business-performance" component={UpdateBusinessPerformance}  />
        <Route path="/del-business-performance" component={DelBusinessPerformance}  />
        <Route path="/safety-management" component={SafetyManagement}  />
        <Route path="/hazardousd-dsign" component={HazardousdDsign}  />
        <Route path="/vision" component={Vision}  />
        <Route path="/business-partner" component={BusinessPartner} />
        <Route path="/way-to-come" component={WayToCome} />
        <Route path="/seonggeo-factory" component={SeonggeoFactory}  />
        <Route path="/chungju-factory" component={ChungjuFactory}  />
        <Route path="/organize-chart" component={OrganizeChart}  />
        <Route path="/license" component={License}  />
        <Route path="/management-agency" component={ManagementAgency}  />
        <Route path="/inspection" component={Inspection}  />
        <Route path="/corporation" component={Corporation}  />
        <Route path="/automotive-parts" component={AutomotiveParts}  />
        <Route path="/integration" component={Integration}  />
        <Route path="/contact" component={Contact}  />
        <Route path="/notice" component={Notice}  />
        <Route path="/delete-notice" component={DelNotice}  />
        <Route path="/update-notice" component={UpdateNotice}  />
        <Route path="/add-notice" component={AddNotice}  />
        <Route path="/notice-info" component={NoticeInfo}  />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
