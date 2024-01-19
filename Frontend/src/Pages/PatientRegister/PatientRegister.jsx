import { React, useState } from "react";
import OptionsBox from "../../Components/Options/Options";
import "./PatientRegister.css";
import ProfilePic from "../../Components/ProfilePic/ProfilePic";
import InputForm from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import TextArea from "../../Components/TextArea/TextArea";
import fetchHelper from "../../Components/Functions/FetchFunction";

function PatientRegister() {
	const [user_name, setUsername] = useState("");
	const [password, setpassword] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("");
	const [date_of_birth, setBirthdate] = useState("");
	const [address, setAddress] = useState("");
	const [description, setMedicalHistory] = useState("");
	const [medication_description, setMedicationHistory] = useState("");
	const [emptyError, setEmptyError] = useState("");

	const clearFields = () => {
		setUsername("");
		setpassword("");
		setFirstName("");
		setLastname("");
		setEmail("");
		setPhoneNumber("");
		setGender("");
		setBirthdate("");
		setAddress("");
		setMedicalHistory("");
		setMedicationHistory("");
	};

	const validateInput = () => {
		if (
			!user_name ||
			!password ||
			!first_name ||
			!last_name ||
			!email ||
			!phone_number ||
			!gender ||
			!date_of_birth ||
			!medication_description ||
			!description
		) {
			setEmptyError("All fields are required.");
			return false;
		}
		setEmptyError("");
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateInput()) {
			return;
		}
		const formData = {
			user_name,
			password,
			first_name,
			last_name,
			email,
			phone_number,
			gender,
			date_of_birth,
			address,
			description,
			medication_description,
		};
		try {
			const response = await fetchHelper.post("/register-patient", formData);

			if (response.status === 200) {
				console.log("Registration successful", response.data);
				clearFields(); // Clear fields on successful submission
			} else if (response.status === 422) {
				// ... handle validation errors ...
			} else {
				setEmptyError(
					response.data || "An error occurred during registration."
				);
			}
		} catch (error) {
			console.error("Error during registration:", error);
			setEmptyError(
				error.response?.data || "An error occurred during registration."
			);
		}
	};
	return (
		<div className="patient-reg-page">
			<OptionsBox
				margin={"7rem 2rem 2rem 2rem"}
				className="options-style"
			/>

			<form className="patient-reg-form">
				<p className="patient-reg-title">Create Patient Profile</p>
				<div className="patient-reg-section1">
					<ProfilePic />
					<div className="patient-form-input">
						{emptyError && (
							<div className="error">
								{Array.isArray(emptyError) ? emptyError.join(". ") : emptyError}
							</div>
						)}
						<div className="patient-reg-input">
							<InputForm
								type="text"
								value={user_name}
								onChange={(e) => setUsername(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Username"}
							/>
							<InputForm
								type="password"
								onChange={(e) => setpassword(e.target.value)}
								value={password}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Password"}
							/>

							<InputForm
								type="text"
								value={first_name}
								onChange={(e) => setFirstName(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"First Name"}
							/>

							<InputForm
								type="text"
								value={last_name}
								onChange={(e) => setLastname(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Last Name"}
							/>

							<InputForm
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Email"}
							/>

							<InputForm
								type="number"
								value={phone_number}
								onChange={(e) => setPhoneNumber(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Phone Number"}
							/>

							<InputForm
								type="text"
								value={gender}
								onChange={(e) => setGender(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Gender"}
							/>

							<InputForm
								type="date"
								value={date_of_birth}
								onChange={(e) => setBirthdate(e.target.value)}
								width={"23rem"}
								length={"2rem"}
								placeholder={"Date Of Birth"}
							/>
						</div>
						<div className="address-input-div">
							<TextArea
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								width={"48rem"}
								length={"8rem"}
								textAlign={"text-top"}
								placeholder={"Address"}
							/>

							<TextArea
								value={description}
								onChange={(e) => setMedicalHistory(e.target.value)}
								width={"48rem"}
								length={"18rem"}
								placeholder={"Medical History"}
							/>

							<TextArea
								value={medication_description}
								onChange={(e) => setMedicationHistory(e.target.value)}
								width={"48rem"}
								length={"18rem"}
								placeholder={"Medication History"}
							/>

							<Button
								width={"14rem"}
								height={"3rem"}
								color={"white"}
								fontSize="1.15rem"
								text={"Submit"}
								onClick={handleSubmit}
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default PatientRegister;
