import DOMHelper from "./DOMHelper";

export default class UI {
    static pageLoad() {
        topnav();
        sidebarMenu();
        projectViewMenu();
    }

    static topnav() {
        let topnavDOM = new DOMHelper;
        
        topnavDOM.div({id: 'topnav', parent: 'wrapper'})
        topnavDOM.div({id: 'sidebar', parent: 'wrapper'})
        topnavDOM.div({id: 'project-view', parent: 'wrapper'})
    }
    
    static sidebarMenu() {
        let sidebarMenuDOM = new DOMHelper;
        
        sidebarMenuDOM.div({id: 'sidebar-menu', parent: 'topnav'})
        sidebarMenuDOM.ul({parent: 'sidebar-menu'})
        sidebarMenuDOM.li({id: 'sidebar-menu-home', class: 'menu-item'})
        sidebarMenuDOM.svg({prefab: 'home', parent: 'sidebar-menu-home'})
        sidebarMenuDOM.li({id: 'sidebar-menu-addproject', class: 'menu-item'})
        sidebarMenuDOM.svg({prefab: 'add', parent: 'sidebar-menu-addproject'})
        sidebarMenuDOM.li({id: 'sidebar-menu-settings', class: 'menu-item'})
        sidebarMenuDOM.svg({prefab: 'settings', parent: 'sidebar-menu-settings'})
    }

    static sidebar() {

    }

    static projectViewMenu() {
        let projectViewMenuDOM = new DOMHelper;

        projectViewMenuDOM.div({id: 'project-menu', parent: 'topnav'})
        projectViewMenuDOM.div({id: 'project-menu-addtask', class: 'menu-item', parent: 'project-menu'})
        projectViewMenuDOM.div({id: 'project-menu-projectname', class: 'menu-item', parent: 'project-menu'})
        projectViewMenuDOM.div({id: 'project-menu-settings', class: 'menu-item', parent: 'project-menu'})
    }

    static projectView() {

    }
}