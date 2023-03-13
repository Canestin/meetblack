import React from "react";
import styles from "./Menu.module.css";
// import logo from "../../images/others/ph-logo.png";
import userImg from "../../images/Pics/1.jpeg";
import { BsSearch, BsEye } from "react-icons/bs";
import { TbMessageCircle, TbWallet, TbSettings, TbHelp } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				{/* <img src={logo} alt="logo" /> */}
				<span style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
					LOGO
				</span>
			</div>
			<div className={styles.username}>
				<img src={userImg} alt="username" />
				<div className={styles.usernameInfos}>
					<span style={{ color: "white" }}>sarah</span>
					<br />
					<span style={{ color: "gray" }}>Votre profil</span>
				</div>
			</div>
			<div className={styles.listItems}>
				<Link to="/profiles">
					<BsSearch color="#6438E1" size={28} />
					<span>Parcourir</span>
				</Link>
				<Link to="/conversations/1">
					<TbMessageCircle color="#6438E1" size={28} />
					<span>Messages</span>
				</Link>
				<Link to="/views">
					<BsEye color="#6438E1" size={28} />
					<span>Vues</span>
				</Link>
				<Link to="/wallet">
					<TbWallet color="#6438E1" size={28} />
					<span>Portefeuille</span>
				</Link>
			</div>
			<div className={`${styles.listItems} ${styles.settings}`}>
				<Link to="/settings">
					<TbSettings color="#6438E1" size={28} />
					<span>Réglages</span>
				</Link>
				<Link to="/wallet">
					<TbHelp color="#6438E1" size={28} />
					<span>Aide</span>
				</Link>
			</div>

			<div className={`${styles.listItems} ${styles.logout}`}>
				<Link to="/disconnect">
					<RiLogoutBoxLine color="#6438E1" size={28} />
					<span>Deconnexion</span>
				</Link>
			</div>
		</div>
	);
}
