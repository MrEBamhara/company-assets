'use strict'
const Asset= use('App/Models/Asset')
const { validate } = use('Validator')
class AssetController {
    async index ({ view }) {
        const asset = await Asset.all()
      
        return view.render('asset.index', { asset: asset.toJSON() })
      }

      async store ({ request, response, session }) {
        // validate form input
        const validation = await validate(request.all(), {
          item: 'required|min:3|max:255',
          location: 'required|min:3|max:255',
          original_value: 'required|min:3|max:255',
          current_value: 'required|min:3|max:255',
          quantity: 'required|min:1|max:255',
          description: 'required|min:3|max:255',
        })
      
        // show error messages upon validation fail
        if (validation.fails()) {
          session.withErrors(validation.messages())
                  .flashAll()
      
          return response.redirect('back')
        }
      
        // persist to database
        const asset = new Asset()
        asset.item= request.input('item')
        asset.quantity = request.input('quantity')
        asset.original_value = request.input('original_value')
        asset.value = request.input('current_value')
        asset.description = request.input('description')
        asset.location = request.input('location')
        await asset.save()
      
        // Fash success message to session
        session.flash({ notification: 'Asset successfully added!' })
      
        return response.redirect('back')
      }

      async destroy ({ params, session, response }) {
        const asset = await Asset.find(params.id)
        await asset.delete()
      
        // Fash success message to session
        session.flash({ notification: 'Asset deleted!' })
      
        return response.redirect('back')
      }
}

module.exports = AssetController
