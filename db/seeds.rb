# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 
#  id            :bigint           not null, primary key
#  title         :string
#  description   :text
#  kind          :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  cover         :string
#  release_date  :datetime
#  status        :integer
#  premiere_date :datetime
#  production    :string
#

stranger_things_text = "Очень странные дела 4 сезон (2020) (Stranger Things season 4) — американский телесериал. Первый сезон вышел в июле 2016 года на Netflix.
Братья Дафферы заявили, что планируют снять пять сезонов сериала. Хотя уже сегодня они прекрасно это понимают, что делать из сериала «санта-барбару» это ошибка, и не собираются растягивать сериал противоестественно, как, впрочем, и отказывать себе в возможности раскрыть характеры героев и сюжет более обстоятельно.
«Я не хочу, чтобы Stranger Things стал одним из тех сериалов, у которых «кончается бензин» и которые приходится закрывать по причине отсутствия интереса. Надо заканчивать шоу, когда ты на вершине» — отметил Мэтт Даффер.
При этом Росс Даффер добавил, что в идеале сериал не должен длиться больше пяти сезонов, но если на это будет причина и желание как у команды сериала, так и у аудитории, то «почему бы и нет».
Однако, авторы сериала знают, как сюжет будет развиваться в будущих сезонах и даже знают его примерную концовку.
«Конечная цель нам известна. Мы знаем, куда в итоге придём. Ещё не уверены, сколь долгим будет этот путь, но план у нас есть. К работе над вторым сезоном мы приступили с таким обилием идей в голове, что часть пришлось отложить, дабы вернуться к ним чуть позже. Некоторые из них мы используем в следующих сезонах. А концовку сериала мы придумали как раз в ходе мозгового штурма второго сезона, но добраться до неё за год не получится».
Создатели уже заявили, что четвертый сезон будет принципиально отличаться от третьего.
События больше не будут происходить в Хокинсе, география сериала расширится. Джим Хоппер, судьба которого неизвестна, скорее всего выжил. Поэтому зрителям вновь предстоит встретиться с «плохими русскими».
Уже известно, что новый сезон будет состоять из восьми эпизодов. Съёмки проходят с января по август 2020 года."

movies = Movie.create([
  {
    title: 'Игра престолов',
    kind: :serial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure illum consequuntur quo consectetur impedit vitae quisquam magnam reprehenderit, cupiditate delectus aperiam doloremque quasi quae ducimus nesciunt, repellendus nisi soluta.'
  },
  {
    title: 'Во все тяжкие',
    kind: :serial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veritatis ipsam molestiae totam, odit provident delectus voluptatem voluptatum in dolorem velit ipsum neque natus, repellendus dolores sed fugit officiis, temporibus distinctio libero. Minima impedit magnam accusamus eveniet cum aspernatur libero mollitia consequatur. Saepe itaque delectus odit ut ea praesentium dicta, non, alias quis ullam fuga quasi eligendi earum fugit. Consequuntur nemo ducimus impedit ex atque.'
  },
  {
    title: 'Lost',
    kind: :serial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quam ducimus optio qui aut odit expedita autem deserunt, beatae ea facere, dicta illo, facilis eius debitis veritatis ab officiis! Assumenda quo, doloribus expedita itaque dolor placeat laboriosam minus culpa numquam excepturi veniam eveniet. Sapiente laboriosam consectetur molestias libero? Veritatis nemo, repellat architecto fugit doloremque aut.'
  },
  {
    title: 'Очень странные дела',
    kind: :serial,
    description: stranger_things_text,
    release_date: DateTime.new(2020, 01, 01),
    status: :expected,
    production: 'Netflix'
  }
])
