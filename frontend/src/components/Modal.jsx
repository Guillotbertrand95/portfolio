import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Modal.scss"; // Import du fichier SCSS

const Modal = ({ onClose, children }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			modalRef.current,
			{ autoAlpha: 0, scale: 0.8 },
			{ duration: 0.4, autoAlpha: 1, scale: 1, ease: "power3.out" }
		);

		return () => {
			gsap.to(modalRef.current, {
				autoAlpha: 0,
				scale: 0.8,
				duration: 0.3,
			});
		};
	}, []);

	return (
		<div className="modal-backdrop" ref={modalRef} onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					onClick={onClose}
					className="modal-close-button"
					aria-label="Fermer la modale"
				>
					✖
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
