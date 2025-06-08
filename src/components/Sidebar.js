import { Link } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    ['/', 'Table'], ['/charts', 'Charts'],
    ['/calendar', 'Calendar'], ['/kanban', 'Kanban']
  ];
  return (
    <nav className="w-48 bg-gray-100 dark:bg-gray-800 p-4">
      {links.map(([to,label]) => (
        <Link
          key={to}
          to={to}
          className="block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >{label}</Link>
      ))}
    </nav>
  );
}
