const {dependencies}= require('./package.json');

module.exports={
    name:'host',//redux_host not Accepting..
    filename:'remoteEntry.js',
    exposes:{},
    remotes:{
        remoteapp:'remoteapp@http://localhost:3001/remoteEntry.js',
    },
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