
// PROJECT INFORMATION

const projects = {

    "look-001": {
        number: "MODEL 001",
        title: "Project One",

        materials: `
            Fabric: Add fabric name here.
            Trim: Add trim details here.
            Additional details: Add material specifications here.
        `,

        role: `
            Describe your contributions to this project,
            including textile design, sourcing, development,
            or any other responsibilities.
        `,

        photos: [
            "images/look-001-detail-1.jpg",
            "images/look-001-detail-2.jpg"
        ]
    },

    "look-002": {
        number: "MODEL 002",
        title: "Project Two",

        materials: `
            Add your fabric and trim information here.
        `,

        role: `
            Describe your role in this project here.
        `,

        photos: [
            "images/look-002-detail-1.jpg"
        ]
    },

    "look-003": {
        number: "MODEL 003",
        title: "Project Three",

        materials: `
            Add your fabric and trim information here.
        `,

        role: `
            Describe your role in this project here.
        `,

        photos: []
    }

};


// MODAL FUNCTIONALITY

const modal = document.getElementById("projectModal");
const closeButton = document.getElementById("modalClose");

const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalMaterials = document.getElementById("modalMaterials");
const modalRole = document.getElementById("modalRole");
const modalGallery = document.getElementById("modalGallery");

let lastFocusedElement;


// OPEN MODAL

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("click", () => {

        const project = projects[card.dataset.project];

        if (!project) return;

        lastFocusedElement = card;

        modalNumber.textContent = project.number;
        modalTitle.textContent = project.title;
        modalMaterials.textContent = project.materials;
        modalRole.textContent = project.role;

        modalGallery.replaceChildren();

        project.photos.forEach(photo => {

            const image = document.createElement("img");

            image.src = photo;
            image.alt = project.title + " detail photograph";
            image.loading = "lazy";

            modalGallery.appendChild(image);

        });

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        closeButton.focus();

    });

});


// CLOSE MODAL

function closeModal() {

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

}

closeButton.addEventListener("click", closeModal);


// CLOSE WHEN CLICKING OUTSIDE THE WINDOW

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }

});
