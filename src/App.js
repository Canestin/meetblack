import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Conversations from "./components/Conversations/Conversations";
import UserContext from "./utils/UserContext";
import { fetchUserById } from "./utils/store";

function App() {
	const [user, setUser] = useState(null);
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		fetchUserById(userId, setUser);
	}, []);

	return (
		<UserContext.Provider value={user}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/profile/:userId" element={<Profile />} />
					<Route path="/conversations" element={<Conversations />} />
					<Route path="/conversations/:channelId" element={<Conversations />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</div>
		</UserContext.Provider>
	);
}

export default App;
