import DOMHelper from "./DOMHelper";
import datepicker from "js-datepicker";

export default class UI {
    constructor() {

    }

    getPrefab(prefab) {
        switch (prefab) {
            case "menuArrow":
                return "<svg width=\"18px\" height=\"17px\" viewBox=\"-1 0 18 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g><polygon class=\"arrow\" points=\"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596\"></polygon><polygon class=\"arrow-fixed\" points=\"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596\"></polygon><path d=\"M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z\"></path></g></svg>";
            case "settings":
                return "<svg width=\"100%\" viewBox=\"0, 0, 50, 50\"><path d=\"M 5,40 H 45\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\"></path><path d=\"M 5,10 H 45\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\"></path><path d=\"M 5,25 H 45\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\"></path></svg>";
            case "home":
                return "<svg width=\"100%\" viewBox=\"0, 0, 50, 50\"><path d=\"M 5,18 C 25,3 25,3 25,3\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path d=\"m 25,13 20,15 v 0\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path d=\"m 25,3 9,7\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path d=\"m 25,13 -9,7\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path d=\"M 10,15 V 47\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path d=\"M 40,24 V 48\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><rect width=\"4\" height=\"7\" x=\"10\" y=\"5\" style=\"fill:rgb(200,200,200);stroke-width:4.6188;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none\"></rect><path d=\"M 8,17 V 45\" style=\"fill:#808080;stroke:#1e1e1e;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0;stroke-miterlimit:4;stroke-dasharray:none\"></path><text x=\"22.035709\" y=\"42.812504\" style=\"font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.3333px;line-height:0.25;font-family:&quot;Eras Bold ITC&quot;;-inkscape-font-specification:&quot;Eras Bold ITC&quot;;fill:rgb(200,200,200);fill-opacity:1;stroke:none;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none\"><tspan x=\"22.035709\" y=\"42.812504\">D</tspan></text><text x=\"14.285713\" y=\"37.151791\" style=\"font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.3333px;line-height:0.25;font-family:&quot;Eras Bold ITC&quot;;-inkscape-font-specification:&quot;Eras Bold ITC&quot;;fill:rgb(200,200,200);fill-opacity:1;stroke:none;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none\"><tspan x=\"14.285713\" y=\"37.151791\">T</tspan></text></svg>";
            case "add":
                return "<svg width=\"100%\" viewBox=\"0, 0, 50, 50\"><path d=\"m 25,5 v 40 0 0\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\"></path><path d=\"M 45,25 H 5\" style=\"fill:none;stroke:rgb(200,200,200);stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\"></path></svg>";
            default:
                break;
        }

    }

    pageLoad() {
        this.createNewProjectModal();
        this.topnav();
        this.sidebarMenu();
        this.projectMenu();
    }

    topnav() {
        let topnavDOM = new DOMHelper;
        
        topnavDOM.div({id: "topnav", parent: "wrapper"});
        topnavDOM.div({id: "sidebar", parent: "wrapper"});
        topnavDOM.div({id: "project-view", parent: "wrapper"});
    }
    
    sidebarMenu() {
        let sidebarMenuDOM = new DOMHelper;
        
        // add DOM elements
        sidebarMenuDOM.div({id: "sidebar-menu", parent: "topnav"});
        sidebarMenuDOM.ul({parent: "sidebar-menu"});
        sidebarMenuDOM.li({id: "sidebar-menu-home", class: "menu-item"});
        sidebarMenuDOM.button({html: this.getPrefab("home"), parent: "sidebar-menu-home", id: "sidebar-menu-home-button"});
        sidebarMenuDOM.li({id: "sidebar-menu-addproject", class: "menu-item"});
        sidebarMenuDOM.button({html: this.getPrefab("add"), parent: "sidebar-menu-addproject", id: "sidebar-menu-addproject-button"});
        sidebarMenuDOM.li({id: "sidebar-menu-settings", class: "menu-item"});
        sidebarMenuDOM.button({html: this.getPrefab("settings"), parent: "sidebar-menu-settings", id: "sidebar-menu-settings-button"});

        // Add functions for new-project-modal
        const newProjectModal = document.getElementById("new-project-modal");
        const addProjectButton = document.getElementById("sidebar-menu-addproject-button");

        addProjectButton.onclick = function() {
            newProjectModal.style.display = "block";
        };

        window.onclick = function(e) {
            if (e.target == newProjectModal) {
                newProjectModal.style.display = "none";
            }
        };
    }

    projectMenu() {
        let projectMenuDOM = new DOMHelper;
        
        projectMenuDOM.div({id: "project-menu", parent: "topnav"});
        projectMenuDOM.ul({parent: "project-menu"});
        projectMenuDOM.li({id: "project-menu-addproject", class: "menu-item"});
        projectMenuDOM.div({html: this.getPrefab("add"), parent: "project-menu-addproject"});
        projectMenuDOM.li({id: "project-menu-settings", class: "menu-item"});
        projectMenuDOM.div({html: this.getPrefab("settings"), parent: "project-menu-settings"});
    }

    displayProject(project) {
        let projectDOM = new DOMHelper;
        let projectView = document.getElementById("project-view");
        while (projectView.firstChild) {
            projectView.removeChild(projectView.lastChild);
        }
        
        projectDOM.div({id: "project-container", parent: "project-view"});

        project.tasks.forEach(task => {
            createTaskTile(task, "project-container");
        });
        
        function createTaskTile(task, idParentDiv) {
            let taskTileDOM = new DOMHelper;
            // create container for task tile
            taskTileDOM.div({id: `${task.idFriendlyName}-container`, class: "task-tile", parent: idParentDiv});
            // create container for task title
            taskTileDOM.div({id: `${task.idFriendlyName}-title`, parent: `${task.idFriendlyName}-container`, class: "task-tile-title", text: task.name});
            // create container for task description
            taskTileDOM.div({id: `${task.idFriendlyName}-description`, parent: `${task.idFriendlyName}-container`, class: "task-tile-description", text: task.description});
            // create container for task info
            taskTileDOM.div({id: `${task.idFriendlyName}-info`, parent: `${task.idFriendlyName}-container`, class: "task-tile-info"});
                // add priority, date due, completed
                taskTileDOM.div({id: `${task.idFriendlyName}-priority`, class: "task-tile-info-priority", parent: `${task.idFriendlyName}-info`});
                taskTileDOM.div({id: `${task.idFriendlyName}-datedue`, class: "task-tile-info-datedue", parent: `${task.idFriendlyName}-info`});
                taskTileDOM.div({id: `${task.idFriendlyName}-completed`, class: "task-tile-info-completed", parent: `${task.idFriendlyName}-info`});
        }        
    }
    
    displayProjectList(projectArray) {
        let projectListDOM = new DOMHelper;
        // create a container div and append it to sidebar
        projectListDOM.div({id: "project-list-container", parent: "sidebar"});
        // create an ul and append it to project-list-container
        projectListDOM.ul({id: "project-list", parent: "project-list-container"});
        // for each element in array
        projectArray.forEach(project => {
            // create a li with the name of the element as id and class project-tile
            projectListDOM.li({id: `${project.idFriendlyName}-item`,class: "project-list-item-outer", parent: "project-list"});
            // create a div with id e.name and append it to project-list
            projectListDOM.div({id: project.idFriendlyName, class: "project-list-item-inner", parent: `${project.idFriendlyName}-item`});
            // create a p, set textcontent to name of element and append it to previously created div
            projectListDOM.p({text: project.name, parent: project.idFriendlyName});
            projectListDOM.button({id: `${project.idFriendlyName}-menu-arrow`, class: "menu-arrow", parent: project.idFriendlyName, html: this.getPrefab("menuArrow")});

            const menuArrowButton = document.querySelector(`#${project.idFriendlyName}-menu-arrow`);
            menuArrowButton.onclick = () => this.displayProject(project);

        });           
    }

    createNewProjectModal() {
        let newProjectModalDOM = new DOMHelper;

        newProjectModalDOM.div({id: "new-project-modal", class: "modal", parent: "wrapper", html: `
            <div class="modal-content">
                <form action="/action_page.php">
                    <label for="name">Project name:</label><br>
                    <input type="text" id="new-project-name" name="name" value="project name"><br>
                    <label for="desc">Description:</label><br>
                    <input type="text" id="new-project-desc" name="desc" value="description"><br><br>
                    <div id="new-project-datepicker"></div>
                    <input type="submit" value="Add project">
                </form> 
            </div>
        `});
         
        const newProjectDatepicker = datepicker(document.getElementById("new-project-datepicker"));
    }
}