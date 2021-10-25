const knex = require('../database');

module.exports = {

  async index(req, res, next) {      
    try{

      let response = await knex.select('*').from('authors');
      return res.json(response);

    }catch(err){      
      next(err);
    }
  },

  async show(req, res, next) {      
    try{

      let response = await knex.select('*').from('authors').where('id', req.params.id);
      return res.json(response);

    }catch(err){
      next(err);
    }
  },

  async store(req, res, next) {      
    try{        

      const { name } = req.body;

      if(!name){
        return res.status(400).json({'message': 'You need to provide an author name.'});
      }

      await knex('authors').insert({
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

      if(!name){
        return res.status(400).json({'message': 'You need to provide an author name.'});
      }

      await knex('authors').where('id', req.params.id).update({
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

      let booksByThisAuthor = await knex.select('*').from('books').where('author_id', req.params.id);

      if(booksByThisAuthor.length > 0){
        return res.status(403).json({'error': 'This author cannot be deleted because it is being used by a book.'});
      }

      await knex.delete('*').from('authors').where('id', req.params.id);
      return res.status(200).json({'message': 'Deleted successfully'});          
      

    }catch(err){
      next(err);
    }
  }
}