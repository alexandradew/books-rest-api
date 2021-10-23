const knex = require('../database');

module.exports = {

  async index(req, res, next) {      
    try{

      let response = await knex.select('*').from('books');
      return res.json(response);

    }catch(err){      
      next(err);
    }
  },

  async show(req, res, next) {      
    try{

      let response = await knex.select('*').from('books').where('id', req.params.id);
      return res.json(response);

    }catch(err){
      next(err);
    }
  },

  async store(req, res, next) {      
    try{        

      const { name, category_id, author_id } = req.body;

      await knex('books').insert({
        name: name,
        category_id: category_id,
        author_id: author_id,
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

      const { name, category_id, author_id } = req.body;
      await knex('books').where('id', req.params.id).update({
        name: name,
        category_id: category_id,
        author_id: author_id,        
        updated_at: new Date(),
      })

      return res.status(201).json({'message': 'Updated successfully'});

    }catch(err){

      next(err);

    }
  },

  async destroy(req, res, next) {          
    try{        

      await knex.delete('*').from('books').where('id', req.params.id);
      return res.status(201).json({'message': 'Deleted successfully'});

    }catch(err){
      next(err);
    }
  }
}