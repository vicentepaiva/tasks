import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

import Auth from './screens/Auth'
import Tasklist from './screens/TaskList'

import AuthOrApp from './screens/AuthOrApp'
import Menu from './screens/Menu'
import commonStyles from './commonStyles'

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        loabelStyle: {
            fontfamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activelabelStyle: {
            color: '#080',
            fontWeight: 'bold',
        }
    }
}

const menuRoutes = {
    Today: {
        name: 'Today',
        screen:  props => <Tasklist title='Hoje' daysAhead={0} {...props}/>,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen:  props => <Tasklist title='Amanhã' daysAhead={1} {...props}/>,
        navigationOptions: {
            title: 'Amanhã'
        }
    },
    Week: {
        name: 'Week',
        screen:  props => <Tasklist title='Semana' daysAhead={7} {...props}/>,
        navigationOptions: {
            title: 'Semana'
        }
    },
    Month: {
        name: 'Month',
        screen:  props => <Tasklist title='Mês' daysAhead={30} {...props}/>,
        navigationOptions: {
            title: 'Mês'
        }
    },
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const mainRoutes = {
    AuthOrApp: {
        name:'AuthOrApp',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: menuNavigator
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'AuthOrApp'
})
export default createAppContainer(mainNavigator)