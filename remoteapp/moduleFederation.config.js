const {dependencies}= require('./package.json');

module.exports={
    name:'remoteapp',//redux_remote not Accepting..
    filename:'remoteEntry.js',
    exposes:{
        './components/buttonComponent/buttonComponent':'./src/components/buttonComponent/buttonComponent.jsx',
        //Exposing the redux store and its dispatch and selector functionality from storeHooks..
        './reduxState/store/microfrontendslicer/countslicer':'./src/reduxState/store/microfrontendslicer/countslicer.js',
    },
    remotes:{},
    shared:{
        ...dependencies,
        react:{
            singleton:true,
            import:'react',
            shareScope:'default',
            requiredVersion:dependencies['react'],
        },
        'react-dom':{
            singleton:true,
            requiredVersion:dependencies['react-dom'],
        },
    },
};