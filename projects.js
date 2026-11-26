
// PROJECT INFORMATION

const projects = {

    "look-001": {
        number: "MODEL 001",
        title: "Atelier - Feather Motif Corset",

        materials: `
           Embroidered feather motifs with sequins.
        `,

        role: `
           I worked with the design team on their vision for this project, creating the feather motif embroidery and collaborating on the overall design and construction of the corset with our fabric supplier. We did multiple versions with and without beads & sequins, multiple szes and shapes. It was featured in the 2026 VS Fashion Show, worn by Anok Yai.
        `,

        photos: [
            "Images/Atelier/look-001-details.png",
        ]
    },

    "look-002": {
        number: "MODEL 002",
        title: "Frosted",

        materials: `
            Fabric: Embroidered tulle with sequins and beads.
        `,

        role: `
            Describe your role in this project here.
        `,

        photos: [
            "Images/Atelier/look-002-details.png"
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
