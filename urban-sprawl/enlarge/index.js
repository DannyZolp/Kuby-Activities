const title = new URLSearchParams(window.location.search).get("title");
const gto = new URLSearchParams(window.location.search).get("gto");

document.getElementById("embed").setAttribute("FlashVars", `gto=${gto}`);
document.getElementById("paramFlashVars").setAttribute("value", `gto=${gto}`);

document.title = title;
