function generateHTML(team) {

    var html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header class="jumbotron text-center bg-dark text-white">
            <h1>Team</h1>
        </header>
    
        <main class = "container-fluid">
            <div class = "row justify-content-center">
    
                
    
                <div class = "col-md-9 card-columns">
                ${generateCards(team)}
                </div>
            </div>
        </main>
    </body>
    </html>`
  
    return html;
  }

  function generateCards(team){
      var cards = [];
      for(var i = 0; i < team.length; i++){
        cards.push(`<div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-info">${team[i].getName()}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${team[i].getRole()}</h5>
          <table class="table table-sm table-dark">
            <tbody>
                <tr>
                <th scope="row">ID</th>
                <td>${team[i].getId()}</td>
                </tr>
                <tr>
                <th scope="row">Email</th>
                <td><a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></td>
                </tr>
                ${getInfo(team[i])}
            </tbody>
            </table>
        </div>
        </div>
        `);
      }
      return cards.join("");
  }

  function getInfo(teamMember){
      switch(teamMember.getRole()){
        case "Manager" : 
            return `<tr>
            <th scope="row">Office Number</th>
            <td>${teamMember.getOfficeNumber()}</td>
            </tr>`
        case "Engineer" :
            return `<tr>
            <th scope="row">Github</th>
            <td><a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></td>
            </tr>`
        case "Intern" :
            return `<tr>
            <th scope="row">School</th>
            <td>${teamMember.getSchool()}</td>
            </tr>`

      }
  }
  
  module.exports = generateHTML;
  