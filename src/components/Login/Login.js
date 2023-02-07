import { useState, useEffect } from "react";

const storedUsers = [
	{ username: "oksana", password: "1234" },
	{ username: "user", password: "111" },
];

function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [isValid, setValid] = useState(false);

	const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName || ! password) { 
            return alert('User name or user password cannot be empty')
        }
		console.log(userName);
		console.log(password);

		const user = storedUsers.find(
			user => user.username === userName && user.password === password
		);
		if (!user) {
			console.log("error, user is not found");
		} else {
			let varifiedUsers = JSON.parse(localStorage.getItem("varifiedUsers"));
			if (!varifiedUsers) {
				varifiedUsers = [];
			}
			varifiedUsers.push(user);
			localStorage.setItem("varifiedUsers", JSON.stringify(varifiedUsers));
			setValid(true);
			console.log("Your are successfully logged in");
        }
        setUserName('');
        setPassword('');
	};

	// 	const newUserData = [...userData, { name: userName, password: password }];
	// 	localStorage.setItem("user", JSON.stringify(newUserData));
	// 	setUserData(newUserData);
	// 	setUserName("");
	// 	setPassword("");
	// };

	// useEffect(() => {
	// 	const storedUser = JSON.parse(localStorage.getItem("user"));
	// 	setUserData(storedUser || []);
	// }, []);
	// useEffect(() => {
	// 	localStorage.setItem("user", JSON.stringify(userData));
	// }, [userData]);

	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<label>
					Your Name:
					<input
						
						value={userName}
						type="text"
						onInput={(e) => setUserName(e.target.value)}
					></input>{" "}
				</label>

				<label>
					Your password:
					<input
						value={password}
						type="password"
						onInput={(e) => setPassword(e.target.value)}
					></input>{" "}
				</label>
				<input type="submit" value="Submit" className="form__btn" />
			</form>
		</>
	);
}

export default Login;
