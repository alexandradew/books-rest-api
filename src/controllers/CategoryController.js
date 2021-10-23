const knex = require('../database');

module.exports = {

  async index(req, res, next) {      
    try{

      let response = await knex.select('*').from('categories');
      return res.json(response);

    }catch(err){      
      next(err);
    }
  },

  async show(req, res, next) {      
    try{

      let response = await knex.select('*').from('categories').where('id', req.params.id);
      return res.json(response);

    }catch(err){
      next(err);
    }
  },

  async store(req, res, next) {      
    try{        

      const { name } = req.body;

      await knex('categories').insert({
        name: name,
        created_at: new Date(),
        updated_at: new Date(),
      })

      return res.status(201).json({'message': 'Success'});

    }catch(err){
      next(err);
    }
  },

  async update(req, res, next) {      
    try{        

      const { name } = req.body;
      await knex('categories').where('id', req.params.id).update({
        name: name,
        updated_at: new Date(),
      })

      return res.status(201).json({'message': 'Updated successfully'});

    }catch(err){

      next(err);

    }
  },

  async destroy(req, res, next) {          
    try{        

      await knex.delete('*').from('categories').where('id', req.params.id);
      return res.status(201).json({'message': 'Deleted successfully'});

    }catch(err){
      next(err);
    }
  }
}