import React from 'react'
import './Proj.css'

export const Proj = (props) => {

  const {title, status, git, web, langs, library, tools} = props

  return (
    <div className='proj'>
      <div className="proj__title">
        <div className="proj__title-main">{title} - <span>{status}</span></div>
        <div className="proj__title-sub">
          {!web ? '' : (<a href={web}>Web</a>)}
          <a href={git}> Git</a>
        </div>
      </div>
      <div className="proj__list">
        <p className="proj__list-item">
          Язык разработки <span> {langs.map(i => (<a key={i}>{i}</a>))}</span>
        </p>
        <p className="proj__list-item">
          Фреймворки и библиотеки <span> {library.map(i => (<a key={i}>{i}</a>))}</span>
        </p>
        <p className="proj__list-item">
          Инструменты <span>{tools.map(i => (<a key={i}>{i}</a>))}</span>
        </p>
      </div>
    </div>
  )
}
