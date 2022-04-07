import classnames from 'classnames';

import SidebarItem from './SidebarItem';
import styles from './sidebar.module.scss';

const Sidebar = ({ content, open }) => {
	return (
		<section className={classnames({ [styles.sidebar]: true, [styles.open]: open })}>
			<header>Vihobook</header>
			<nav className={styles.nav}>
				<div className={styles.menuTitle}>Menu</div>
				<ul className={styles.menu}>
					{content.map((item, idx) => (
						<SidebarItem
							key={item.label + idx}
							Icon={item.icon}
							link={item.link}
							label={item.label}
							items={item.items}
						/>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Sidebar;
