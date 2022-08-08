/* Requests the public projects on my GitHub */

// Call the functions when the page is loaded
window.onload = function() {
    var pageName = getPageName();
    var projectsJson = requestProjects(pageName);
}

// Get the name of the loaded page
function getPageName() {
    var path = window.location.pathname
    var page = path.substring(path.lastIndexOf('/') + 1)
    return page
}

// Makes the request to the GitHub API
function requestProjects(PageName) {
    const requestURL = "https://api.github.com/users/Jonas-petty/repos"

    let request = new XMLHttpRequest()

    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()

    request.onload = function() {
        var projectsResponse = request.response
        console.log(projectsResponse, PageName)
        if (PageName == 'index.html') {
            showProjects(projectsResponse, 6) // show just 6 projects on the index page
        } else if (PageName == 'projects.html') {
            showProjects(projectsResponse) // show every project on the projects page
        }
    }
}

// Shows the results on the page
function showProjects(jsonObject, nProjects) {
    var projects = jsonObject

    var projectsGrid = document.getElementById('projects_grid')

    if (nProjects == null) {
        nProjects = projects.length
    }
    
    for (var i = 0; i <= nProjects; i++) {
        if (projects[i]['name'] != 'Jonas-petty') {
            var myA = document.createElement('a')
            myA.href = projects[i]['html_url']
            myA.target = '_blank'
    
            var myP1 = document.createElement('p')
            myP1.textContent = `${projects[i]['language']}`
    
            var myP2 = document.createElement('p')
            myP2.textContent = `${projects[i]['name'].replace(/_/g, ' ')}`

            var myP3 = document.createElement('p')
            myP3.textContent = `${projects[i]['description']}`
    
            myP1.className = 'lang'
            myP2.className = 'name'
            myP3.className = 'desc'
    
    
    
            projectsGrid.appendChild(myA)
            myA.appendChild(myP1)
            myA.appendChild(myP1)
            myA.appendChild(myP2)
            myA.appendChild(myP3)
            //console.log(projects[i]['name'])
        }
    }
}

/*
function showAllProjects(jsonObject) {
    var projects = jsonObject

    var area = document.getElementById('all_projects')

    for (var i = 0; i <= projects.length; i++) {
        var myP = document.createElement("p")
        var myBr = document.createElement("br")
        myP.textContent =`${projects[i]['name']}`
        console.log(projects[i]['name'])

        area.appendChild(myP)
        area.appendChild(myBr)
    }
}
*/