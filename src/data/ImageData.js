const logos = [
    {
        id: crypto.randomUUID(),
        title: 'Ai',
        path: '/images/logos/adobe-illustrator.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'C-Sharp',
        path: '/images/logos/c_sharp.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Figma',
        path: '/images/logos/figma.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Javascript',
        path: '/images/logos/javascript.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Phaser',
        path: '/images/logos/phaser-seeklogo.png',
    },
    {
        id: crypto.randomUUID(),
        title: 'Python',
        path: '/images/logos/python.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'React',
        path: '/images/logos/react.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Typescript',
        path: '/images/logos/typescript.svg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Unity',
        path: '/images/logos/white-unity.png',
    },
]

const profiles = [
    {
        id: crypto.randomUUID(),
        title: 'Polaroid',
        path: 'images/fefer/polaroid.JPEG'
    },
    {
        id: crypto.randomUUID(),
        title: 'Profile',
        path: 'images/fefer/profile.png'
    },
]

const getProfiles = () => {
    return profiles;
}

const getLogoSVGs = () => {
    return logos;
};

export { getLogoSVGs, getProfiles }