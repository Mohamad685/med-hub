import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import InputForm from "./Components/Input/Input";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Auth";
import PatientRegister from "./Pages/PatientRegister/PatientRegister";
import OptionsBox from "./Components/Options/Options";
function App() {
	return (
		<BrowserRouter>
			{/* <NavBar />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/patient-registration"
					element={<PatientRegister />}
				/>
			</Routes>
			<Footer /> */}
			{/* <Login/> */}
			<OptionsBox
			margin={'2rem'}
			/>
		</BrowserRouter>
	);
}

export default App;
