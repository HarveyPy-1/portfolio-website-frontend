import "./NavBar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		// Class naming is using BEM methodology
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "work", "skills", "contact"].map((item, index) => (
					// The '#' in the link is to enable the page jump to that section when clicked
					<li key={`link-${index}`} className="app__flex p-text">
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4
					onClick={() => {
						setToggle(true);
					}}
				/>
				<AnimatePresence>
					{toggle && (
						<motion.div
							initial={{ x: 300 }}
							// whileInView={{ x: [300, 0] }}
							animate={{ x: 0 }}
							exit={{ x: 300, transition: {duration: 0.2} }}
							transition={{ duration: 0.85, ease: "easeOut" }}
							> 
						
							<HiX onClick={() => setToggle(false)} />

							<ul>
								{["home", "about", "work", "skills", "contact"].map(
									(item, index) => (
										<li key={index}>
											<a href={`#${item}`} onClick={() => setToggle(false)}>
												{item}
											</a>
										</li>
									)
								)}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};
export default NavBar;
