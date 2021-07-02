exports.seed = (knex) => {
  // Inserts seed entries
  return knex('personas').del()
    .then(() => {
      return knex('personas').insert([
        { id: 1, name: 'Keisuke', picture: '/images/avatar-02.svg', music: 'Dance', nationality: 'Japanese', food: 'snapper' },
        { id: 2, name: 'Kritika', picture: '/images/avatar-01.svg', music: 'indi', nationality: 'India', food: 'tank' },
        { id: 3, name: 'Westley', picture: '/images/avatar-01.svg', music: 'rock', nationality: 'Maori', food: 'hāngī' },
        { id: 4, name: 'Kris', picture: '/images/avatar-01.svg', music: 'rock', nationality: 'British', food: 'pita-pit' }
      ])
    })
}
