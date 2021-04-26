import React from 'react';
import ListItemButton from './ListItemButton';

export const MainListItems = (props) => {
    const { isToolbarOpen } = props;
    return (
        <div>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Офисы" linkTo="/empty-page">
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Оборудование" linkTo="/empty-page">
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Phones"
                tabMenuItems={
                    [
                        { text: 'Телефоны инфо', linkTo: '/empty-page' },
                        { text: 'Телефоны по ФИО', linkTo: '/empty-page' },
                        { text: 'Телефоны с переадресацией', linkTo: '/empty-page' }
                    ]
                }>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="IP Planning"
                tabMenuItems={
                    [
                        { text: 'IPAM', linkTo: '/ip-page' }
                    ]
                }>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Reports" linkTo="/empty-page">
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Phone reports"
                tabMenuItems={
                    [
                        { text: 'По моделям', linkTo: '/reports-page' },
                        { text: 'По кластерам', linkTo: '/reports-page' },
                        { text: 'По не используемым', linkTo: '/reports-page' },
                        { text: 'По agent licenses', linkTo: '/reports-page' }
                    ]
                }>
            </ListItemButton>
            <ListItemButton isToolbarOpen={isToolbarOpen} buttonName="Tools"
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