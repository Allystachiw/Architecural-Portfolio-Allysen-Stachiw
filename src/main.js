import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const Balance = [
  "./BalanceImages/Cityskyline.jpg",
  "./BalanceImages/Forsetcabin.jpg",
  "./BalanceImages/Stadiumfront.jpg",
  "./BalanceImages/ImageLogos.jpg",
];

const Dino = [
  "./Modelimages/Dino Chart.png",
  "./Modelimages/Pavillion.png",
  "./Modelimages/Solid Torus.png",
  "./Modelimages/Surface Torus.png",
];

const Dinomodel = [
  "./Modelimages/Dino 3D Print.jpg",
  "./Modelimages/Blender Model.png",
  "./Modelimages/Rhino Render.png",
  "./Modelimages/Dino Poly Model.jpg",
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
          <a href="./BalanceImages/Balancebox.jpg" target="_blank">
        <img src="./BalanceImages/Balancebox.jpg" id="model1" alt="Model 1 Image" />
      </a>
        </div>
        <div id="images-description">
          <div id="images">
             ${Balance
              .map(
                (Balance, index) => `<a href="${Balance}" target="_blank"><img src="${Balance}" alt="cube${index + 1}" /></a>`
              )
              .join("")}

              <a href="file:///C:/Users/allys/Downloads/BalanceImages/Cityskyline.jpg" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/BalanceImages/Forsetcabin.jpg" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/BalanceImages/Stadiumfront.jpg" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/BalanceImages/ImageLogos.jpg" target="_blank">
            </a>
          </div>
          <h4 id="description">A Balanced Lifestyle is a Cadavre Exquis that highlights the importance of balancing the many things in one's life to remain happy and healthy. Too often in this world we get overwhelmed by work that we forget to balance it out with something we love. So, this Cadavre Exquis aims to show that everything in life needs to be balanced rather than having only one thing that takes up most of the time which only leaves a small amount for everything else.</h4>
        </div>
      </div>
    
      
      <section id="projects">
      <div id="project-row">
      Baby Dino
        <div class="three-model">
          <a href="./Modelimages/Rhino Model.png" target="_blank">
        <img src="./Modelimages/Rhino Model.png" id="model1" alt="Model 1 Image" />
      </a>
        </div>
        <div id="images-description">
          <div id="images">
             ${Dino
              .map(
                (Dino, index) => `<a href="${Dino}" target="_blank"><img src="${Dino}" alt="cube${index + 1}" /></a>`
              )
              .join("")}

               <a href="file:///C:/Users/allys/Downloads/Modelimages/Dino%20Chart.png" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/Modelimages/Pavillion.png" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/Modelimages/Solid%20Torus.png" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/Modelimages/Surface%20Torus.png" target="_blank">
            </a>
          </div>
          <h4 id="description">The charts compare the different finding between a FBX, OBJ, and STL file. The models are of a pavillion, solid torus, surface torus, and a 3D model of Baby Dino, a mascot for the Dinos Womens Rugby Team.</h4>
        </div>
      </div>


      <section id="projects">
      <div id="project-row">
      Model Images
        <div class="three-model">
          <a href="./Modelimages/Rhino Model.png" target="_blank">
        <img src="./Modelimages/Rhino Model.png" id="model1" alt="Model 1 Image" />
      </a>
        </div>
        <div id="images-description">
          <div id="images">
             ${Dinomodel
              .map(
                (Dinomodel, index) => `<a href="${Dinomodel}" target="_blank"><img src="${Dinomodel}" alt="cube${index + 1}" /></a>`
              )
              .join("")}

              <a href="file:///C:/Users/allys/Downloads/Modelimages/Dino%203D%20Print.jpg" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/Modelimages/Blender%20Model.png" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/Modelimages/Rhino%20Render.png" target="_blank">
            </a>
            <a href="file:///C:/Users/allys/Downloads/Modelimages/Dino%20Poly%20Model.jpg" target="_blank">
            </a>
          </div>
          <h4 id="description">Images of the 3D Baby Dino model.</h4>
        </div>
      </div>

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


//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/Baby Dino Model.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");