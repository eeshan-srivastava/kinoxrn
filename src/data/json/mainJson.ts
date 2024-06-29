import imageFile from '../../resources/images/imageFile';

const highlights = [
    {
        id: '1',
        image: imageFile.IMG_HIGHLIGHT_1,
        title: 'Surfing',
        description: 'Best Hawaiian islands for surfing.',
        deeplink: '',
    },
    {
        id: '2',
        image: imageFile.IMG_HIGHLIGHT_2,
        title: 'Hula',
        description: 'Try it yourself.',
        deeplink: '',
    },
    {
        id: '3',
        image: imageFile.IMG_HIGHLIGHT_3,
        title: 'Vulcanoes',
        description: 'Volcanic conditions can change at any time.',
        deeplink: '',
    },
];

const categories = [
    {
        id: '1',
        title: 'Adventure',
        deeplink: '',
    },
    {
        id: '2',
        title: 'Culinary',
        deeplink: '',
    },
    {
        id: '3',
        title: 'Eco-tourism',
        deeplink: '',
    },
    {
        id: '4',
        title: 'Family',
        deeplink: '',
    },
    {
        id: '5',
        title: 'Sport',
        deeplink: '',
    },
];

const top_spots = [
    {
        id: '1',
        title: 'Maui',
        deeplink: '',
        image: imageFile.IMG_SPOT_1,
    },
    {
        id: '2',
        title: 'Kauai',
        deeplink: '',
        image: imageFile.IMG_SPOT_2,
    },
    {
        id: '3',
        title: 'Honolulu',
        deeplink: '',
        image: imageFile.IMG_SPOT_3,
    },
];

export default {
    highlights,
    categories,
    top_spots,
};
