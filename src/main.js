import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const Balance = [
  "./BalanceImages/Cityskyline.jpg",
  "./BalanceImages/Forsetcabin.jpg",
  "./BalanceImages/Stadiumfront.jpg",
  "./BalanceImages/ImageLogos.jpg",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/houseDrawings/house1.jpg",
  "./houseDrawings/houseDrawings/house2.jpg",
  "./houseDrawings/houseDrawings/house3.jpg",
  "./houseDrawings/houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      A Balanced Lifestyle
        <div class="three-model">
          <img src="./BalanceImages/Balancebox.jpg" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
            ${Balance
              .map(
                (Balance, index) => `<img src="${Balance}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A Balanced Lifestyle is a Cadavre Exquis that highlights the importance of balancing the many things in one's life to remain happy and healthy. Too often in this world we get overwhelmed by work that we forget to balance it out with something we love. So, this Cadavre Exquis aims to show that everything in life needs to be balanced and in the picture rather than something taking up most of the space only leaving a small corner for everything else.</h4>
        </div>
      </div>
    
      ${/*Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/""} 

${/*Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => 
                  `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
