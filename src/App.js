import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from './routes/AppRoutes';
// import CardReportViews from './components/viewForm/profile/componentsProfile/reportsUser/cardReportViews';
import Chart from './components/viewForm/profile/componentsProfile/reportsUser/cardReportViews';
import CardInformationUser from './components/viewForm/profile/componentsProfile/cardInformationUser';
import CardReportViews from './components/viewForm/profile/componentsProfile/reportsUser/cardReportViews';


function App() {
  return (
    <div >
      {/* <Chart/> */}
      <AppRoute/>
      {/* <CardInformationUser/> */}
      {/* <CardReportViews/> */}
    </div>
  );
}

export default App;
