import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import TabSystem from "../TabSystem/TabSystem";

const DashboardHome = () => (<div>dashboard home</div>);
const DashboardTranscations = () => (<div>dashboard transcations</div>);

const VendWallet = () => (<div className="text-center">Vend wallet system</div>)
// const Settings = () => (<div className="text-center">Settings</div>)
const FolderPath = () => (<div>folder path</div>);
const Notifications = () => (<div>Notification</div>);


class GridSoftware extends Component {
    render = () => {
        return (
            <ul>
                <li>You</li>
                <li>Plus Me</li>
            </ul>
        )
    }
}

export default [
    {
        iconName: "person",
        title: "Dashboard",
        path: '/dashboard',
        component: TabSystem,
        routes: [
            {
                path: '/dashboard',
                exact: true,
                component: () => <Redirect replace to="/dashboard/home" />
            },
            {
                path: '/dashboard/home',
                component: DashboardHome,
                tab: 'Dashboard',
                tabIcon: 'block'
            },
            {
                path: '/dashboard/transcations',
                component: DashboardTranscations,
                tab: 'Transcations',
                tabIcon: 'card'
            }
        ]
    },
    {
        iconName: "grid",
        title: "Vend",
        path: '/vend',
        component: GridSoftware,
    },
    {
        iconName: "people",
        title: "Vend",
        path: '/wallet',  
        component: TabSystem,
        routes: [
            {
                path: '/wallet',
                component: VendWallet,
                tab: 'My Wallet'
            },
            {
                path: '/wallet/stolen',
                component: VendWallet,
                tab: 'Stolen Wallet'
            }
        ]
    },
    {
        iconName: "folder",
        title: "Settings",
        path: '/settings',  
        component: FolderPath,
    },
    {
        iconName: "bell",
        title: "Notifications",
        path: "/notification",
        component: Notifications
    }

];
