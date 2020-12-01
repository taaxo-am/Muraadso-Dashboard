import user from "./user.png";

export const STATUS_OFFLINE = false
export const STATUS_ONLINE = true

const users = [
    {
        id: 1,
        name: 'David James',
        phone: '+252 63 4324324',
        location: 'Hargeysa',
        avatar: user,
        status: STATUS_ONLINE
    },
    {
        id: 2,
        name: 'Yasir Yare',
        phone: '+252 63 4324324',
        location: 'Baki',
        avatar: user,
        status: STATUS_ONLINE
    },
    {
        id: 3,
        name: 'Axmed Axmed',
        phone: '+252 63 4324324',
        location: 'Qaloocan',
        avatar: user,
        status: STATUS_OFFLINE
    },
    {
        id: 4,
        name: 'Muraadso',
        phone: '+252 63 4324324',
        location: 'Agabar',
        avatar: user,
        status: STATUS_ONLINE
    },
    {
        id: 4,
        name: 'Muraadso',
        phone: '+252 63 4324324',
        location: 'Agabar',
        avatar: user,
        status: STATUS_ONLINE
    },
]

export default users
