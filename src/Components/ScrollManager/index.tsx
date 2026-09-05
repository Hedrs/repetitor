import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollManager() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const el = document.getElementById(hash.slice(1));
			el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			window.scrollTo({ top: 0 });
		}
	}, [pathname, hash]);

	return null;
}
