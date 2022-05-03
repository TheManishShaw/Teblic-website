import React from 'react'

const ContentLink = (props) => {
  return (
    <a href={props.href} className="mb-5 leading-relaxed md:text-lg font-semibold text-blue-600" >
    {props.text}
    </a>
  );
}

export default ContentLink;