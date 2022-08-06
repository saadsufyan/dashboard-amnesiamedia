import React from 'react'
import './sidebar.css'

import User from '../../User/User'
import Button from '../../Shared/Button/Button'

import instagram from '../../../assets/Images/InstagramLogo.svg'
import library from '../../../assets/Images/library.svg'
import users from '../../../assets/Images/Users.svg'
import question from '../../../assets/Images/Question.svg'
import ProgressBar from '../../Shared/ProgressBar/ProgressBar'

const routes = [
  {
    id: 1,
    image: instagram,
    text: 'Social Media',
  },
  {
    id: 2,
    image: library,
    text: 'Library',
  },
  {
    id: 3,
    image: users,
    text: 'Team',
  },
  {
    id: 4,
    image: question,
    text: 'Support',
  },
]

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <User />
      <div className="route__list">
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <img src={route.image} alt="" />
              <span>{route.text}</span>
            </li>
          ))}
        </ul>
        <Button
          className={'sidebar__btn'}
          title="Add Media"
          bgColor="#F0EB6D"
        />
      </div>
      <div className="sidebar__footer">
        <ProgressBar
          title="10 days left on trial"
          bgColor={'rgba(200, 44, 27, 0.15)'}
          color={'#C82C1B'}
          completePercent={70}
          className="sidebar__progress"
        />
        <Button
        title='Upgrade'
        style={{border: "1px solid #EDEA99"}}
        />
      </div>
    </div>
  )
}

export default Sidebar
