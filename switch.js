const local = "quarto";

switch (local) { // provedor de informações. Ela ouve as variáveis.
    case "cinema":
        console.log("Entrou no cinema!");
        break;
    case "quarto":
    case "sala":
        console.log("Entrou em casa!");
        break;
    default:
        console.log("Qualquer valor diferente dos cases acima.");
        break;
}
