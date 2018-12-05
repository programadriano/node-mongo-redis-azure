'use strict';

const PersonRepository = require('../services/personService');

var redis = require('redis');

//conexão com o compose
//var client = redis.createClient(6379, 'redis')

//conexão localhost
var client = redis.createClient()

exports.get = (req, res) => {

    client.get('allpersons', function (err, reply) {

        if (reply) {

            res.status(200).send({
                retorno: 'redis',
                person: JSON.parse(reply)
            });

        } else {

            PersonRepository.getAll()
                .then((person) => {
                    client.set('allpersons', JSON.stringify(person));
                    client.expire('allpersons', 20);

                    res.status(200).send({
                        retorno: 'db',
                        person: person
                    });

                }).catch(err => res.status(500).send(err))
        }
    });

};

exports.getById = (req, res) => {
    const _id = req.params.id;

    PersonRepository.getById(_id)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res) => {
    const vm = req.body;

    PersonRepository.create(vm)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res) => {
    PersonRepository.delete(req.params.id)
        .then(() => {
            res.status(200).send('registro deletado com sucesso!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};