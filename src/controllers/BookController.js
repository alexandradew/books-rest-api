const knex = require('../database');

module.exports = {

  async index(req, res, next) {      
    try{

      let books = await knex.select('*').from('books');
      let response = [];
      
      for (const book of books) {             
        let author = await knex.select('*').from('authors').where('id', book.author_id);
        let category = await knex.select('*').from('categories').where('id', book.category_id);
        book['author'] = author[0];
        book['category'] = category[0];
        delete book.author_id
        delete book.category_id
        response.push(book)
      }

      return res.json(response);

    }catch(err){      
      next(err);
    }
  },

  async show(req, res, next) {      
    try{

      let response = await knex.select('*').from('books').where('id', req.params.id);
      let author = await knex.select('*').from('authors').where('id', response[0].author_id);
      let category = await knex.select('*').from('categories').where('id', response[0].category_id);
      response[0]['author'] = author[0];
      response[0]['category'] = category[0];
      delete response[0].author_id
      delete response[0].category_id
      return res.json(response);

    }catch(err){
      next(err);
    }
  },

  async store(req, res, next) {      
    try{        

      const { name, category_id, author_id } = req.body;
   
      if(!name || !category_id || !author_id){
        return res.status(400).json({'message': 'You need to provide the following fields: name, category_id, author_id' });
      }

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

      if(!name || !category_id || !author_id){
        return res.status(400).json({'message': 'You need to provide the following fields: name, category_id, author_id' });
      }

      await knex('books').where('id', req.params.id).update({
        name: name,
        category_id: category_id,
        author_id: author_id,        
        updated_at: new Date(),
      })

      return res.status(200).json({'message': 'Updated successfully'});

    }catch(err){

      next(err);

    }
  },

  async destroy(req, res, next) {          
    try{        

      await knex.delete('*').from('books').where('id', req.params.id);
      return res.status(200).json({'message': 'Deleted successfully'});

    }catch(err){
      next(err);
    }
  }
}