import React from 'react';
import './Works.scss';

import workImage from "./../../assets/images/works/workImage.png";
import bigWorkImage from "./../../assets/images/works/bigWorkImage.png";

import { WorkType } from '../../types/types';
import { v1 as uuidv1 } from 'uuid';
import { WorksItem } from './WorksItem';



const works: WorkType[] = [
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 1', preview: { imageUrl: workImage, imageAlt: 'work item 1' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 2', preview: { imageUrl: workImage, imageAlt: 'work item 2' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 3', preview: { imageUrl: bigWorkImage, imageAlt: 'work item 3' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 4', preview: { imageUrl: workImage, imageAlt: 'work item 4' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 5', preview: { imageUrl: bigWorkImage, imageAlt: 'work item 5' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 6', preview: { imageUrl: workImage, imageAlt: 'work item 6' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
  {
    id: uuidv1(), date: { month: 'june', year: 2018 }, title: 'project 7', preview: { imageUrl: workImage, imageAlt: 'work item 7' }, images: [], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?'
  },
]

export const Works = () => {

  const worksList = works.map((w, index) => {

    if (index + 1 === 3 || index + 1 === 5) {
      console.log('5, 6')
      return <WorksItem key={w.id} work={w} className="gallery__item gallery-item-big" />
    }

    return <WorksItem key={w.id} work={w} className="gallery__item" />
  })

  return (
    <section className="works">
      <div className="works__content">
        <div className="works__title title">
          <h2>Works</h2>
        </div>

        <div className="title__gallery gallery">
          <div className="gallery__items">
            {worksList}
          </div>

        </div>
      </div>

    </section>
  );
}