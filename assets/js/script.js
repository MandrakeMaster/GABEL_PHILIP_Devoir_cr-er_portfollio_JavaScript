// Sélection des éléments DOM
const form = document.querySelector("#comment-form");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const commentsList = document.querySelector("#comments");
const errorDisplay = document.querySelector("#error");

form.addEventListener("submit", function(event) {
    // 1. Empêcher la soumission par défaut
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const commentValue = commentInput.value.trim();

    // 2. Réinitialisation des erreurs
    errorDisplay.textContent = "";
    errorDisplay.style.backgroundColor = "transparent";
    errorDisplay.style.padding = "0";

    // 3. Validation des champs
    if (nameValue.length < 2) {
        errorDisplay.textContent = "Le nom doit contenir 2 caractères minimum";
        errorDisplay.style.backgroundColor = "#fee2e2";
        errorDisplay.style.color = "#dc2626";
        return;
    }

    if (commentValue.length < 10) {
        errorDisplay.textContent = "Le commentaire doit contenir 10 caractères minimum";
        errorDisplay.style.backgroundColor = "#fee2e2";
        errorDisplay.style.color = "#dc2626";
        return;
    }

    // 4. Création des éléments du commentaire
    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    const author = document.createElement("h4");
    author.textContent = nameValue;

    const commentText = document.createElement("p");
    commentText.textContent = commentValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Supprimer";
    deleteBtn.classList.add("btn-delete");

    // 5. Gestion de la suppression
    deleteBtn.addEventListener("click", function() {
        newComment.remove();
    });

    // 6. Insertion dans la liste
    newComment.appendChild(author);
    newComment.appendChild(commentText);
    newComment.appendChild(deleteBtn);
    commentsList.appendChild(newComment);

    // 7. Nettoyage du formulaire
    form.reset();
});