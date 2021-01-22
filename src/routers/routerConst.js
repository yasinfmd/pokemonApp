
const DynamicRouter= [
    {
        exact: true,
        importPath: 'PokeDetail',
        path: '/poke-detail/:id',
    },
    {
        exact: true,
        importPath: 'CatchedPokeList',
        path: '/catched-pokes',
    },
    {
        exact: true,
        importPath: 'Home',
        path: '/',
    }

]
export {DynamicRouter}