# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movies = Movie.create([
  {
    title: 'Игра престолов',
    kind: :serial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure illum consequuntur quo consectetur impedit vitae quisquam magnam reprehenderit, cupiditate delectus aperiam doloremque quasi quae ducimus nesciunt, repellendus nisi soluta.'
  },
  {
    title: 'Во все тяжкие',
    kind: :serial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veritatis ipsam molestiae totam, odit provident delectus voluptatem voluptatum in dolorem velit ipsum neque natus, repellendus dolores sed fugit officiis, temporibus distinctio libero. Minima impedit magnam accusamus eveniet cum aspernatur libero mollitia consequatur. Saepe itaque delectus odit ut ea praesentium dicta, non, alias quis ullam fuga quasi eligendi earum fugit. Consequuntur nemo ducimus impedit ex atque.'}
  ])
