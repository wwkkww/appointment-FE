import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./Appointment/Calendar";
import { eventData } from "./Appointment/event-data";

export default function Index(props) {
  const { isLoggedIn, setLoggedIn } = props;
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/"
              element={
                <Calendar 
                  setLoggedIn={setLoggedIn} 
                  // preloadedEvents={eventData}
                />
              }
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
              }
            ></Route>
            <Route
              path="/signup"
              element={<SignUp setIsLoggedIn={setLoggedIn} />}
            ></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
