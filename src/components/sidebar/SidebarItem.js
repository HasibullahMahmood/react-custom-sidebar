import { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import classNames from 'classnames';

import styles from './sidebar.module.scss';

const SidebarItem = ({ Icon, link, label, items }) => {
	const subMenuRef = useRef(null);
	const [showSubList, setShowSubList] = useState(false);
	const [subMenuHeight, setSubMenuHeight] = useState(0);

	const menuItemClickHandler = (e) => {
		e.preventDefault();
		setShowSubList((prev) => !prev);
	};

	useEffect(() => {
		const height = subMenuRef.current?.scrollHeight;
		if (height > 0 && subMenuHeight === 0) {
			setSubMenuHeight(height);
		}
	}, [subMenuHeight]);

	const hasSubMenu = items && items.length > 0;
	return (
		<li className={styles.menuItem}>
			<a href={link} onClick={hasSubMenu ? menuItemClickHandler : () => {}}>
				<div>
					<span className={styles.icon}>
						<Icon size={20} />
					</span>
					<label>{label}</label>
				</div>
				{hasSubMenu && (
					<span className={classNames({ [styles.arrow]: true, [styles.rotateArrow]: showSubList })}>
						<IoIosArrowForward />
					</span>
				)}
			</a>
			{hasSubMenu && (
				<ul className={styles.subMenu} ref={subMenuRef} style={{ height: showSubList ? subMenuHeight : 0 }}>
					{items.map((item) => (
						<li key={item.label} className={styles.subMenuItem}>
							<a href={item.link}>{item.label}</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default SidebarItem;
