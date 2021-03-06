import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon } from '@alifd/next';
import IceImg from '@icedesign/img';

import Logo from '../Logo';
import './index.scss';

const Header = withRouter(() => {
  return (
    <div className="header-container">
      <div className="header-content">
        <Logo isDark />

        <Balloon
          trigger={(
            <div
              className="ice-design-header-userpannel ice-dedign"
            >
              <IceImg
                height={40}
                width={40}
                src={require('./images/avatar.png')}
                className="user-avatar"
              />
              <div className="user-profile">
                <span className="user-name">
                  淘小宝
                </span>
                <br />
                <span className="user-department">技术部</span>
              </div>
              <Icon type="arrow-down" size="xxs" className="icon-down" />
            </div>
)}
          closable={false}
          className="user-profile-menu"
        >
          <ul>
            <li className="user-profile-menu-item">
              <Link to="/setting">
                <Icon type="set" size="small" />
                设置
              </Link>
            </li>
            <li className="user-profile-menu-item">
              <Link to="/account/login">
                <Icon type="upload" size="small" />
                退出
              </Link>
            </li>
          </ul>
        </Balloon>
      </div>
    </div>
  );
});

export default Header;
