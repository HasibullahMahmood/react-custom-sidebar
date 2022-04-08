import { useState, useCallback } from 'react';
import classnames from 'classnames';

import SidebarItem from './SidebarItem';
import styles from './sidebar.module.scss';

const Sidebar = ({ content, open }) => {
	const [openMenuItemId, setOpenMenuItemId] = useState(null);

	const sidebarItemClickHandler = useCallback((id) => {
		console.log(id);
		setOpenMenuItemId(id);
	}, []);

	return (
		<section className={classnames({ [styles.sidebar]: true, [styles.open]: open })}>
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
							sidebarItemClickHandler={sidebarItemClickHandler}
							openSubMenu={item.id === openMenuItemId}
						/>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Sidebar;
