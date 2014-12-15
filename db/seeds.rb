# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

birds = Bird.create!(name: 'Cardinal', latin_name: 'Cardinalidae', description: 'blank',
                    category: 'North America', image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cardinal_male_2.JPG/600px-Cardinal_male_2.JPG',
                    info_url: 'http://en.wikipedia.org/wiki/Cardinal_(bird)')

        Bird.create!(name: 'Blue Jay', latin_name: 'Cyanocitta cristata', description: 'blank', category: 'North America',
                    image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Blue_Jay-27527.jpg/600px-Blue_Jay-27527.jpg',
                    info_url: 'http://en.wikipedia.org/wiki/Blue_jay')

        Bird.create!(name: 'Chickadee', latin_name: 'Poecile', description: 'blank ', category: 'North America',
                    image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Poecile_atricapillus_01.jpg/600px-Poecile_atricapillus_01.jpg',
                    info_url:  'http://en.wikipedia.org/wiki/Poecile')

        Bird.create!(name: 'Tufted Titmouse', latin_name: 'Baeolophus bicolor', description: 'blank', category: 'North America',
                    image_url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Tufted_titmouse_perching_2006-11-23.jpg/600px-Tufted_titmouse_perching_2006-11-23.jpg',
                    info_url: 'http://en.wikipedia.org/wiki/Tufted_titmouse')
