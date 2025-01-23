const accordionData = [
  {
    id: 1,
    title: "What is JavaScript?",
    content:
      "JavaScript is a versatile programming language primarily used for web development. It allows you to create interactive and dynamic web pages.",
  },
  {
    id: 2,
    title: "What is an API?",
    content:
      "An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It allows different systems to communicate with each other.",
  },
  {
    id: 3,
    title: "What is the difference between CSS and SCSS?",
    content:
      "CSS is a style sheet language used for describing the presentation of a document written in HTML. SCSS (Sassy CSS) is an extension of CSS that adds features like variables, nested rules, and mixins, making stylesheets more maintainable.",
  },
  {
    id: 4,
    title: "What is the purpose of a database?",
    content:
      "A database is used to store, organize, and manage data efficiently. It allows users to retrieve and manipulate data quickly and reliably.",
  },
  {
    id: 5,
    title: "What is a RESTful API?",
    content:
      "A RESTful API is an API that adheres to the principles of REST (Representational State Transfer). It uses standard HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

const createAccordion = ({ title, content }) => {
  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item";

  const accordionTitle = document.createElement("div");
  accordionTitle.className = "accordion-title";

  const accordionTextTitle = document.createElement("h3");
  accordionTextTitle.textContent = title;

  const accordionIcon = document.createElement("i");
  accordionIcon.className = "fa-duotone fa-solid fa-caret-down";

  const accordionContent = document.createElement("div");
  accordionContent.className = "accordion-content";

  const accordionTextContent = document.createElement("p");
  accordionTextContent.textContent = content;

  accordionTitle.appendChild(accordionTextTitle);
  accordionTitle.appendChild(accordionIcon);
  accordionContent.appendChild(accordionTextContent);
  accordionItem.appendChild(accordionTitle);
  accordionItem.appendChild(accordionContent);

  return accordionItem;
};

const fetchAccordionData = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 0);
  });
};

const renderAccordionData = async (wrapper, accordionData) => {
  wrapper.innerHTML = "";
  const data = await fetchAccordionData(accordionData);
  if (Array.isArray(data)) {
    data.forEach((item) => {
      const createdAccordionItem = createAccordion(item);
      wrapper.appendChild(createdAccordionItem);
    });
  }
};

(async () => {
  await renderAccordionData(accordionWrapper, accordionData);
  const accordionTitle = document.querySelectorAll(".accordion-title");
  accordionTitle.forEach((currentItem) => {

    // Single Select

    /* currentItem.addEventListener("click", () => {
      if (currentItem.classList.contains("active")) {
        currentItem.classList.remove("active");
      } else {
        let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
        getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
          currentActiveItem.classList.remove("active");
        });
        currentItem.classList.add("active");
      }
    });
    */

    // multiselect
    currentItem.addEventListener('click', () => {
      currentItem.classList.toggle('active');
    });
  });
})();
