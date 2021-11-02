import React, { useEffect, useState, useRef } from 'react';
import { WorkType } from '../../../types/types';
import './WorksItem.scss';
import { Details } from './Details/Details';

type WorksItemType = {
  className: string;
  work: WorkType;
}

export const WorksItem: React.FC<WorksItemType> = ({ work, className }) => {

  const [isFocus, setIsFocus] = useState(false)

  const [isDetails, setIsDetails] = useState(false);

  const itemImageRef = useRef(null);
  const itemInfoRef = useRef(null);
  const itemTitleRef = useRef(null);
  const itemYearRef = useRef(null);
  const detailsBgRef = useRef(null);

  const closeDetails = () => {
    setIsDetails(false);
  }

  const onMouseEnter = () => {
    setIsFocus(true);
  }

  const onMouseLeave = () => {
    setIsFocus(false);
  }

  useEffect(() => {
    if (isDetails) {
      setIsFocus(false);
      document.body.classList.add("details-open");
    } else {
      document.body.classList.remove("details-open");
    }
  }, [isDetails])

  useEffect(() => {

    const clickHandler = (ev: MouseEvent) => {

      console.log('handler')

      if (ev.target === itemInfoRef.current || ev.target === itemImageRef.current ||
        ev.target === itemYearRef.current || ev.target === itemTitleRef.current) {
        setIsDetails(true);
      }

      if (ev.target === detailsBgRef.current) {
        setIsDetails(false)
      }
    }

    window.addEventListener("click", clickHandler)
    return () => {
      window.removeEventListener("click", clickHandler);
    }
  }, [itemInfoRef, detailsBgRef, itemImageRef, itemYearRef, itemTitleRef])

  const title = work.title[0].toUpperCase() + work.title.slice(1);

  return (
    <div onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} className={className + ' work-item'}>
      <img ref={itemImageRef} src={work.preview.imageUrl} alt={work.preview.imageAlt} />

      {
        isFocus &&
        <div ref={itemInfoRef} className="work-item__info">
          <div ref={itemTitleRef} className="work-item__title">{title}</div>
          <div ref={itemYearRef} className="work-item__year">{work.date.year}</div>
        </div>
      }

      {isDetails &&
        <div ref={detailsBgRef} className="work-item__details">
          <Details closeDetails={closeDetails} work={work} />
        </div>
      }

    </div>
  );
}