const seasonSelect = document.getElementById("seasonSelect");
const episodesContainer = document.getElementById("episodes");
const player = document.getElementById("player");

const seasons = [...new Set(episodes.map(e => e.season))];

seasons.forEach(s => {

    seasonSelect.innerHTML +=
        `<option value="${s}">Сезон ${s}</option>`;

});

seasonSelect.addEventListener("change", render);

render();

function render() {

    episodesContainer.innerHTML = "";
    
    const season = seasonSelect.value;

    const filtered = season === "all"
        ? episodes
        : episodes.filter(e => e.season == season);

    filtered.forEach(ep => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${ep.image}">
            <div class="title">
                Серия ${ep.episode}<br>${ep.title}
            </div>
        `;

        card.onclick = () => {
            player.src = ep.url;
        };

        episodesContainer.append(card);

    });

}