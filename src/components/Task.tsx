import React from 'react';
import Chips from '../components/Chips';
import { ReposState } from '../stores/task/types';
import { IconBalance, IconFork, IconStar, IconError } from './icon';

const Task = (props: ReposState) => (
  <div className="container-fluid home-page-task">
    <div className="container repositories">
      <span className="repositories__title">{props.name}</span>
      <p>{props.description}</p>
      <Chips text="Ruby-gem" />
      <div>
        <span className="repositories__circle" />
        <span className="repositories__text">{}</span>
        <IconBalance width={18} height={18} fill="#586069" />
        <span className="repositories__text">MIT</span>
        <IconFork width={18} height={18} fill="#586069" />
        <span className="repositories__text">{props.forks_count}</span>
        <IconStar width={18} height={18} fill="#586069" />
        <span className="repositories__text">{props.stargazers_count}</span>
        <IconError width={18} height={18} fill="#586069" />
        <span className="repositories__text">{props.open_issues_count}</span>
        <IconFork width={18} height={18} fill="#586069" />
        <span className="repositories__texts">{props.forks}</span>
      </div>
    </div>
  </div>
);

export default Task;
