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
          <span class='${props.highlightClass }'>${toHighlight}</span>
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
          ${ props.headerClass }
          text-4xl text-center font-bold leading-[48px]
        `}
        ref={ titleEl }>
          { props.children }
        </h1>
        <div className={`
          ${ props.lineClass }
          bg-gradient-to-r from-transparent to-transparent
          w-full max-w-sm h-0.5
        `} />
      </div>
    </React.Fragment>
  )
}