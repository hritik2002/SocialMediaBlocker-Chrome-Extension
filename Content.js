let newSite = "www.facebook.com";
// if (
//   window.location.hostname !== "www.facebook.com" &&
//   window.location.hostname !== "www.instagram.com"
// ) {
//   const name = prompt("Block this site by typing y else type n");
//   if (name === "y") {
//     newSite = window.location.hostname;
//   }
// }
const getHTML = (siteName) => {
  return `
    <div id="main">
          <div class="fof">
                  <h1>Go Back to work</h1>
                  <h2>Studing > ${siteName} </h2>
          </div>
  </div>`;
};
const getCSS = () => {
  return `
    <style>
    *{
      transition: all 0.6s;
  }
  
  html {
      height: 100%;
  }
  
  body{
      font-family: 'Lato', sans-serif;
      color: #888;
      margin: 0;
  }
  
  #main{
      display: table;
      width: 100%;
      height: 100vh;
      text-align: center;
  }
  
  .fof{
        display: table-cell;
        vertical-align: middle;
  }
  
  .fof h1{
        font-size: 50px;
        display: inline-block;
        padding-right: 12px;
        animation: type .5s alternate infinite;
  }
  
  @keyframes type{
        from{box-shadow: inset -3px 0px 0px #888;}
        to{box-shadow: inset -3px 0px 0px transparent;}
  }
        </style>
        `;
};

switch (window.location.hostname) {
  case "www.facebook.com":
    document.head.innerHTML = getCSS();
    document.body.innerHTML = getHTML("facebook");
    break;
  case "www.instagram.com":
    document.head.innerHTML = getCSS();
    document.body.innerHTML = getHTML("facebook");
    break;
  case newSite:
    document.head.innerHTML = getCSS();
    document.body.innerHTML = getHTML(newSite);
    break;
  default:
    break;
}
