# Projet Hackathon 2 !

Conventions utilisées :

css nesting
classes partout (<div class="menu">
<h2 class="menu__h2">Page 1</h2>
<button class="menu__button  menu__button--is-selected">Page 2</button>
<p class="menu__p">Page 3</p>
</div>)

conventions de nommage: 
-composant: PascalCase (ListeIngredients.jsx)

-css: bem (<div class="menu">
<div class="menu__item">Page 1</div>
<div class="menu__item  menu__item--is-open">Page 2</div>
<div class="menu__item">Page 3</div>
</div>)

-variables: camelCase ( const [firstName, setFirstName] = useState("Ihechikara");
const studentList = [];
const studentObject = {};
const getStudent = () => {})

-breakpoints tailwind:
format mobile
@media only screen and (m-width : 640px) {
/* Styles */
}


format tablette 640px < max-width < 1024 px
@media only screen and (min-device-width : 640px) and (max-device-width : 1024px) {
/* Styles */
}


format laptop
@media only screen and (min-width : 1024px) {
/* Styles */
}