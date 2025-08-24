import React, { useState } from 'react';
import { useContext } from 'react';
import styles from './TopBar.module.css';
import { Button, Input } from 'antd';
import {
  SearchOutlined,
  NotificationOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Input className={styles.input} placeholder="搜索"></Input>
        <Button className={styles.btn} icon={<SearchOutlined />}></Button>
      </div>

      <div>
        <Button className={styles.btn} icon={<NotificationOutlined />}></Button>
        <Button className={styles.btn} icon={<SettingOutlined />}></Button>
        <Button className={styles.btn} icon={<UserOutlined />}></Button>
      </div>
    </div>
  );
};

export default TopBar;
