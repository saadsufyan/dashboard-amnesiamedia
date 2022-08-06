import React from 'react';
import '../socialmedia.css';

import socialLogo from '../../../assets/Images/socialLogo.svg'
import fileIcon from '../../../assets/Images/File.svg'
import reloadIcon from '../../../assets/Images/reload.svg'
import Button from '../../Shared/Button/Button'
import verticalDots from '../../../assets/Images/DotsThreeVertical.svg'
import Stat from '../../Shared/Stat/Stat'
import instagramLogo from '../../../assets/Images/InstagramLogo.svg';
import statFIleIcon from '../../../assets/Images/statFile.svg';
import screenshotIcon from '../../../assets/Images/ImageSquare.svg'
import shieldLogo from '../../../assets/Images/ShieldWarning.svg';
const stats = [
  {
    title:"Status",
    icon:shieldLogo,
    quantity:"Warning",
    status:"warning",
  },
  {
    title:"Posts",
    icon:instagramLogo,
    quantity:37,
  },
  {
    title:"Files",
    icon:statFIleIcon,
    quantity:49,
  },
  {
    title:"Screenshots",
    icon:screenshotIcon,
    quantity:459,
  },
]
const Header = () => {
  return (
    <div className="social_media-header">
      <div className="header_actions_container">
        <div className="projects">
          <img src={socialLogo} alt="logo" style={{marginRight:"16px"}} />
          <div>
            <h1 className="project_title">Project #1</h1>
            <div className="property__container">
              {[1, 2, 3].map((num) => (
                <p key={num} className="property_num">{`Property #${num}`}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="actions">
          <Button
            icon={fileIcon}
            title="Check Details"
            bgColor={'rgba(242, 237, 107, 0.1)'}
            style={{ border: '1px solid #EDEA99' }}
          />
          <Button
            icon={reloadIcon}
            title="Reload"
            bgColor={'rgba(242, 237, 107, 0.1)'}
            style={{
              border: '1px solid #EDEA99',
              width: 'auto',
              margin: '0 .5rem',
            }}
          />
          <Button
            icon={verticalDots}
            bgColor={'rgba(242, 237, 107, 0.1)'}
            style={{
              border: '1px solid #EDEA99',
              padding: '13px',
              width: 'auto',
            }}
          />
        </div>
      </div>
      <div className="separator"/>
      <div className="stats_container">
        {
          stats.map((stat)=> (
            <Stat
            key={stat.title}
            icon={stat.icon}
            quantity={stat.quantity}
            title={stat.title}
            status={stat?.status}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Header
