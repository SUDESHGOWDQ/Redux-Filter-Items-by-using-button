# React + Vite

# Now create a new project using vite, add a slice for events.
#### In your component you should have:
	1.	Three buttons/tabs at the top. (All, Upcoming, Completed)
	2.	List of all events by default.
	3.	When Upcoming is clicked, using selectors you have to filter only upcoming events and show in the list.
	4.	Similarly for completed also.
	5.	In the initial values you can keep some hardcoded event data as array of objects. Each data can have values like {name, id, status: 'upcoming/completed'}
	6.	Now you can use this status for filtering (Must use selectors).

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
