import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import { useAuth } from "./Firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceForm from "./Pages/InvoiceForm";

//BODY//////////////////////////////////////////////
function App() {
  //document.body style
  document.body.style.backgroundColor = "#1B1B1B";
  document.body.style.padding = "0";

  const user = useAuth();
  // user ? console.log("user") : console.log("no user");

  //UI
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              user ? (
                <Dashboard user={user}></Dashboard>
              ) : (
                <LandingPage user={user}></LandingPage>
              )
            }
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard user={user}></Dashboard>}
          ></Route>
          <Route
            path="/new"
            element={<InvoiceForm user={user}></InvoiceForm>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
