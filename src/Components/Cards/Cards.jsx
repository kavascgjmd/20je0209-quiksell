import React from 'react';
import './Cards.css';
import { useRecoilValue } from 'recoil';
import { groupState } from '../../Atom';
import { imagePaths } from '../../assets/image';
const MediaControlCard = ({ title, id, tag, priority, userId, status, userAvailable}) => {
  const group = useRecoilValue(groupState);
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        {(group === 'priority' || group === 'status') && (
          <div className="user-avatar">
            <img src={imagePaths.userimage[userId]} alt="User avatar" />
            <span className={`availability-dot ${userAvailable ? 'available' : ''}`}></span>
          </div>
        )}
      </div>
      <h2 className="card-title">{title}</h2>
      <div className="card-footer">
        {group === 'user' && <span className="card-priority"><img src={imagePaths.priority[priority]} alt={priority} /></span>}
        {group === 'priority' && <span className="card-status"><img src={imagePaths.status[status]} alt={status} /></span>}
        {group === 'status' && <span className="card-priority"><img src={imagePaths.priority[priority]} alt={priority} /></span>}
        <span className="card-tag">{tag}</span>
      </div>
    </div>
  );
};


export default MediaControlCard;
