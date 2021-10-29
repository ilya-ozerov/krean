import React from 'react';
import { WorkType } from '../../types/types';

type WorksItemType = {
  className: string;
  work: WorkType;
}

export const WorksItem: React.FC<WorksItemType> = ({ work, className }) => {
  return (
    <div className={className}>
      <img src={work.preview.imageUrl} alt={work.preview.imageAlt} />
    </div>
  );
}