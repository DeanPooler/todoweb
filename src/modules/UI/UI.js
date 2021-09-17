import DOMHelper from "./DOMHelper";

export default class UI {
    static pageLoad() {
        this.topnav();
        this.sidebarMenu();
        this.projectViewMenu();
    }

    static topnav() {
        let topnavDOM = new DOMHelper;
        
        topnavDOM.div({id: "topnav", parent: "wrapper"});
        topnavDOM.div({id: "sidebar", parent: "wrapper"});
        topnavDOM.div({id: "project-view", parent: "wrapper"});
    }
    
    static sidebarMenu() {
        let sidebarMenuDOM = new DOMHelper;
        
        sidebarMenuDOM.div({id: "sidebar-menu", parent: "topnav"});
        sidebarMenuDOM.ul({parent: "sidebar-menu"});
        sidebarMenuDOM.li({id: "sidebar-menu-home", class: "menu-item"});
        sidebarMenuDOM.svg({prefab: "home", parent: "sidebar-menu-home"});
        sidebarMenuDOM.li({id: "sidebar-menu-addproject", class: "menu-item"});
        sidebarMenuDOM.svg({prefab: "add", parent: "sidebar-menu-addproject"});
        sidebarMenuDOM.li({id: "sidebar-menu-settings", class: "menu-item"});
        sidebarMenuDOM.svg({prefab: "settings", parent: "sidebar-menu-settings"});
    }

    static sidebar() {

    }

    static projectViewMenu() {
        let projectViewMenuDOM = new DOMHelper;

        projectViewMenuDOM.div({id: "project-menu", parent: "topnav"});
        projectViewMenuDOM.div({id: "project-menu-addtask", class: "menu-item", parent: "project-menu"});
        projectViewMenuDOM.div({id: "project-menu-projectname", class: "menu-item", parent: "project-menu"});
        projectViewMenuDOM.div({id: "project-menu-settings", class: "menu-item", parent: "project-menu"});
    }

    static projectView() {

    }

    static displayProjectList(array) {
        let projectDOM = new DOMHelper;
        // create a container div and append it to sidebar
        projectDOM.div({id: "project-list-container", parent: "sidebar"});
        // create an ul and append it to project-list-container
        projectDOM.ul({id: "project-list", parent: "project-list-container"});
        // for each element in array
        array.forEach(e => {
            // create a li with the name of the element as id and class project-tile
            projectDOM.li({id: `${e.idFriendlyName}-item`,class: "project-list-item", parent: "project-list"});
            // create a div with id e.name and append it to project-list
            projectDOM.div({id: e.idFriendlyName, parent: `${e.idFriendlyName}-item`});
            // create a p, set textcontent to name of element and append it to previously created div
            projectDOM.p({text: e.name, parent: e.idFriendlyName});
        });

            
    }
}