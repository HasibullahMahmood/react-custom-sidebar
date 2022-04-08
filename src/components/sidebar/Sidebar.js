import { useState, useCallback } from 'react';
import classnames from 'classnames';

import SidebarItem from './SidebarItem';
import styles from './sidebar.module.scss';

const Sidebar = ({ content, open: openSidebar }) => {
	const [openedL1ItemId, setOpenL1ItemId] = useState(null);

	const level1ItemClickHandler = useCallback((id) => {
		setOpenL1ItemId((prevId) => (prevId === id ? -1 : id));
	}, []);

	return (
		<section className={classnames({ [styles.sidebar]: true, [styles.openSidebar]: openSidebar })}>
			<header>Vihobook</header>
			<nav className={styles.nav}>
				<div className={styles.menuTitle}>Menu</div>
				<ul className={styles.menu}>
					{content.map((item) => (
						<SidebarItem
							key={item.id}
							id={item.id}
							Icon={item.icon}
							link={item.link}
							label={item.label}
							items={item.items}
							level1ItemClickHandler={level1ItemClickHandler}
							openLevel2={item.id === openedL1ItemId}
						/>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Sidebar;
