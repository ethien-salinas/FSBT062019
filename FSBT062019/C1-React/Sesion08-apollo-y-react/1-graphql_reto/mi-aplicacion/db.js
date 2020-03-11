module.exports = {
  persons: [
    { id:1, name: "José Arcadio Buendía" },
    { id:2, name: "Ursula Iguarán" },
    { id:3, name: "José Arcadio" },
    { id:4, name: "Rebeca" },
    { id:5, name: "Amaranta" },
    { id:6, name: "Remedios Mascote" },
    { id:7, name: "Aureliano Buendía" },
    { id:8, name: "Pilar Ternera" },
    { id:9, name: "Arcadio" },
    { id:10, name: "Santa Sofía de la Piedad" },
    { id:11, name: "Aureliano José" },
  ],
  relations: [
    { id: 1, person_id: 1, type: "Father", person: 3 },
    { id: 2, person_id: 2, type: "Mother", person: 3 },
    { id: 3, person_id: 1, type: "Father", person: 5 },
    { id: 4, person_id: 2, type: "Mother", person: 5 },
    { id: 5, person_id: 1, type: "Father", person: 7 },
    { id: 6, person_id: 2, type: "Mother", person: 7 },
    { id: 7, person_id: 4, type: "Wife", person: 3 },
    { id: 8, person_id: 6, type: "Wife", person: 7 },
    { id: 9, person_id: 8, type: "Mistress", person: 3 },
    { id: 10, person_id: 8, type: "Mistress", person: 7 },
    { id: 11, person_id: 3, type: "Father", person: 9 },
    { id: 12, person_id: 8, type: "Mother", person: 9 },
    { id: 13, person_id: 7, type: "Father", person: 11 },
    { id: 14, person_id: 8, type: "Mother", person: 11 },
  ],
}
