import React from 'react';
import Categories from './subComponents/Categories';
import Header from './subComponents/Header';
import List from './subComponents/List';
import "./subComponents/main.css";
import Name from './subComponents/Name';
import Photo from './subComponents/Photo';
import Reward from './subComponents/Reward';

const Main = () => {
  return (
    <div>
        <Header />
        <Photo />
        <Name />
        <Reward />
        <Categories />
        <List />
    </div>
  )
}

export default Main