const restrictedRoutes = ['/index', '/user']
const token = 'authenticated'

export const isAuthenticated = ({pathname}) => {
    return (token !== undefined && token.length > 0) ? restrictedRoutes.indexOf(pathname) : -1
};