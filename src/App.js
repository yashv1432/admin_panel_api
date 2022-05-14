import React from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllVideoComments from "./components/AllVideoComments";
import SidePanel from "./components/SidePanel";
import UserMigration from "./components/UserMigration";
import AddVideos from "./components/AddVideos";
import AddSubAdmin from "./components/AddSubAdmin";
import ProfileVerification from "./components/ProfileVerification";
import Banner from "./components/Banner";
import AdminVideos from "./components/AdminVideos";
import Notification from "./components/Notification";
import Report from "./components/Report";
import Hashtag from "./components/Hashtag";
import PopularCreator from "./components/PopularCreator";
import Language from "./components/Language";
import VideoCategory from "./components/VideoCategory";
import Question from "./components/Question";
import SubAdminWork from "./components/SubAdminWork";
import AppUsers from "./components/AppUsers";
import DummyUsers from "./components/DummyUsers";
import AllSoundsSection from "./components/AllSoundsSection";
import AllVideos from "./components/AllVideos";
import DiscoverySection from "./components/DiscoverySection";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Content } from "./components/Styles";
import ScrollButton from "./components/ScrollButton";
import ChangePswd from "./components/ChangePswd";
import AnswerDetailsCreator from "./components/AnswerDetailsCreator";
import AnswerDetailsVendor from "./components/AnswerDetailsVendor";
import AddUsers from "./components/AddUsers";
import AddSounds from "./components/AddSounds";
import AllSounds from "./components/AllSounds";
import VideoSection from "./components/VideoSection";
import AddPopularCreater from "./components/AddPopularCreater";
import UserProfile from "./components/UserProfile";
import EarningCreatorQ from "./components/EarningCreatorQ";
import BusinessVendorQ from "./components/BusinessVendorQ";
import NoRecord from "./components/NoRecord";
import AllReportVideo from "./components/AllReportVideo";
import UserInfo from "./components/UserInfo";
import ShowAllComments from "./components/ShowAllComments";
import "./App.css";

const App = () => {
  return (
    // <Router>
    <div className="app-full-page">
      <SidePanel />

      <div className="app-main-page" style={{ flexGrow: 1 }}>
        <Navbar />
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/UserMigration" component={UserMigration} />
          <Route path="/UserInfo" component={UserInfo} />
          <Route path="/AddSubAdmin" component={AddSubAdmin} />
          <Route path="/AdminVideos" component={AdminVideos} />
          <Route path="/ProfileVerification" component={ProfileVerification} />
          <Route path="/Banner" component={Banner} />
          <Route path="/AddVideos" component={AddVideos} />
          <Route path="/AllVideoComments" component={AllVideoComments} />
          <Route path="/Notification" component={Notification} />
          <Route path="/Report" component={Report} />
          <Route path="/Hashtag" component={Hashtag} />
          <Route path="/PopularCreator" component={PopularCreator} />
          <Route path="/Language" component={Language} />
          <Route path="/VideoCategory" component={VideoCategory} />
          <Route path="/Question" component={Question} />
          <Route path="/SubAdminWork" component={SubAdminWork} />
          <Route path="/AppUsers" component={AppUsers} />
          <Route path="/DummyUsers" component={DummyUsers} />
          <Route path="/AllSoundsSection" component={AllSoundsSection} />
          <Route
            path="/AnswerDetailsCreator"
            component={AnswerDetailsCreator}
          />
          <Route path="/AnswerDetailsVendor" component={AnswerDetailsVendor} />
          <Route path="/AllSounds" component={AllSounds} />
          <Route path="/AllVideos" component={AllVideos} />
          <Route path="/DiscoverySection" component={DiscoverySection} />
          <Route path="/ChangePswd" component={ChangePswd} />
          <Route path="/AddUsers" component={AddUsers} />
          <Route path="/AddSounds" component={AddSounds} />
          <Route path="/VideoSection" component={VideoSection} />
          <Route path="/AddPopularCreater" component={AddPopularCreater} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/EarningCreatorQ" component={EarningCreatorQ} />
          <Route path="/BusinessVendorQ" component={BusinessVendorQ} />
          <Route path="/NoRecord" component={NoRecord} />
          <Route path="/AllReportVideo" component={AllReportVideo} />
          <Route path="/ShowAllComments" component={ShowAllComments} />
        </Switch>
        <Content />
        <ScrollButton />
        <Footer />
      </div>
    </div>
    // </Router>
  );
};

export default App;
