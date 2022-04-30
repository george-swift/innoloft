import React from 'react';
import { StyledUserInfo } from './styles';
import { IconCompany } from '../icons';

type UserInfoProps = {
  image: string;
  name: string;
  company: string;
};

const User = ({ image, name, company }: UserInfoProps) => (
  <StyledUserInfo>
    <h3>User Information</h3>
    <div className="avatar">
      <img src={image} alt={name} />
    </div>
    <p>{name}</p>
    <p>
      <span>
        <IconCompany />
      </span>{' '}
      {company}
    </p>
  </StyledUserInfo>
);

export default User;
