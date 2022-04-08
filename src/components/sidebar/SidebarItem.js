import { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import classNames from 'classnames';

import styles from './sidebar.module.scss';

const SidebarItem = ({ id, Icon, link, label, items, level1ItemClickHandler, openLevel2 }) => {
	const level2MenuRef = useRef(null);

	const [level2Height, setLevel2Height] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [level2ActiveItemIndex, setLevel2ActiveItemIndex] = useState(-1);

	const menuItemClickHandler = (e) => {
		e.preventDefault();
		level1ItemClickHandler(id);
	};

	useEffect(() => {
		const pathname = window.location.pathname;
		if (link && link === pathname) {
			setIsActive(true);
		} else if (items && items.length > 0) {
			const activeIndex = items.findIndex((i) => i.link === pathname);
			if (activeIndex !== -1) {
				setIsActive(true);
				level1ItemClickHandler(id);
				setLevel2ActiveItemIndex(activeIndex);
			}
		}
	}, [link, items, id, level1ItemClickHandler]);

	useEffect(() => {
		const height = level2MenuRef.current?.scrollHeight;
		if (height > 0 && level2Height === 0) {
			setLevel2Height(height);
		}
	}, [level2Height]);

	const hasLevel2Menu = items && items.length > 0;
	return (
		<li className={styles.menuItem}>
			<a
				href={link}
				onClick={hasLevel2Menu ? menuItemClickHandler : () => {}}
				className={classNames({ [styles.activeMenuItem]: isActive })}
			>
				<div>
					<span className={styles.icon}>
						<Icon size={20} />
					</span>
					<label>{label}</label>
				</div>
				{hasLevel2Menu && (
					<span className={classNames({ [styles.arrow]: true, [styles.rotateArrow]: openLevel2 })}>
						<IoIosArrowForward />
					</span>
				)}
			</a>
			{hasLevel2Menu && (
				<ul className={styles.subMenu} ref={level2MenuRef} style={{ height: openLevel2 ? level2Height : 0 }}>
					{items.map((item, idx) => (
						<li
							key={item.label}
							className={classNames({
								[styles.subMenuItem]: true,
								[styles.subMenuItemActive]: idx === level2ActiveItemIndex,
							})}
						>
							<a href={item.link}>{item.label}</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default SidebarItem;
