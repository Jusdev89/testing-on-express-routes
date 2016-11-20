const { User } = require('../models/book')

const insertUsers = ( request, response ) =>
  User.insert( request.body.name )
    .then( id => response.json( { id, message: "Success!!!" } ) )
    .catch( error => response.json( { error, message: "Failure!!!" } ) )

const getUser = (request,response) =>
  User.findById( request.body.id )
    .then(user => {
      if (user) {
        response.json({user, message: "Success!!!"})
      }
      response.status(404).json({user, message: "No Users Found!!!"})
    })
    .catch(error => response.json({error,message: "Failure!!!"}) )

const updateUser = (request,response) => {
  const {name} = request.body
  const {user_id} = request.params
  User.update({id: user_id, name})
    .then(user => response.json({user,message: 'User updated'}))
    .catch(error => console.log(error))
}
module.exports = {insertUsers, getUser, updateUser}
