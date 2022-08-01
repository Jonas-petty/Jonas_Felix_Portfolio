// Requests the public projects on my GitHub
const requestURL = "https://api.github.com/users/Jonas-petty/repos"

let request = new XMLHttpRequest()

request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    var projectsResponse = request.response
    showProjects(projectsResponse)
}


function showProjects(jsonObject) {
    var projects = jsonObject

    var projectsGrid = document.getElementById('projects_grid')
    
    for (var i = 0; i < projects.length; i++) {
        if (projects[i]['name'] != 'Jonas-petty') {
            var myA = document.createElement('a')
            myA.href = projects[i]['html_url']
            myA.target = '_blank'
    
            var myP1 = document.createElement('p')
            myP1.textContent = `${projects[i]['language']}`
    
            var myP2 = document.createElement('p')
            myP2.textContent = `${projects[i]['name'].replace('_', ' ')}`

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