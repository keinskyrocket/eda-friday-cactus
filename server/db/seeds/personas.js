exports.seed = (knex) => {
  // Inserts seed entries
  return knex('personas').del()
    .then(() => {
      return knex('personas').insert([
        { id: 1, name: 'Keisuke', picture: '', music: 'Dance', nationality: 'Japanese', food: 'snapper' },
        { id: 2, name: 'Kritika', picture: '', music: 'indi', nationality: 'India', food: 'tank' },
        { id: 3, name: 'Westley', picture: '', music: 'rock', nationality: 'Maori', food: 'hāngī' },
        { id: 4, name: 'Kris', picture: '', music: 'rock', nationality: 'British', food: 'pita-pit' }
      ])
    })
}
