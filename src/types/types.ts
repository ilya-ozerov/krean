export type WorkType = {
    id: string;
    title: string;
    preview: {
        imageUrl: string;
        imageAlt: string;
    }
    images: Array<WorkImagesType>;
    description: JSX.Element[];
    date: {
        month: string;
        year: number;
    }
}

type WorkImagesType = {
    type: 'video' | 'image';
    imageUrl: string;
    imageAlt: string;
}

export type PartnersLogoType = {
    imageUrl: string;
    imageAlt: string;
}