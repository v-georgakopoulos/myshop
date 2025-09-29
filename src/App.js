import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Home/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication"
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn/>}
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;
