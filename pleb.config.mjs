export default {
    pinnedPackages: [
        { name: 'react', reason: 'we are not ready for react v19 yet' },
        { name: 'react-dom', reason: 'we are not ready for react v19 yet' },
        { name: '@types/react', reason: 'we are not ready for react v19 yet' },
        { name: '@types/react-dom', reason: 'we are not ready for react v19 yet' },
        { name: 'remix-utils', reason: 'uses react router v7 and we are incompatible with it' },
    ],
};
