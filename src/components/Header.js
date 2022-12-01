import React from 'react';
export default function Header(props) {
  const titleEl = React.useRef();

  const highlighted = (text, toHighlight) => {
    if (titleEl.current) {
      titleEl.current.innerHTML = text;
      if (toHighlight) {
        const textSplit =  text.split(toHighlight);
        titleEl.current.innerHTML = `
          ${textSplit[0] ? textSplit[0] : ''}
          <span class='${props.darkMode ? 'text-primary' : 'text-secondary' }'>${toHighlight}</span>
          ${textSplit[1] ? textSplit[1] : ''}
        `;
      }
    }
  }

  React.useEffect(() => {
    highlighted(props.children, props.highlight)
  });
  return (
    <React.Fragment>
      <div className='
        flex flex-col flex-0
        justify-center items-center
        w-full
        gap-12
      '>
        <h1 className={`
          ${ props.darkMode ? 'text-white' : 'text-black' }
          text-4xl text-center font-semibold font-header
        `}
        ref={ titleEl }>
          { props.children }
        </h1>
        <div className={`
          ${ props.darkMode ? 'via-primary' : 'via-secondary' }
          bg-gradient-to-r from-transparent to-transparent
          w-full max-w-7xl h-0.5
        `} />
      </div>
    </React.Fragment>
  )
}