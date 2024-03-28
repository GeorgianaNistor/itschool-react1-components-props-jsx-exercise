import React from 'react';

export function Navigation(props) {
  const { imgSrc, width } = props;

  return (
    <nav>
      <img src={imgSrc} alt="" width={width} />
      <ul>
        <li>
          <a href="#css-html">CSS/HTML</a>
        </li>
        <li>
          <a href="#javascript">JavaScript</a>
        </li>
        <li>
          <a href="#react">React</a>
        </li>
      </ul>
    </nav>
  );
}
