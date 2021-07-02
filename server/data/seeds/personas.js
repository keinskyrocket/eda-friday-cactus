exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('personas').del()
    .then(function () {
      // Inserts seed entries
      return knex('personas').insert([
        { id: 1, name: 'Keisuke', picture: 'tobeinclude', music: 'Dance', nationality: 'Japanese', food: 'snapper' },
        { id: 2, name: 'Kritika', picture: 'tobeinclude', music: 'indi', nationality: 'India', food: 'tank' },
        { id: 3, name: 'Westley', picture: 'tobeinclude', music: 'rock', nationality: 'Maori', food: 'hāngī' },
        { id: 4, name: 'Kris', picture: 'tobeinclude', music: 'rock', nationality: 'British', food: 'pita-pit' }
      ])
    })
}
