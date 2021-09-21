import React from 'react';

export default function NavBar() {
  const links = [
    {
      title: 'Home',
      link: '#home',
    },
    {
      title: 'Flats for Rent',
      link: '',
    },
    {
      title: 'Special Offers',
      link: '',
    },
    {
      title: 'Our Houses',
      link: '',
    },
    {
      title: 'Gallery',
      link: '',
    },
    {
      title: 'Agents',
      link: '',
    },
    {
      title: 'Discount',
      link: '',
    },
    {
      title: 'Testimonial',
      link: '',
    },
    {
      title: 'Contact',
      link: '',
    },
  ];
  return (
    <div className="bg-black w-full py-3 text-white">
      <nav>
        <ul className="flex items-center px-4">
          {links.map(({ title, link }) => (
            <li
              key={title}
              className="mr-4 capitalize font-medium hover:text-yellow-600"
            >
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
