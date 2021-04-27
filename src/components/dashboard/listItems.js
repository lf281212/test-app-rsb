import React from 'react';
import ListItemButton from './ListItemButton';

import BusinessIcon from '@material-ui/icons/Business';
import DevicesIcon from '@material-ui/icons/Devices';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DnsIcon from '@material-ui/icons/Dns';
import ReportIcon from '@material-ui/icons/Report';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import BuildIcon from '@material-ui/icons/Build';

export const MainListItems = (props) => {
    const { isToolbarOpen } = props;
    return (
        <div>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Офисы" linkTo="/empty-page" icon={<BusinessIcon />}>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Оборудование" linkTo="/empty-page" icon={<DevicesIcon />}>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Phones"
                tabMenuItems={
                    [
                        { text: 'Телефоны инфо', linkTo: '/empty-page' },
                        { text: 'Телефоны по ФИО', linkTo: '/empty-page' },
                        { text: 'Телефоны с переадресацией', linkTo: '/empty-page' }
                    ]
                } icon={<PhoneIphoneIcon />}>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="IP Planning"
                tabMenuItems={
                    [
                        { text: 'IPAM', linkTo: '/ip-page' }
                    ]
                } icon={<DnsIcon />}>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Reports" linkTo="/empty-page" icon={<ReportIcon />}>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Phone reports" icon={<PhonelinkRingIcon />}
                tabMenuItems={
                    [
                        { text: 'По моделям', linkTo: '/phones-page' },
                        { text: 'По кластерам', linkTo: '/phones-page' },
                        { text: 'По не используемым', linkTo: '/phones-page' },
                        { text: 'По agent licenses', linkTo: '/phones-page' }
                    ]
                }>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Tools" icon={<BuildIcon />}
                tabMenuItems={
                    [
                        { text: 'Поиск незарегистрированных телефонов', linkTo: '/reports-page' },
                        { text: 'CUCM маршрутизация', linkTo: '/reports-page' },
                        { text: 'Testing CORS requests', linkTo: '/reports-page' }
                    ]
                }>
            </ListItemButton>
        </div>
    )
}

export default MainListItems;