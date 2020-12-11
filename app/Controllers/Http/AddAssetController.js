'use strict'
const Asset= use('App/Models/Asset')

class AddAssetController {
    async index ({ view }) {
        const asset = await Asset.all()
      
        return view.render('asset.add_asset', { asset: asset.toJSON() })
      }



}

module.exports = AddAssetController
