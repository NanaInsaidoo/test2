import AddSchoolDetail from './enrollSchool/Admin/AddSchoolDetail';
import EnrollmentForm from './enrollSchool/EnrollmentForm';
import MainSchoolFormcopy from './enrollSchool/MainSchoolFormcopy';
import MainSchoolForm from './enrollSchool/MainSchoolForm';
import MultiStepForm from './enrollSchool/MultiStepForm';
import Form12 from './enrollSchool/Form12';
import MyGrid from './enrollSchool/MyGrid';
import SignUp from './enrollSchool/SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Test2 from './enrollSchool/Admin/Test2'

import PageNotFound from './enrollSchool/Admin/PageNotFound'

import SummaryStatAdmin from './enrollSchool/Admin/SummaryStatAdmin'

import AddManagerByAdmin from './enrollSchool/Admin/AddManagerByAdmin'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ForgotPassword from './SignIn';
import MyNavBar from './enrollSchool/MyNavBar';
import AdminNavBar from './enrollSchool/Admin/AdminNavBar';
import AdminWelcome from './enrollSchool/Admin/AdminWelcome';
import LeftHandMenu from "./enrollSchool/Admin/LeftHandMenu"
import ManagerProfile from './enrollSchool/Admin/ManagerProfile';

import AddSchoolMain from './enrollSchool/Admin/AddSchoolMain';
import AddSchoolClass from './enrollSchool/Admin/AddSchoolClass';
import AddSchoolStaff from './enrollSchool/Admin/AddSchoolStaff';
import FormMain from './enrollSchool/Admin/FormMain';
import AAA from "./enrollSchool/Admin/AAA"

import AddSchMainForm from './enrollSchool/Admin/AddSchMainForm';
import SchoolsListAdmin from './enrollSchool/Admin/SchoolsListAdmin';

function App() {
  return (
    <div className="App-header">
{/* <LeftHandMenu/> */}
{/* <Test2/> */}
{/* <Login/> */}
{/* <MyNavBar/>
<MyFrontPage/>
<SignIn/> */}
{/* <AddSchoolClass/>
<AddSchoolStaff/> */}


      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/admin" exact component={AdminWelcome} />
          <Route path="/adminSchools" exact component={SchoolsListAdmin} />
          <Route path="/admin" exact component={AdminWelcome} />
          <Route path="/managerProfile" exact component={ManagerProfile} />
          <Route path="/addManager" exact component={AddManagerByAdmin} />
          <Route path="/addSchool" exact component={AddSchMainForm} />
          <div>
          <Route component={PageNotFound} />          
          </div>
        </Switch>
      </Router>
{/* <AddSchMainForm/> */}
      {/* <AAA/> */}
      {/* <MyGrid/> */}
      {/* <ForgotPassword/> */}
      {/* <Form12/> */}
      {/* <FormMain/> */}
      {/* <MainSchoolFormcopy />  */}
      {/* <MainSchoolForm />  */}
      {/* <MultiStepForm/> */}
      {/* < AddClass/> */}
      {/* <AddSection /> */}
      {/* <AddM /> */}
      {/* <AddSchoolDetail /> */}
      {/* <EnrollmentForm/> */}

      {/* <YoutubeForm/> */}

    </div >
  );
}

export default App;
