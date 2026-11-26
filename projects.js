
// PROJECT INFORMATION

const projects = {

    "look-001": {
        number: "MODEL 001",
        title: "Feather Motif Corset",

        materials: `
           Embroidered feather motifs with sequins.
        `,

        role: `
           I worked with the design team on their vision for this project, creating the feather motif embroidery and collaborating on the overall design and construction of the corset with our fabric supplier. Worked closely with Product Development to ensure fabric was within cost and MOQ targets. It was featured in the 2026 VS Fashion Show, worn by Anok Yai.
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
            I collaborated with the design team on the overall aesthetic and worked with our fabric supplier to ensure quality standards were met. Worked closely with Product Development to ensure fabric was within cost and MOQ targets.This set was worn in the 2026 VS Fashion Show.
        `,

        photos: [
            "Images/Atelier/look-002-details.png"
        ]
    },

    "look-003": {
        number: "MODEL 003",
        title: "Logo Body Jewelry",

        materials: `
            Metal and crystal rhinestones.
        `,

        role: `
            Worked alongside the design team and my trim suppliers to ensure aesthetic and quality standards were met, along with cost targets and making it production ready. This was worn in the 2026 VS Fashion Show.
        `,

        photos: [
            "Images/Atelier/look-003-details.png"
        ]
    },

    "look-004": {
        number: "MODEL 004",
        title: "Frou Frou",

        materials: `
            Embroidered chiffon on delicate, floral lace.
        `,

        role: `
            Sourced and developed with fabric suppliers to ensure leadtime, MOQ, cost and quality standards were met.
        `,

        photos: [
            "Images/dream-angels/look-004-details.png",
            "Images/dream-angels/look-004-details-1.png"

        ]
    },


    "look-005": {
        number: "MODEL 005",
        title: "Shimmer",

        materials: `
            Embroidered tulle with sequins.
        `,

        role: `
            Collaborated with the design team to ensure aesthetic, color and quality standards were met. Worked closely with Product Development to ensure fabric was within cost and MOQ targets.
        `,

        photos: [
            "Images/dream-angels/look-005-details.png"
        ]
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
